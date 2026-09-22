(function () {
  const BANK = window.CCNA_QUESTIONS || [];
  const VERSION = `ccna-ensa-${BANK.length}-v5`;
  const DURATION_MS = 75 * 60 * 1000;
  const keys = {
    session: "ccnaEnsaExamSession",
    history: "ccnaEnsaScoreHistory",
    errors: "ccnaEnsaLastErrors",
    dailyGoal: "ccnaEnsaDailyGoal",
  };

  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch { return fallback; }
  };
  const write = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  };
  const normalize = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const escapeHtml = (value) => String(value || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function shuffle(values) {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function createQuestionItem(question) {
    return {
      id: question.id,
      optionOrder: question.type === "study" ? [] : shuffle((question.options || []).map((_, index) => index)),
      answer: [],
      matchingAnswer: {},
      note: "",
    };
  }

  function startSession(questions, mode, theme, limit) {
    const picked = shuffle(questions).slice(0, Math.min(questions.length, limit));
    write(keys.session, {
      version: VERSION,
      mode,
      theme,
      createdAt: Date.now(),
      deadline: Date.now() + DURATION_MS,
      current: 0,
      submitted: false,
      submittedAt: null,
      historySaved: false,
      items: picked.map(createQuestionItem),
    });
    location.reload();
  }

  function dayKey(date = new Date()) {
    return date.toISOString().slice(0, 10);
  }

  function dailyStats() {
    const goal = Number(read(keys.dailyGoal, 20)) || 20;
    const byDay = new Map();
    read(keys.history, []).forEach((session) => {
      const key = dayKey(new Date(session.date));
      byDay.set(key, (byDay.get(key) || 0) + (session.total || session.gradable || 0));
    });
    const today = byDay.get(dayKey()) || 0;
    let streak = 0;
    const cursor = new Date();
    while ((byDay.get(dayKey(cursor)) || 0) >= goal) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return { goal, today, streak, percent: Math.min(100, Math.round((today / goal) * 100)) };
  }

  function renderDailyGoal() {
    const overview = document.querySelector("#homeStudyShell-overview") || document.querySelector("#learningDashboard")?.parentElement;
    if (!overview) return;
    let panel = document.querySelector("#dailyGoalPanel");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "dailyGoalPanel";
      panel.className = "pro-panel";
      overview.prepend(panel);
    }
    const stats = dailyStats();
    panel.innerHTML = `
      <span class="pro-kicker">Objectif quotidien</span>
      <h2>${stats.today >= stats.goal ? "Objectif du jour valide" : `${Math.max(0, stats.goal - stats.today)} questions restantes aujourd'hui`}</h2>
      <div class="daily-goal-grid">
        <div class="daily-goal-card"><span>Aujourd'hui</span><strong>${stats.today}/${stats.goal}</strong><div class="daily-progress"><i style="width:${stats.percent}%"></i></div></div>
        <div class="daily-goal-card"><span>Serie</span><strong>${stats.streak} jour${stats.streak > 1 ? "s" : ""}</strong></div>
        <div class="daily-goal-card"><span>Objectif</span><strong><input id="dailyGoalInput" type="number" min="5" max="100" value="${stats.goal}"> / jour</strong></div>
      </div>`;
    panel.querySelector("#dailyGoalInput")?.addEventListener("change", (event) => {
      write(keys.dailyGoal, Number(event.target.value) || 20);
      renderDailyGoal();
    });
  }

  function addQuickModeButton() {
    if (document.querySelector("#quickModeBtn")) return;
    const start = document.querySelector("#startBtn");
    if (!start) return;
    const button = document.createElement("button");
    button.id = "quickModeBtn";
    button.type = "button";
    button.className = "quick-action";
    button.textContent = "Revision rapide (20)";
    button.addEventListener("click", () => startSession(BANK, "quick", "Revision rapide", 20));
    start.insertAdjacentElement("afterend", button);
  }

  function themes() {
    return [...new Set(BANK.map((q) => q.theme || "Concepts reseau"))].sort();
  }

  function ensureBankTab() {
    const shell = document.querySelector("#homeStudyShell");
    if (!shell || document.querySelector("[data-study-tab='bank']")) return;
    const nav = shell.querySelector(".study-nav");
    const pages = shell.querySelector(".study-pages");
    if (!nav || !pages) return;
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.studyTab = "bank";
    button.textContent = "Banque";
    nav.append(button);
    const page = document.createElement("section");
    page.id = "homeStudyShell-bank";
    page.className = "study-page";
    pages.append(page);
    button.addEventListener("click", () => {
      shell.dataset.active = "bank";
      shell.querySelectorAll("[data-study-tab]").forEach((item) => item.classList.toggle("active", item === button));
      shell.querySelectorAll(".study-page").forEach((item) => item.classList.toggle("active", item === page));
      renderQuestionBank();
    });
    renderQuestionBank();
  }

  function renderQuestionBank() {
    const page = document.querySelector("#homeStudyShell-bank");
    if (!page) return;
    if (!page.dataset.ready) {
      page.dataset.ready = "true";
      page.innerHTML = `
        <section class="pro-panel">
          <span class="pro-kicker">Toutes les questions</span>
          <h2>Recherche dans la banque CCNA</h2>
          <div class="bank-tools">
            <input id="bankSearch" type="search" placeholder="Rechercher VLAN, DHCP, BPDU, IPv6...">
            <select id="bankTheme"><option value="">Tous les themes</option>${themes().map((theme) => `<option>${escapeHtml(theme)}</option>`).join("")}</select>
          </div>
          <div id="bankCount" class="muted"></div>
          <div id="bankList" class="bank-list"></div>
        </section>`;
      page.querySelector("#bankSearch").addEventListener("input", renderQuestionBankList);
      page.querySelector("#bankTheme").addEventListener("change", renderQuestionBankList);
    }
    renderQuestionBankList();
  }

  function renderQuestionBankList() {
    const search = normalize(document.querySelector("#bankSearch")?.value || "");
    const theme = document.querySelector("#bankTheme")?.value || "";
    const list = document.querySelector("#bankList");
    const count = document.querySelector("#bankCount");
    if (!list || !count) return;
    const rows = BANK.filter((question) => {
      const text = normalize(`${question.question} ${(question.options || []).join(" ")}`);
      return (!search || text.includes(search)) && (!theme || (question.theme || "Concepts reseau") === theme);
    });
    count.textContent = `${rows.length} question${rows.length > 1 ? "s" : ""} trouvee${rows.length > 1 ? "s" : ""}.`;
    list.innerHTML = rows.slice(0, 80).map((question) => `
      <article class="bank-question">
        <div><span>${escapeHtml(question.theme || "CCNA")}</span><strong>${escapeHtml(question.question)}</strong></div>
        <button type="button" data-bank-id="${question.id}">Reviser</button>
      </article>`).join("");
    list.querySelectorAll("[data-bank-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const question = BANK.find((item) => item.id === Number(button.dataset.bankId));
        if (question) startSession([question], "targeted", "Question ciblee", 1);
      });
    });
  }

  function renderInstallPanel() {
    const overview = document.querySelector("#homeStudyShell-overview") || document.querySelector("#learningDashboard")?.parentElement;
    if (!overview || document.querySelector("#installPanel")) return;
    const panel = document.createElement("section");
    panel.id = "installPanel";
    panel.className = "pro-panel install-panel";
    panel.innerHTML = `
      <div><span class="pro-kicker">Application iPhone</span><h2>Mode appli et hors ligne</h2><p>Dans Safari : Partager puis Ajouter a l'ecran d'accueil. Les fichiers principaux restent en cache.</p></div>
      <span class="offline-pill">${navigator.onLine ? "Hors ligne pret" : "Mode hors ligne"}</span>`;
    overview.append(panel);
  }

  function weakPriorities() {
    const latest = read(keys.history, [])[0];
    return (latest?.groups || latest?.themes || [])
      .filter((row) => row.total && row.percent < 85)
      .sort((a, b) => a.percent - b.percent || b.wrong - a.wrong)
      .slice(0, 3);
  }

  function renderFinalCoach() {
    const result = document.querySelector("#resultScreen");
    const score = document.querySelector("#scoreBoard");
    if (!result || result.classList.contains("hidden") || !score) return;
    let panel = document.querySelector("#finalCoach");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "finalCoach";
      panel.className = "final-coach";
      score.insertAdjacentElement("afterend", panel);
    }
    const latest = read(keys.history, [])[0];
    const priorities = weakPriorities();
    panel.innerHTML = `
      <span class="pro-kicker">Bilan de fin</span>
      <h2>${latest ? `Score ${latest.correct}/${latest.gradable} - ${latest.percent}%` : "Session terminee"}</h2>
      <div class="final-coach-grid">
        <div class="final-coach-card"><span>Score</span><strong>${latest ? `${latest.percent}%` : "-"}</strong></div>
        <div class="final-coach-card"><span>Erreurs</span><strong>${read(keys.errors, []).length}</strong></div>
        <div class="final-coach-card"><span>Objectif jour</span><strong>${dailyStats().today}/${dailyStats().goal}</strong></div>
      </div>
      <div class="priority-list">
        ${priorities.length ? priorities.map((row, index) => `<div class="priority-item"><strong>${index + 1}. ${escapeHtml(row.theme)}</strong><p>${row.correct}/${row.total} correct - ${row.percent}%. A revoir en priorite.</p></div>`).join("") : "<p>Aucun theme faible detecte sur cette session.</p>"}
      </div>
      <div class="final-coach-actions">
        <button type="button" data-repeat-errors>Recommencer mes erreurs</button>
        <button type="button" data-open-cards>Creer mes fiches</button>
      </div>`;
    panel.querySelector("[data-repeat-errors]")?.addEventListener("click", () => document.querySelector("#redoWrongBtn")?.click());
    panel.querySelector("[data-open-cards]")?.addEventListener("click", () => {
      document.querySelector("#resultStudyShell [data-study-tab='cards']")?.click();
      document.querySelector("#revisionCardsResult")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function run() {
    renderDailyGoal();
    addQuickModeButton();
    ensureBankTab();
    renderInstallPanel();
    renderFinalCoach();
  }

  document.addEventListener("DOMContentLoaded", run);
  run();
  setTimeout(run, 300);
  setTimeout(run, 1000);
})();

