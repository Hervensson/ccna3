const BANK = window.CCNA_QUESTIONS || [];
const SESSION_SIZE = 70;
const DURATION_MS = 75 * 60 * 1000;
const VERSION = `ccna-ensa-${BANK.length}-v3`;
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
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // The quiz still works without persistent storage.
    }
  },
};

const els = {
  startScreen: document.querySelector("#startScreen"),
  examShell: document.querySelector("#examShell"),
  resultScreen: document.querySelector("#resultScreen"),
  bankSummary: document.querySelector("#bankSummary"),
  startBtn: document.querySelector("#startBtn"),
  redoErrorsStartBtn: document.querySelector("#redoErrorsStartBtn"),
  startHistory: document.querySelector("#startHistory"),
  sessionTitle: document.querySelector("#sessionTitle"),
  sessionMode: document.querySelector("#sessionMode"),
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
};

let state = null;
let difficult = loadDifficult();
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

function loadDifficult() {
  return new Set(loadJson(DIFFICULT_KEY, []));
}

function saveDifficult() {
  storage.set(DIFFICULT_KEY, JSON.stringify([...difficult]));
}

function loadHistory() {
  return loadJson(HISTORY_KEY, []);
}

function loadLastErrors() {
  return loadJson(LAST_ERRORS_KEY, []).filter((id) => questionById.has(id));
}

function saveSession() {
  if (!state) return;
  storage.set(SESSION_KEY, JSON.stringify(state));
}

function loadSession() {
  const saved = loadJson(SESSION_KEY, null);
  return saved && saved.version === VERSION ? saved : null;
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
    matchingAnswer: {},
    note: "",
  };
}

function createSession(ids = null, mode = "normal") {
  const pool = ids
    ? ids.map((id) => questionById.get(id)).filter(Boolean)
    : BANK;
  const picked = shuffle(pool).slice(0, Math.min(SESSION_SIZE, pool.length));
  state = {
    version: VERSION,
    mode,
    createdAt: Date.now(),
    deadline: Date.now() + DURATION_MS,
    current: 0,
    submitted: false,
    submittedAt: null,
    historySaved: false,
    items: picked.map(createQuestionItem),
  };
  resultFilter = "wrong";
  saveSession();
}

function showOnly(screen) {
  [els.startScreen, els.examShell, els.resultScreen].forEach((node) => node.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function init() {
  bindEvents();
  if (!BANK.length) {
    els.bankSummary.textContent = "La banque de questions n'a pas été chargée. Vérifie que questions.js est dans le même dossier que index.html.";
    els.startBtn.disabled = true;
    els.redoErrorsStartBtn.disabled = true;
    showOnly(els.startScreen);
    return;
  }

  els.bankSummary.textContent = `${BANK.length} questions extraites du document, ${Math.min(SESSION_SIZE, BANK.length)} questions aléatoires par session.`;
  renderStartExtras();
  state = loadSession();
  if (state) {
    if (!state.submitted && Date.now() >= state.deadline) submitExam(true);
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
  els.redoErrorsStartBtn.addEventListener("click", () => startErrorsSession(loadLastErrors()));
  els.prevBtn.addEventListener("click", () => goTo(state.current - 1));
  els.nextBtn.addEventListener("click", () => goTo(state.current + 1));
  els.submitBtn.addEventListener("click", () => submitExam(false));
  els.resetBtn.addEventListener("click", resetSession);
  els.newFromResultsBtn.addEventListener("click", resetSession);
  els.redoWrongBtn.addEventListener("click", () => startErrorsSession(currentWrongIds()));
  els.difficultBtn.addEventListener("click", toggleDifficult);
  els.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      resultFilter = button.dataset.filter;
      els.tabButtons.forEach((tab) => tab.classList.toggle("active", tab === button));
      renderResultsList();
    });
  });
  document.addEventListener("keydown", handleKeyboard);
}

function handleKeyboard(event) {
  if (!state || state.submitted || els.examShell.classList.contains("hidden")) return;
  if (["TEXTAREA", "INPUT"].includes(document.activeElement?.tagName)) return;
  if (event.key === "ArrowLeft") goTo(state.current - 1);
  if (event.key === "ArrowRight") goTo(state.current + 1);
  if (event.key.toLowerCase() === "d") toggleDifficult();
}

function renderStartExtras() {
  const lastErrors = loadLastErrors();
  els.redoErrorsStartBtn.disabled = lastErrors.length === 0;
  els.redoErrorsStartBtn.textContent = lastErrors.length
    ? `Refaire mes erreurs (${lastErrors.length})`
    : "Refaire mes erreurs";
  renderHistory(els.startHistory, 3);
}

function startErrorsSession(ids) {
  if (!ids.length) {
    alert("Aucune erreur enregistrée pour le moment.");
    return;
  }
  createSession(ids, "errors");
  renderExam();
}

function renderExam() {
  showOnly(els.examShell);
  startTimer();
  renderQuestion();
}

function startTimer() {
  clearInterval(timerId);
  updateTimer();
  timerId = setInterval(() => {
    updateTimer();
    if (!state.submitted && Date.now() >= state.deadline) submitExam(true);
  }, 1000);
}

function updateTimer() {
  const remaining = Math.max(0, state.deadline - Date.now());
  els.timer.textContent = formatTime(remaining);
  els.timer.parentElement.classList.toggle("danger", remaining < 5 * 60 * 1000);
}

function formatTime(ms) {
  const total = Math.ceil(ms / 1000);
  const hours = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function currentItem() {
  return state.items[state.current];
}

function currentQuestion() {
  return questionById.get(currentItem().id);
}

function expectedChoices(question) {
  return question.expectedChoices || question.correct?.length || 1;
}

function renderQuestion() {
  const item = currentItem();
  const question = currentQuestion();
  const answered = answeredCount();
  const expected = expectedChoices(question);

  els.sessionTitle.textContent = `Question ${state.current + 1} sur ${state.items.length}`;
  els.sessionMode.textContent = state.mode === "errors"
    ? "Session ciblée sur tes erreurs précédentes."
    : "Session aléatoire type examen Cisco / NetAcad.";
  els.progressText.textContent = `${answered}/${state.items.length}`;
  els.progressFill.style.width = `${(answered / state.items.length) * 100}%`;
  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.disabled = state.current === state.items.length - 1;
  els.questionText.textContent = question.question;

  els.questionMeta.innerHTML = "";
  els.questionMeta.append(
    pill(`Banque #${question.sourceNumber}`),
    pill(question.theme || "Concepts réseau"),
    pill(question.type === "multi" ? `Choisis ${expected} réponses` : question.type === "matching" ? "Association interactive" : question.type === "study" ? "Réponse manuelle" : "Choix unique")
  );
  if (difficult.has(question.id)) els.questionMeta.append(pill("Difficile", "warn"));

  els.difficultBtn.classList.toggle("active", difficult.has(question.id));
  els.difficultBtn.setAttribute("aria-pressed", String(difficult.has(question.id)));

  renderImages(question.images);
  renderAnswers(question, item);
  renderQuestionGrid();
  saveSession();
}

function pill(text, tone = "") {
  const span = document.createElement("span");
  span.className = `pill ${tone}`.trim();
  span.textContent = text;
  return span;
}

function renderImages(images) {
  els.imageWrap.innerHTML = "";
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.className = "question-image";
    img.src = src;
    img.alt = `Illustration ${index + 1}`;
    els.imageWrap.append(img);
  });
}

function renderAnswers(question, item) {
  els.answerArea.innerHTML = "";
  if (question.type === "matching") {
    renderMatching(question, item);
    return;
  }

  if (question.type === "study") {
    const textarea = document.createElement("textarea");
    textarea.className = "study-note";
    textarea.placeholder = "Note ta réponse ici. La correction apparaîtra uniquement à la fin.";
    textarea.value = item.note || "";
    textarea.addEventListener("input", () => {
      item.note = textarea.value;
      saveSession();
      renderQuestionGrid();
      updateProgressOnly();
    });
    els.answerArea.append(textarea);
    return;
  }

  item.optionOrder.forEach((originalIndex, displayIndex) => {
    const button = document.createElement("button");
    button.className = `choice ${item.answer.includes(displayIndex) ? "selected" : ""}`;
    button.type = "button";
    button.addEventListener("click", () => chooseAnswer(question, item, displayIndex));

    const mark = document.createElement("span");
    mark.className = "choice-mark";
    mark.textContent = question.type === "multi"
      ? item.answer.includes(displayIndex) ? "✓" : ""
      : String.fromCharCode(65 + displayIndex);

    const text = document.createElement("span");
    text.textContent = question.options[originalIndex];

    button.append(mark, text);
    els.answerArea.append(button);
  });
}

function renderMatching(question, item) {
  item.matchingAnswer ||= {};
  const answers = question.matching?.answers || [];
  const prompts = question.matching?.prompts || [];
  prompts.forEach((prompt, index) => {
    const row = document.createElement("label");
    row.className = "matching-row";

    const text = document.createElement("span");
    text.textContent = prompt;

    const select = document.createElement("select");
    select.value = item.matchingAnswer[index] || "";
    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "Choisir...";
    select.append(empty);
    answers.forEach((answer) => {
      const option = document.createElement("option");
      option.value = answer;
      option.textContent = answer;
      select.append(option);
    });
    select.addEventListener("change", () => {
      item.matchingAnswer[index] = select.value;
      saveSession();
      renderQuestionGrid();
      updateProgressOnly();
    });

    row.append(text, select);
    els.answerArea.append(row);
  });
}

function chooseAnswer(question, item, displayIndex) {
  if (question.type === "single") {
    item.answer = [displayIndex];
  } else {
    const alreadySelected = item.answer.includes(displayIndex);
    if (alreadySelected) {
      item.answer = item.answer.filter((value) => value !== displayIndex);
    } else {
      const max = expectedChoices(question);
      item.answer = [...item.answer, displayIndex].slice(-max).sort((a, b) => a - b);
    }
  }
  saveSession();
  renderQuestion();
}

function renderQuestionGrid() {
  els.questionGrid.innerHTML = "";
  state.items.forEach((item, index) => {
    const question = questionById.get(item.id);
    const button = document.createElement("button");
    button.className = "question-dot";
    button.textContent = index + 1;
    button.type = "button";
    button.classList.toggle("current", index === state.current);
    button.classList.toggle("answered", isAnswered(item, question));
    button.classList.toggle("flagged", difficult.has(item.id));
    button.addEventListener("click", () => goTo(index));
    els.questionGrid.append(button);
  });
}

function updateProgressOnly() {
  const answered = answeredCount();
  els.progressText.textContent = `${answered}/${state.items.length}`;
  els.progressFill.style.width = `${(answered / state.items.length) * 100}%`;
}

function goTo(index) {
  if (index < 0 || index >= state.items.length) return;
  state.current = index;
  renderQuestion();
}

function toggleDifficult() {
  const id = currentQuestion().id;
  difficult.has(id) ? difficult.delete(id) : difficult.add(id);
  saveDifficult();
  renderQuestion();
}

function isAnswered(item, question) {
  if (question.type === "matching") {
    item.matchingAnswer ||= {};
    const prompts = question.matching?.prompts || [];
    return prompts.length > 0 && prompts.every((_, index) => Boolean(item.matchingAnswer?.[index]));
  }
  return question.type === "study" ? Boolean((item.note || "").trim()) : item.answer.length > 0;
}

function answeredCount() {
  return state.items.filter((item) => isAnswered(item, questionById.get(item.id))).length;
}

function submitExam(fromTimer) {
  if (!state || state.submitted) return;
  if (!fromTimer && !confirm("Soumettre la session et afficher la correction ?")) return;
  state.submitted = true;
  state.submittedAt = Date.now();
  saveSession();
  renderResults();
}

function resetSession() {
  if (state && !state.submitted && !confirm("Commencer une nouvelle session ? La progression actuelle sera remplacée.")) return;
  storage.remove(SESSION_KEY);
  createSession();
  renderExam();
}

function evaluateItem(item) {
  const question = questionById.get(item.id);
  if (question.type === "matching") {
    const expected = question.matching?.correct || [];
    const selected = expected.map((_, index) => item.matchingAnswer?.[index] || "");
    const correct = expected.length > 0 && selected.every((value, index) => value === expected[index]);
    return { question, item, gradable: true, correct, selectedOriginal: [], matchingSelected: selected };
  }
  if (question.type === "study") {
    return { question, item, gradable: false, correct: false, selectedOriginal: [] };
  }
  const selectedOriginal = item.answer.map((displayIndex) => item.optionOrder[displayIndex]).sort((a, b) => a - b);
  const expected = [...question.correct].sort((a, b) => a - b);
  const correct = selectedOriginal.length === expected.length && selectedOriginal.every((value, index) => value === expected[index]);
  return { question, item, gradable: true, correct, selectedOriginal };
}

function evaluatedSession() {
  return state.items.map(evaluateItem);
}

function sessionSummary(evaluated) {
  const gradable = evaluated.filter((entry) => entry.gradable);
  const correct = gradable.filter((entry) => entry.correct).length;
  const wrong = gradable.length - correct;
  return {
    gradable: gradable.length,
    correct,
    wrong,
    studied: evaluated.length - gradable.length,
    percent: gradable.length ? Math.round((correct / gradable.length) * 100) : 0,
  };
}

function currentWrongIds() {
  if (!state?.submitted) return loadLastErrors();
  return evaluatedSession()
    .filter((entry) => entry.gradable && !entry.correct)
    .map((entry) => entry.question.id);
}

function saveHistoryIfNeeded(evaluated, summary) {
  if (state.historySaved) return;
  const wrongIds = evaluated.filter((entry) => entry.gradable && !entry.correct).map((entry) => entry.question.id);
  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: new Date().toISOString(),
    mode: state.mode || "normal",
    total: state.items.length,
    correct: summary.correct,
    gradable: summary.gradable,
    percent: summary.percent,
    wrongIds,
    themes: themeStats(evaluated),
  };
  const history = [entry, ...loadHistory()].slice(0, 12);
  storage.set(HISTORY_KEY, JSON.stringify(history));
  storage.set(LAST_ERRORS_KEY, JSON.stringify(wrongIds));
  state.historySaved = true;
  saveSession();
}

function renderResults() {
  clearInterval(timerId);
  showOnly(els.resultScreen);
  const evaluated = evaluatedSession();
  const summary = sessionSummary(evaluated);
  saveHistoryIfNeeded(evaluated, summary);

  els.scoreBoard.innerHTML = "";
  [
    ["Score", `${summary.correct}/${summary.gradable}`],
    ["Pourcentage", `${summary.percent}%`],
    ["Mes erreurs", String(summary.wrong)],
    ["Difficiles", String([...difficult].length)],
  ].forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "score-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    els.scoreBoard.append(card);
  });

  els.redoWrongBtn.disabled = summary.wrong === 0;
  renderThemeStats(evaluated);
  renderHistory(els.historyPanel, 5);
  renderResultsList();
}

function themeStats(evaluated) {
  const stats = new Map();
  evaluated.filter((entry) => entry.gradable).forEach((entry) => {
    const theme = entry.question.theme || "Concepts réseau";
    if (!stats.has(theme)) stats.set(theme, { theme, total: 0, correct: 0, wrong: 0, percent: 0 });
    const row = stats.get(theme);
    row.total += 1;
    row.correct += entry.correct ? 1 : 0;
    row.wrong += entry.correct ? 0 : 1;
    row.percent = Math.round((row.correct / row.total) * 100);
  });
  return [...stats.values()].sort((a, b) => a.percent - b.percent || b.total - a.total);
}

function weakThemes(evaluated) {
  const stats = themeStats(evaluated);
  const weak = stats.filter((row) => row.wrong > 0 && row.percent < 75).map((row) => row.theme);
  return weak.length ? new Set(weak) : new Set(stats.filter((row) => row.wrong > 0).slice(0, 3).map((row) => row.theme));
}

function renderThemeStats(evaluated) {
  els.themeStats.innerHTML = "";
  themeStats(evaluated).forEach((row) => {
    const div = document.createElement("div");
    div.className = "theme-row";
    div.innerHTML = `
      <strong>${escapeHtml(row.theme)}</strong>
      <div class="theme-bar"><span style="width:${row.percent}%"></span></div>
      <span>${row.correct}/${row.total} - ${row.percent}%</span>
    `;
    els.themeStats.append(div);
  });
}

function renderHistory(container, limit) {
  const history = loadHistory().slice(0, limit);
  container.innerHTML = "";
  history.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "history-row";
    const label = entry.mode === "errors" ? "Erreurs" : "Session";
    row.innerHTML = `
      <strong>${label} du ${formatDate(entry.date)}</strong>
      <div class="theme-bar"><span style="width:${entry.percent}%"></span></div>
      <span>${entry.correct}/${entry.gradable} - ${entry.percent}%</span>
    `;
    container.append(row);
  });
}

function renderResultsList() {
  const evaluated = evaluatedSession();
  const weak = weakThemes(evaluated);
  const filtered = evaluated.filter((entry) => {
    if (resultFilter === "wrong") return entry.gradable && !entry.correct;
    if (resultFilter === "difficult") return difficult.has(entry.question.id);
    if (resultFilter === "themeWeak") return entry.gradable && !entry.correct && weak.has(entry.question.theme || "Concepts réseau");
    return true;
  });

  els.resultsList.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "result-card";
    empty.textContent = "Aucune question dans ce filtre.";
    els.resultsList.append(empty);
    return;
  }

  filtered.forEach((entry, index) => {
    els.resultsList.append(renderResultCard(entry, index));
  });
}

function renderResultCard(entry, index) {
  const { question, item, gradable, correct, selectedOriginal } = entry;
  const card = document.createElement("article");
  card.className = `result-card ${!gradable ? "" : correct ? "correct" : "wrong"}`;

  const top = document.createElement("div");
  top.className = "result-topline";
  top.append(
    pill(question.theme || "Concepts réseau"),
    statusBadge(!gradable ? "À corriger" : correct ? "Correct" : "Erreur", !gradable ? "neutral" : correct ? "good" : "bad")
  );
  card.append(top);

  const title = document.createElement("h3");
  title.textContent = `${index + 1}. ${question.question}`;
  card.append(title);

  if (question.images.length) {
    const wrap = document.createElement("div");
    wrap.className = "image-wrap";
    question.images.forEach((src, imgIndex) => {
      const img = document.createElement("img");
      img.className = "question-image";
      img.src = src;
      img.alt = `Illustration ${imgIndex + 1}`;
      wrap.append(img);
    });
    card.append(wrap);
  }

  const review = document.createElement("div");
  review.className = "answer-review";

  if (question.type === "study") {
    review.append(reviewLine(`Ta note : ${(item.note || "Aucune note").trim()}`, "bad"));
    question.options.forEach((option) => review.append(reviewLine(option, "good correct-answer")));
  } else if (question.type === "matching") {
    const prompts = question.matching?.prompts || [];
    const correctAnswers = question.matching?.correct || [];
    prompts.forEach((prompt, promptIndex) => {
      const selected = item.matchingAnswer?.[promptIndex] || "Aucune réponse";
      const expected = correctAnswers[promptIndex] || "";
      const ok = selected === expected;
      review.append(reviewLine(`${prompt} → Ta réponse : ${selected}`, ok ? "good selected" : "bad selected"));
      if (!ok) review.append(reviewLine(`Bonne réponse : ${expected}`, "good correct-answer"));
    });
  } else {
    question.options.forEach((option, optionIndex) => {
      const selected = selectedOriginal.includes(optionIndex);
      const isCorrect = question.correct.includes(optionIndex);
      let label = option;
      if (selected && isCorrect) label = `Ta réponse correcte : ${option}`;
      else if (selected) label = `Ta réponse : ${option}`;
      else if (isCorrect) label = `Bonne réponse : ${option}`;
      review.append(reviewLine(label, [
        selected ? "selected" : "",
        isCorrect ? "good correct-answer" : "",
        selected && !isCorrect ? "bad" : "",
      ].join(" ").trim()));
    });
    if (!selectedOriginal.length) review.prepend(reviewLine("Ta réponse : aucune réponse sélectionnée", "bad selected"));
  }

  card.append(review);

  const explanation = document.createElement("div");
  explanation.className = "explanation";
  explanation.textContent = question.explanation || "Le document source ne fournit pas d'explication détaillée pour cette question. La correction ci-dessus reprend la réponse marquée dans le corrigé.";
  card.append(explanation);
  return card;
}

function statusBadge(text, tone) {
  const span = document.createElement("span");
  span.className = `status-badge ${tone}`;
  span.textContent = text;
  return span;
}

function reviewLine(text, tone) {
  const line = document.createElement("div");
  line.className = `review-line ${tone}`;
  line.textContent = text;
  return line;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
init();
