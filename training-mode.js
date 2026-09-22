(function () {
  const BANK = window.CCNA_QUESTIONS || [];
  const VERSION_PREFIX = `ccna-ensa-${BANK.length}-`;
  const FALLBACK_VERSION = `${VERSION_PREFIX}v3`;
  const SESSION_KEY = "ccnaEnsaExamSession";
  const RESUME_KEY = "ccnaEnsaOpenSession";
  const CORRECTION_SIZE_KEY = "ccnaEnsaCorrectionSize";

  const readSession = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      return saved && String(saved.version || "").startsWith(VERSION_PREFIX) ? saved : null;
    } catch {
      return null;
    }
  };

  function shuffle(values) {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function correctionSize(defaultValue = 20) {
    try {
      const value = Number(localStorage.getItem(CORRECTION_SIZE_KEY));
      return Number.isFinite(value) && value > 0 ? Math.min(value, BANK.length) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  function saveCorrectionSize(size) {
    try {
      localStorage.setItem(CORRECTION_SIZE_KEY, String(size));
    } catch {}
  }

  function askCorrectionSize() {
    const current = correctionSize();
    const answer = prompt(`Combien de questions pour cette revision ?`, String(current));
    if (answer === null) return null;
    const value = Number(answer);
    if (!Number.isFinite(value) || value < 1) {
      alert("Choisis un nombre valide.");
      return null;
    }
    return Math.min(Math.round(value), BANK.length);
  }

  function startCorrectionSession(size = correctionSize()) {
    const count = Math.min(Math.max(Number(size) || correctionSize(), 1), BANK.length);
    saveCorrectionSize(count);
    const ids = shuffle(BANK).slice(0, count).map((question) => question.id);
    if (typeof window.createSession === "function" && typeof window.renderExam === "function") {
      window.createSession(ids, "training");
      window.renderExam();
      setTimeout(renderTrainingFeedback, 80);
      return;
    }
    createStandaloneTrainingSession(ids);
    try {
      sessionStorage.setItem(RESUME_KEY, "1");
    } catch {}
    window.location.href = `${window.location.pathname}?v=42&resume=1`;
  }

  function addTrainingButton() {
    if (document.querySelector("#trainingModeBtn")) return;
    const start = document.querySelector("#startBtn");
    if (!start) return;
    const button = document.createElement("button");
    button.id = "trainingModeBtn";
    button.type = "button";
    button.className = "training-action";
    button.textContent = "Revision avec correction";
    button.addEventListener("click", () => {
      const size = askCorrectionSize();
      if (size) startCorrectionSession(size);
    });
    start.insertAdjacentElement("afterend", button);
  }

  function createStandaloneTrainingSession(ids) {
    const picked = ids.map((id) => BANK.find((question) => question.id === id)).filter(Boolean);
    const saved = readSession();
    const version = saved?.version || FALLBACK_VERSION;
    const session = {
      version,
      mode: "training",
      createdAt: Date.now(),
      deadline: Date.now() + 75 * 60 * 1000,
      current: 0,
      submitted: false,
      submittedAt: null,
      historySaved: false,
      items: picked.map((question) => ({
        id: question.id,
        optionOrder: question.type === "study" ? [] : shuffle((question.options || []).map((_, index) => index)),
        answer: [],
        matchingAnswer: {},
        note: "",
      })),
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function currentEntry() {
    const session = readSession();
    if (!session || session.mode !== "training" || session.submitted) return null;
    const item = session.items?.[session.current || 0];
    const question = BANK.find((candidate) => candidate.id === item?.id);
    return question && item ? { session, item, question } : null;
  }

  function expectedChoices(question) {
    return question.expectedChoices || question.correct?.length || 1;
  }

  function isAnswered(question, item) {
    if (question.type === "matching") {
      const prompts = question.matching?.prompts || [];
      return prompts.length > 0 && prompts.every((_, index) => Boolean(item.matchingAnswer?.[index]));
    }
    if (question.type === "study") return Boolean((item.note || "").trim());
    return item.answer?.length >= expectedChoices(question);
  }

  function evaluate(question, item) {
    if (question.type === "matching") {
      const expected = question.matching?.correct || [];
      const selected = expected.map((_, index) => item.matchingAnswer?.[index] || "");
      return {
        correct: expected.length > 0 && selected.every((value, index) => value === expected[index]),
        answerText: expected.map((value, index) => `${question.matching.prompts[index]} -> ${value}`).join(" ; "),
      };
    }
    if (question.type === "study") {
      return { correct: false, answerText: (question.options || []).join(" ; "), manual: true };
    }
    const selectedOriginal = (item.answer || []).map((displayIndex) => item.optionOrder[displayIndex]).sort((a, b) => a - b);
    const expected = [...(question.correct || [])].sort((a, b) => a - b);
    return {
      correct: selectedOriginal.length === expected.length && selectedOriginal.every((value, index) => value === expected[index]),
      answerText: expected.map((index) => question.options[index]).filter(Boolean).join(" ; "),
      selectedOriginal,
      expected,
    };
  }

  function markChoices(question, item, result) {
    document.querySelectorAll(".choice").forEach((button, displayIndex) => {
      const originalIndex = item.optionOrder?.[displayIndex];
      const selected = item.answer?.includes(displayIndex);
      const correct = question.correct?.includes(originalIndex);
      button.classList.toggle("training-correct", Boolean(correct));
      button.classList.toggle("training-wrong", Boolean(selected && !correct));
    });

    if (question.type === "matching") {
      document.querySelectorAll(".matching-row").forEach((row, index) => {
        const selected = item.matchingAnswer?.[index] || "";
        const expected = question.matching?.correct?.[index] || "";
        row.classList.toggle("training-correct", selected === expected);
        row.classList.toggle("training-wrong", Boolean(selected && selected !== expected));
      });
    }
  }

  function renderTrainingFeedback() {
    document.querySelector("#trainingFeedback")?.remove();
    const entry = currentEntry();
    const modeLine = document.querySelector("#sessionMode");
    if (entry && modeLine) {
      modeLine.textContent = "Mode revision avec correction immediate : la bonne reponse apparait apres ta reponse.";
    }
    const submit = document.querySelector("#submitBtn");
    if (entry && submit) submit.textContent = "Terminer";
    if (!entry || !isAnswered(entry.question, entry.item)) return;
    const result = evaluate(entry.question, entry.item);
    markChoices(entry.question, entry.item, result);

    const panel = document.createElement("section");
    panel.id = "trainingFeedback";
    panel.className = `training-feedback ${result.correct ? "good" : "bad"}`;
    panel.innerHTML = `
      <strong>${result.manual ? "Compare avec la correction" : result.correct ? "Bonne reponse" : "A revoir"}</strong>
      <p class="answer-line">Bonne reponse : ${escapeHtml(result.answerText || "Voir la correction finale.")}</p>
      <p>${escapeHtml(entry.question.explanation || "Le document source ne donne pas plus d'explication pour cette question.")}</p>
      <button type="button" class="training-next">Question suivante</button>
    `;
    panel.querySelector(".training-next")?.addEventListener("click", () => {
      document.querySelector("#nextBtn")?.click();
    });
    document.querySelector("#answerArea")?.append(panel);
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]));
  }

  function patchQuestionChanges() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".choice, #nextBtn, #prevBtn, .question-dot")) {
        setTimeout(renderTrainingFeedback, 90);
      }
    });
    document.addEventListener("change", (event) => {
      if (event.target.closest(".matching-row select")) {
        setTimeout(renderTrainingFeedback, 90);
      }
    });
    document.addEventListener("input", (event) => {
      if (event.target.closest(".study-note")) {
        setTimeout(renderTrainingFeedback, 120);
      }
    });
  }

  function run() {
    addTrainingButton();
    renderTrainingFeedback();
  }

  window.startCorrectionSession = startCorrectionSession;
  window.getCorrectionSessionSize = correctionSize;
  window.saveCorrectionSessionSize = saveCorrectionSize;
  document.addEventListener("DOMContentLoaded", run);
  patchQuestionChanges();
  run();
  setTimeout(run, 400);
  setTimeout(run, 1200);
})();

