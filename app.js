const BANK = window.CCNA_QUESTIONS || [];
const SESSION_SIZE = 70;
const DURATION_MS = 75 * 60 * 1000;
const VERSION = `ccna-ensa-${BANK.length}-v1`;
const SESSION_KEY = "ccnaEnsaExamSession";
const DIFFICULT_KEY = "ccnaEnsaDifficultQuestions";
const HISTORY_KEY = "ccnaEnsaScoreHistory";
const LAST_ERRORS_KEY = "ccnaEnsaLastErrors";

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // The quiz works without persistent storage.
    }
  },
  remove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Nothing to clean up.
    }
  },
};

const els = {
  startScreen: document.querySelector("#startScreen"),
  examShell: document.querySelector("#examShell"),
  resultScreen: document.querySelector("#resultScreen"),
  bankSummary: document.querySelector("#bankSummary"),
  startBtn: document.querySelector("#startBtn"),
  studyBtn: document.querySelector("#studyBtn"),
  redoErrorsStartBtn: document.querySelector("#redoErrorsStartBtn"),
  startHistory: document.querySelector("#startHistory"),
  sessionTitle: document.querySelector("#sessionTitle"),
  sessionMode: document.querySelector("#sessionMode"),
  modeLabel: document.querySelector("#modeLabel"),
  timer: document.querySelector("#timer"),
  progressText: document.querySelector("#progressText"),
  progressFill: document.querySelector("#progressFill"),
  questionGrid: document.querySelector("#questionGrid"),
  questionMeta: document.querySelector("#questionMeta"),
  questionText: document.querySelector("#questionText"),
  imageWrap: document.querySelector("#imageWrap"),
  answerArea: document.querySelector("#answerArea"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  difficultBtn: document.querySelector("#difficultBtn"),
  redoWrongBtn: document.querySelector("#redoWrongBtn"),
  newFromResultsBtn: document.querySelector("#newFromResultsBtn"),
  scoreBoard: document.querySelector("#scoreBoard"),
  themeStats: document.querySelector("#themeStats"),
  historyPanel: document.querySelector("#historyPanel"),
  resultsList: document.querySelector("#resultsList"),
  tabButtons: [...document.querySelectorAll(".tab-button")],
  imageModal: document.querySelector("#imageModal"),
  imageModalClose: document.querySelector("#imageModalClose"),
  imageModalImg: document.querySelector("#imageModalImg"),
};

let state = null;
let difficult = new Set(loadJson(DIFFICULT_KEY, []));
let timerId = null;
let resultFilter = "wrong";
const questionById = new Map(BANK.map((q) => [q.id, q]));

function loadJson(key, fallback) {
  try {
    return JSON.parse(storage.get(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function saveDifficult() {
  storage.set(DIFFICULT_KEY, JSON.stringify([...difficult]));
}

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
    optionOrder: question.type === "study" ? [] : shuffle(question.options.map((_, index) => index)),
    answer: [],
    note: "",
  };
}

function createSession(ids = null, mode = "normal") {
  const pool = ids ? ids.map((id) => questionById.get(id)).filter(Boolean) : BANK;
  const picked = shuffle(pool).slice(0, Math.min(SESSION_SIZE, pool.length));
  state = {
    version: VERSION,
    mode,
    createdAt: Date.now(),
    deadline: Date.now() + DURATION_MS,
    current: 0,
    submitted: false,
    historySaved: false,
    items: picked.map(createQuestionItem),
  };
  saveSession();
}

function saveSession() {
  if (state) storage.set(SESSION_KEY, JSON.stringify(state));
}

function loadSession() {
  const saved = loadJson(SESSION_KEY, null);
  return saved && saved.version === VERSION ? saved : null;
}

function showOnly(screen) {
  [els.startScreen, els.examShell, els.resultScreen].forEach((node) => node.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function init() {
  bindEvents();
  if (!BANK.length) {
    els.bankSummary.textContent = "La banque de questions n'a pas ete chargee.";
    els.startBtn.disabled = true;
    return;
  }
  renderStartExtras();
  state = loadSession();
  if (state) {
    state.submitted ? renderResults() : renderExam();
    return;
  }
  showOnly(els.startScreen);
}

function bindEvents() {
  els.startBtn.addEventListener("click", () => {
    createSession();
    renderExam();
  });
  els.studyBtn.addEventListener("click", () => {
    createSession(BANK.map((q) => q.id), "study");
    renderExam();
  });
  els.redoErrorsStartBtn.addEventListener("click", () => startErrorsSession(loadLastErrors()));
  els.prevBtn.addEventListener("click", () => goTo(state.current - 1));
  els.nextBtn.addEventListener("click", () => goTo(state.current + 1));
  els.submitBtn.addEventListener("click", () => submitExam(false));
  els.resetBtn.addEventListener("click", resetSession);
  els.newFromResultsBtn.addEventListener("click", resetSession);
  els.redoWrongBtn.addEventListener("click", () => startErrorsSession(currentWrongIds()));
  els.difficultBtn.addEventListener("click", toggleDifficult);
  els.imageModalClose.addEventListener("click", () => els.imageModal.classList.add("hidden"));
  els.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      resultFilter = button.dataset.filter;
      els.tabButtons.forEach((tab) => tab.classList.toggle("active", tab === button));
      renderResultsList();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (!state || state.submitted || els.examShell.classList.contains("hidden")) return;
    if (["TEXTAREA", "INPUT"].includes(document.activeElement?.tagName)) return;
    if (event.key === "ArrowLeft") goTo(state.current - 1);
    if (event.key === "ArrowRight") goTo(state.current + 1);
    if (event.key.toLowerCase() === "d") toggleDifficult();
  });
}

function loadHistory() {
  return loadJson(HISTORY_KEY, []);
}

function loadLastErrors() {
  return loadJson(LAST_ERRORS_KEY, []).filter((id) => questionById.has(id));
}

function renderStartExtras() {
  const lastErrors = loadLastErrors();
  els.redoErrorsStartBtn.disabled = lastErrors.length === 0;
  els.redoErrorsStartBtn.textContent = lastErrors.length ? `Refaire mes erreurs (${lastErrors.length})` : "Refaire mes erreurs";
  renderHistory(els.startHistory, 3);
  renderDashboard();
}

function renderDashboard() {
  const target = document.querySelector("#learningDashboard");
  if (!target) return;
  const themes = [...new Set(BANK.map((q) => q.theme))];
  target.innerHTML = `
    <div class="score-card"><span>Banque</span><strong>${BANK.length}</strong></div>
    <div class="score-card"><span>Questions auto</span><strong>${BANK.filter((q) => q.type !== "study").length}</strong></div>
    <div class="score-card"><span>Themes</span><strong>${themes.length}</strong></div>
    <div class="score-card"><span>Difficiles</span><strong>${difficult.size}</strong></div>
  `;
}

function startErrorsSession(ids) {
  if (!ids.length) {
    alert("Aucune erreur enregistree pour le moment.");
    return;
  }
  createSession(ids, "errors");
  renderExam();
}

function renderExam() {
  clearInterval(timerId);
  timerId = setInterval(updateTimer, 1000);
  updateTimer();
  showOnly(els.examShell);
  els.modeLabel.textContent = state.mode === "study" ? "Mode revision" : state.mode === "errors" ? "Mes erreurs" : "Mode examen";
  els.sessionMode.textContent = state.mode === "study"
    ? "Parcours libre avec les corrections visibles apres validation finale."
    : "Session aleatoire de revision avec suivi local de tes erreurs.";
  renderQuestionGrid();
  renderCurrentQuestion();
}

function renderQuestionGrid() {
  els.questionGrid.innerHTML = "";
  state.items.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "question-dot";
    button.textContent = index + 1;
    button.classList.toggle("current", index === state.current);
    button.classList.toggle("answered", item.answer.length > 0 || item.note.trim());
    button.classList.toggle("flagged", difficult.has(item.id));
    button.addEventListener("click", () => goTo(index));
    els.questionGrid.append(button);
  });
}

function renderCurrentQuestion() {
  const item = state.items[state.current];
  const question = questionById.get(item.id);
  els.sessionTitle.textContent = `Question ${state.current + 1} sur ${state.items.length}`;
  els.progressText.textContent = `${answeredCount()}/${state.items.length}`;
  els.progressFill.style.width = `${(answeredCount() / state.items.length) * 100}%`;
  els.questionMeta.innerHTML = `
    <span class="pill">Source ${question.sourceNumber}</span>
    <span class="pill">${question.theme}</span>
    <span class="pill">${question.type === "multi" ? `${question.expectedChoices} reponses` : question.type === "study" ? "Revision" : "1 reponse"}</span>
  `;
  els.questionText.textContent = question.question;
  els.imageWrap.innerHTML = "";
  question.images.forEach((src) => {
    const image = document.createElement("img");
    image.className = "question-image";
    image.src = src;
    image.alt = "Illustration de la question";
    image.addEventListener("click", () => {
      els.imageModalImg.src = src;
      els.imageModal.classList.remove("hidden");
    });
    els.imageWrap.append(image);
  });
  els.answerArea.innerHTML = "";
  if (question.type === "study") {
    renderStudyAnswer(item, question);
  } else {
    renderChoiceAnswer(item, question);
  }
  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.disabled = state.current === state.items.length - 1;
  els.difficultBtn.classList.toggle("active", difficult.has(item.id));
  renderQuestionGrid();
  saveSession();
}

function renderChoiceAnswer(item, question) {
  item.optionOrder.forEach((optionIndex) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.classList.toggle("selected", item.answer.includes(optionIndex));
    button.innerHTML = `<span class="choice-mark">${item.answer.includes(optionIndex) ? "✓" : ""}</span><span>${escapeHtml(question.options[optionIndex])}</span>`;
    button.addEventListener("click", () => toggleAnswer(item, question, optionIndex));
    els.answerArea.append(button);
  });
}

function renderStudyAnswer(item, question) {
  const details = document.createElement("div");
  details.className = "study-card";
  details.innerHTML = `
    <strong>Carte de revision</strong>
    <p>${escapeHtml(question.options.join("\n")).replace(/\n/g, "<br>")}</p>
    ${question.explanation ? `<div class="explanation">${escapeHtml(question.explanation).replace(/\n/g, "<br>")}</div>` : ""}
  `;
  const note = document.createElement("textarea");
  note.className = "study-note";
  note.placeholder = "Note personnelle pour cette question...";
  note.value = item.note;
  note.addEventListener("input", () => {
    item.note = note.value;
    saveSession();
    renderQuestionGrid();
  });
  els.answerArea.append(details, note);
}

function toggleAnswer(item, question, optionIndex) {
  if (question.type === "single") {
    item.answer = item.answer.includes(optionIndex) ? [] : [optionIndex];
  } else if (item.answer.includes(optionIndex)) {
    item.answer = item.answer.filter((index) => index !== optionIndex);
  } else if (item.answer.length < question.expectedChoices) {
    item.answer = [...item.answer, optionIndex];
  }
  renderCurrentQuestion();
}

function goTo(index) {
  if (index < 0 || index >= state.items.length) return;
  state.current = index;
  renderCurrentQuestion();
}

function answeredCount() {
  return state.items.filter((item) => item.answer.length > 0 || item.note.trim()).length;
}

function updateTimer() {
  if (!state || state.submitted) return;
  const remaining = Math.max(0, state.deadline - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  els.timer.textContent = [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
  if (remaining === 0) submitExam(true);
}

function toggleDifficult() {
  const id = state.items[state.current].id;
  difficult.has(id) ? difficult.delete(id) : difficult.add(id);
  saveDifficult();
  renderCurrentQuestion();
}

function submitExam(auto = false) {
  if (!auto && !confirm("Soumettre la session maintenant ?")) return;
  state.submitted = true;
  state.submittedAt = Date.now();
  saveSession();
  renderResults();
}

function isCorrect(item) {
  const question = questionById.get(item.id);
  if (question.type === "study") return true;
  return sameSet(item.answer, question.correct);
}

function sameSet(a, b) {
  return a.length === b.length && a.every((value) => b.includes(value));
}

function scoreItems() {
  return state.items.filter((item) => questionById.get(item.id).type !== "study");
}

function renderResults() {
  clearInterval(timerId);
  showOnly(els.resultScreen);
  const scored = scoreItems();
  const correct = scored.filter(isCorrect).length;
  const percent = scored.length ? Math.round((correct / scored.length) * 100) : 100;
  els.scoreBoard.innerHTML = `
    <div class="score-card"><span>Score</span><strong>${percent}%</strong></div>
    <div class="score-card"><span>Correctes</span><strong>${correct}/${scored.length}</strong></div>
    <div class="score-card"><span>Revues</span><strong>${state.items.length}</strong></div>
    <div class="score-card"><span>Difficiles</span><strong>${state.items.filter((item) => difficult.has(item.id)).length}</strong></div>
  `;
  saveResultHistory(percent, correct, scored.length);
  storage.set(LAST_ERRORS_KEY, JSON.stringify(currentWrongIds()));
  renderThemeStats();
  renderHistory(els.historyPanel, 5);
  renderResultsList();
}

function saveResultHistory(percent, correct, total) {
  if (state.historySaved) return;
  const history = loadHistory();
  history.unshift({ date: new Date().toISOString(), percent, correct, total, mode: state.mode });
  storage.set(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
  state.historySaved = true;
  saveSession();
}

function currentWrongIds() {
  return state.items.filter((item) => !isCorrect(item) && questionById.get(item.id).type !== "study").map((item) => item.id);
}

function renderThemeStats() {
  const byTheme = new Map();
  scoreItems().forEach((item) => {
    const question = questionById.get(item.id);
    const row = byTheme.get(question.theme) || { total: 0, correct: 0 };
    row.total += 1;
    if (isCorrect(item)) row.correct += 1;
    byTheme.set(question.theme, row);
  });
  els.themeStats.innerHTML = [...byTheme.entries()]
    .sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total)
    .map(([theme, row]) => {
      const percent = Math.round((row.correct / row.total) * 100);
      return `<div class="theme-row"><strong>${theme}</strong><div class="theme-bar"><span style="width:${percent}%"></span></div><span>${percent}%</span></div>`;
    })
    .join("");
}

function renderHistory(target, limit) {
  const history = loadHistory().slice(0, limit);
  target.innerHTML = history
    .map((entry) => {
      const date = new Date(entry.date).toLocaleDateString("fr-FR");
      return `<div class="history-row"><strong>${date}</strong><span>${entry.correct}/${entry.total}</span><span>${entry.percent}%</span></div>`;
    })
    .join("");
}

function renderResultsList() {
  let items = [...state.items];
  if (resultFilter === "wrong") items = items.filter((item) => !isCorrect(item) && questionById.get(item.id).type !== "study");
  if (resultFilter === "difficult") items = items.filter((item) => difficult.has(item.id));
  els.resultsList.innerHTML = items.map(renderResultCard).join("");
}

function renderResultCard(item) {
  const question = questionById.get(item.id);
  const correct = isCorrect(item);
  const selected = item.answer.map((index) => question.options[index]).filter(Boolean);
  const answers = question.correct.map((index) => question.options[index]).filter(Boolean);
  return `
    <article class="result-card ${correct ? "correct" : "wrong"}">
      <div class="result-topline">
        <span class="pill">Source ${question.sourceNumber}</span>
        <span class="pill">${question.theme}</span>
        <span class="status-badge ${correct ? "good" : "bad"}">${correct ? "Correct" : "A revoir"}</span>
      </div>
      <h3>${escapeHtml(question.question)}</h3>
      ${question.images.map((src) => `<img class="question-image" src="${src}" alt="Illustration">`).join("")}
      <div class="answer-review">
        <div class="review-line ${correct ? "good" : "bad"}"><strong>Ta reponse :</strong> ${escapeHtml(selected.join(" | ") || item.note || "Aucune")}</div>
        ${answers.length ? `<div class="review-line good"><strong>Bonne reponse :</strong> ${escapeHtml(answers.join(" | "))}</div>` : ""}
      </div>
      ${question.explanation ? `<div class="explanation">${escapeHtml(question.explanation).replace(/\n/g, "<br>")}</div>` : ""}
    </article>
  `;
}

function resetSession() {
  storage.remove(SESSION_KEY);
  state = null;
  renderStartExtras();
  showOnly(els.startScreen);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
