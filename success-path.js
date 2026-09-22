(function () {
  "use strict";

  const BANK = window.CCNA_QUESTIONS || [];
  const SESSION_SIZE = 20;
  const TARGET_SCORE = 85;
  const DURATION_MS = 75 * 60 * 1000;
  const VERSION = `ccna-ensa-${BANK.length}-v3`;
  const KEYS = {
    session: "ccnaEnsaExamSession",
    history: "ccnaEnsaScoreHistory",
    errors: "ccnaEnsaLastErrors",
    difficult: "ccnaEnsaDifficultQuestions",
    frequency: "ccnaEnsaQuestionFrequency",
    coverage: "ccnaEnsaBankCoverage",
  };

  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  }

  function shuffled(values) {
    const copy = [...values];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const random = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[random]] = [copy[random], copy[index]];
    }
    return copy;
  }

  function questionItem(question) {
    return {
      id: question.id,
      optionOrder: question.type === "study"
        ? []
        : shuffled((question.options || []).map((_, index) => index)),
      answer: [],
      matchingAnswer: {},
      note: "",
    };
  }

  function progressData() {
    const history = read(KEYS.history, []);
    const errors = new Set(read(KEYS.errors, []));
    const difficult = new Set(read(KEYS.difficult, []));
    const frequency = read(KEYS.frequency, { counts: {} }).counts || {};
    const coverage = read(KEYS.coverage, { seenIds: [] });
    const seen = new Set(coverage.seenIds || Object.keys(frequency).map(Number));
    const recent = history.slice(0, 5);
    const average = recent.length
      ? Math.round(recent.reduce((sum, entry) => sum + (Number(entry.percent) || 0), 0) / recent.length)
      : 0;
    const coveragePercent = BANK.length ? Math.round((seen.size / BANK.length) * 100) : 0;
    const readiness = Math.min(100, Math.round(coveragePercent * 0.45 + average * 0.55));
    return { history, errors, difficult, frequency, seen, average, coveragePercent, readiness };
  }

  function weakThemes(history) {
    const totals = new Map();
    history.slice(0, 8).forEach((session) => {
      (session.themes || []).forEach((row) => {
        const current = totals.get(row.theme) || { correct: 0, total: 0 };
        current.correct += Number(row.correct) || 0;
        current.total += Number(row.total) || 0;
        totals.set(row.theme, current);
      });
    });
    return new Set(
      [...totals.entries()]
        .filter(([, row]) => row.total && (row.correct / row.total) * 100 < TARGET_SCORE)
        .map(([theme]) => theme)
    );
  }

  function buildPlan(data) {
    const weak = weakThemes(data.history);
    const ranked = BANK.map((question) => {
      const appearances = Number(data.frequency[question.id]) || 0;
      let priority = Math.random() * 12;
      if (data.errors.has(question.id)) priority += 180;
      if (!data.seen.has(question.id)) priority += 125;
      if (data.difficult.has(question.id)) priority += 55;
      if (weak.has(question.theme)) priority += 45;
      priority += 24 / (appearances + 1);
      return { question, priority };
    }).sort((a, b) => b.priority - a.priority);

    const questions = ranked.slice(0, Math.min(SESSION_SIZE, ranked.length)).map((row) => row.question);
    const ids = new Set(questions.map((question) => question.id));
    return {
      questions,
      errors: [...data.errors].filter((id) => ids.has(id)).length,
      unseen: questions.filter((question) => !data.seen.has(question.id)).length,
      difficult: [...data.difficult].filter((id) => ids.has(id)).length,
      weak: questions.filter((question) => weak.has(question.theme)).length,
    };
  }

  function startPlan() {
    const current = read(KEYS.session, null);
    if (current && !current.submitted && current.items?.length) {
      if (!confirm("Une session est déjà en cours. Veux-tu la remplacer par ton parcours réussite ?")) return;
    }
    const plan = buildPlan(progressData());
    const session = {
      version: VERSION,
      mode: "success",
      theme: "Parcours réussite",
      createdAt: Date.now(),
      deadline: Date.now() + DURATION_MS,
      current: 0,
      submitted: false,
      submittedAt: null,
      historySaved: false,
      items: plan.questions.map(questionItem),
    };
    localStorage.setItem(KEYS.session, JSON.stringify(session));
    try {
      sessionStorage.setItem("ccnaEnsaOpenSession", "1");
    } catch {
      // The session still starts when sessionStorage is unavailable.
    }
    location.href = `${location.pathname}?v=41&resume=1`;
  }

  function recommendation(data) {
    if (!data.history.length) return "Découvre la banque et crée ton premier bilan personnalisé.";
    if (data.errors.size) return `Commence par consolider tes ${data.errors.size} erreur${data.errors.size > 1 ? "s" : ""} récente${data.errors.size > 1 ? "s" : ""}.`;
    if (data.coveragePercent < 100) return "Continue les questions inédites tout en révisant tes thèmes fragiles.";
    if (data.average < TARGET_SCORE) return "Renforce les thèmes sous 85 % avant de refaire un examen blanc.";
    return "Tu es sur la bonne trajectoire : maintiens ton niveau avec une session ciblée.";
  }

  function render() {
    const page = document.querySelector("#homeStudyShell-overview");
    if (!page) return;
    const data = progressData();
    const plan = buildPlan(data);
    let panel = document.querySelector("#successPathPanel");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "successPathPanel";
      panel.className = "success-path-panel";
      page.prepend(panel);
    }
    const planDetails = [
      plan.errors ? `${plan.errors} erreur${plan.errors > 1 ? "s" : ""}` : "",
      plan.unseen ? `${plan.unseen} inédite${plan.unseen > 1 ? "s" : ""}` : "",
      plan.weak ? `${plan.weak} de thèmes faibles` : "",
      plan.difficult ? `${plan.difficult} difficile${plan.difficult > 1 ? "s" : ""}` : "",
    ].filter(Boolean).join(" · ") || "20 questions équilibrées";

    panel.innerHTML = `
      <div class="success-path-copy">
        <span class="success-path-kicker">Parcours réussite</span>
        <h2>Ta meilleure prochaine session</h2>
        <p>${recommendation(data)}</p>
        <div class="success-path-mix">${planDetails}</div>
      </div>
      <div class="success-path-score" aria-label="Indice de préparation ${data.readiness} pour cent">
        <span>Préparation</span>
        <strong>${data.readiness}%</strong>
        <div class="success-path-track"><i style="width:${data.readiness}%"></i></div>
        <small>${data.coveragePercent}% de la banque vue · moyenne ${data.average || "-"}%</small>
      </div>
      <button type="button" class="success-path-start">Lancer mes 20 questions</button>
    `;
    panel.querySelector(".success-path-start").addEventListener("click", startPlan);
  }

  render();
  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("click", () => setTimeout(render, 100));
  setTimeout(render, 400);
  setTimeout(render, 1000);
})();
