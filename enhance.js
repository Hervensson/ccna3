(function () {

  const BANK = window.CCNA_QUESTIONS || [];
  const byId = new Map(BANK.map((question) => [question.id, question]));
  const keys = {
    difficult: "ccnaEnsaDifficultQuestions",
    history: "ccnaEnsaScoreHistory",
    errors: "ccnaEnsaLastErrors",
    goal: "ccnaEnsaScoreGoal",
  };
  const trackedThemes = [
    { label: "VLAN", tests: ["vlan", "trunk", "inter-vlan"] },
    { label: "STP", tests: ["stp", "spanning"] },
    { label: "EtherChannel", tests: ["etherchannel", "lacp", "pagp"] },
    { label: "WLAN", tests: ["wlan", "sans fil", "wireless"] },
    { label: "Routage IPv6", tests: ["ipv6", "routage"] },
    { label: "Securite LAN", tests: ["securite", "securite", "port security", "dhcp snooping"] },
  ];

  const read = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  };

  const difficultIds = () => read(keys.difficult, []).filter((id) => byId.has(id));
  const lastErrors = () => read(keys.errors, []).filter((id) => byId.has(id));
  const history = () => read(keys.history, []);
  const write = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage failures.
    }
  };

  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
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

  function scoreGoal() {
    const value = Number(read(keys.goal, 85));
    return Number.isFinite(value) ? Math.min(100, Math.max(1, value)) : 85;
  }

  function themeGroupFor(question, fallbackTheme = "") {
    const haystack = normalize(`${fallbackTheme} ${question?.theme || ""} ${question?.question || ""}`);
    return trackedThemes.find((theme) => theme.tests.some((test) => haystack.includes(normalize(test))))?.label || "Autres";
  }

  function emptyTrackedStats() {
    return trackedThemes.map((theme) => ({ theme: theme.label, total: 0, correct: 0, wrong: 0, percent: 0 }));
  }

  function aggregateThemes() {
    const totals = new Map();
    history().forEach((session) => {
      (session.themes || []).forEach((row) => {
        if (!totals.has(row.theme)) totals.set(row.theme, { theme: row.theme, total: 0, correct: 0, wrong: 0, percent: 0 });
        const target = totals.get(row.theme);
        target.total += row.total || 0;
        target.correct += row.correct || 0;
        target.wrong += row.wrong || 0;
        target.percent = target.total ? Math.round((target.correct / target.total) * 100) : 0;
      });
    });
    return [...totals.values()].sort((a, b) => a.percent - b.percent || b.total - a.total);
  }

  function groupStatsFromEvaluated(evaluated) {
    const totals = new Map(emptyTrackedStats().map((row) => [row.theme, row]));
    (evaluated || []).forEach((entry) => {
      if (!entry?.gradable) return;
      const group = themeGroupFor(entry.question);
      if (!totals.has(group)) totals.set(group, { theme: group, total: 0, correct: 0, wrong: 0, percent: 0 });
      const row = totals.get(group);
      row.total += 1;
      row.correct += entry.correct ? 1 : 0;
      row.wrong += entry.correct ? 0 : 1;
      row.percent = row.total ? Math.round((row.correct / row.total) * 100) : 0;
    });
    return [...totals.values()].map((row) => ({
      ...row,
      percent: row.total ? Math.round((row.correct / row.total) * 100) : 0,
    }));
  }

  function aggregateTrackedThemes() {
    const totals = new Map(emptyTrackedStats().map((row) => [row.theme, row]));
    history().forEach((session) => {
      const rows = Array.isArray(session.groups) ? session.groups : (session.themes || []).map((row) => ({
        ...row,
        theme: themeGroupFor(null, row.theme),
      }));
      rows.forEach((row) => {
        if (!totals.has(row.theme)) totals.set(row.theme, { theme: row.theme, total: 0, correct: 0, wrong: 0, percent: 0 });
        const target = totals.get(row.theme);
        target.total += row.total || 0;
        target.correct += row.correct || 0;
        target.wrong += row.wrong || 0;
        target.percent = target.total ? Math.round((target.correct / target.total) * 100) : 0;
      });
    });
    return [...totals.values()].map((row) => ({
      ...row,
      percent: row.total ? Math.round((row.correct / row.total) * 100) : 0,
    }));
  }

  function saveDetailedSessionGroups() {
    if (typeof window.evaluatedSession !== "function") return;
    const sessions = history();
    const latest = sessions[0];
    if (!latest || latest.groups) return;
    const groups = groupStatsFromEvaluated(window.evaluatedSession());
    write(keys.history, [{ ...latest, groups }, ...sessions.slice(1)]);
  }

  function weakestTheme() {
    return aggregateThemes().find((row) => row.total >= 2 && row.wrong > 0)?.theme || "";
  }

  function renderDashboard() {
    const panel = document.querySelector("#learningDashboard");
    if (!panel) return;
    const sessions = history();
    const avg = sessions.length ? Math.round(sessions.reduce((sum, item) => sum + item.percent, 0) / sessions.length) : 0;
    const best = sessions.length ? Math.max(...sessions.map((item) => item.percent)) : 0;
    const latest = sessions[0]?.percent || 0;
    const goal = scoreGoal();
    const goalHit = latest >= goal || best >= goal;
    const weak = aggregateThemes()[0];
    const advice = !sessions.length
      ? "Fais une premiere session pour debloquer ton bilan personnalise."
      : weak
        ? `Priorite : retravailler ${weak.theme}, actuellement a ${weak.percent}%.`
        : "Bon rythme : continue avec une session normale ou tes erreurs.";

    panel.innerHTML = `
      <div class="dashboard-card wide"><span>Bilan de progression</span><strong>${advice}</strong></div>
      <div class="dashboard-card"><span>Sessions</span><strong>${sessions.length}</strong></div>
      <div class="dashboard-card"><span>Moyenne</span><strong>${avg}%</strong></div>
      <div class="dashboard-card"><span>Meilleur</span><strong>${best}%</strong></div>
      <div class="dashboard-card goal-card"><span>Objectif</span><strong>${goalHit ? "Badge valide" : `${latest}% / ${goal}%`}</strong><label>Vise <input id="scoreGoalInput" type="number" min="1" max="100" value="${goal}">%</label></div>
      <div class="dashboard-card"><span>A refaire</span><strong>${lastErrors().length}</strong></div>
      <div class="dashboard-card"><span>Difficiles</span><strong>${difficultIds().length}</strong></div>
    `;
    bindGoalInput();
  }

  function renderHomeIntro() {
    const actions = document.querySelector(".start-actions");
    if (!actions || document.querySelector("#homeIntro")) return;
    const intro = document.createElement("section");
    intro.id = "homeIntro";
    intro.className = "home-intro";
    intro.innerHTML = `
      <div class="home-intro-card">
        <span>Session examen</span>
        <strong>70 questions</strong>
        <p>Une selection differente a chaque nouvelle session.</p>
      </div>
      <div class="home-intro-card">
        <span>Temps Cisco</span>
        <strong>1h15</strong>
        <p>Un mode entrainement proche de NetAcad.</p>
      </div>
      <div class="home-intro-card">
        <span>Correction</span>
        <strong>A la fin</strong>
        <p>Erreurs, fiches et themes faibles apres soumission.</p>
      </div>
    `;
    actions.before(intro);
  }

  function bindGoalInput() {
    const input = document.querySelector("#scoreGoalInput");
    if (!input) return;
    input.addEventListener("change", () => {
      write(keys.goal, Number(input.value) || 85);
      renderDashboard();
      renderThemeCharts();
    });
  }

  function deleteHistoryEntry(id) {
    write(keys.history, history().filter((entry) => entry.id !== id));
    renderDashboard();
    renderGlobalStats();
    renderThemeCharts();
    renderRevisionCards();
    renderEnhancedHistory();
  }

  function sectionTitle(text) {
    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = text;
    return title;
  }

  function statRows(rows) {
    return rows.map((row) => {
      const percent = row.total ? Math.round((row.correct / row.total) * 100) : 0;
      return `
        <div class="theme-row">
          <strong>${row.theme}</strong>
          <span class="mini-bar"><i style="width:${percent}%"></i></span>
          <span>${row.correct}/${row.total} - ${percent}%</span>
        </div>
      `;
    }).join("");
  }

  function renderGlobalStats() {
    const panel = document.querySelector("#globalStats");
    if (!panel) return;
    const rows = aggregateThemes().filter((row) => row.total > 0);
    panel.innerHTML = "";
    panel.append(sectionTitle("Bilan global par theme"));
    if (!rows.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = "Ton bilan global apparaitra apres tes premieres sessions terminees.";
      panel.append(empty);
      return;
    }
    panel.insertAdjacentHTML("beforeend", statRows(rows));
  }

  function ensurePanel(id, className, anchorSelector, position = "afterend") {
    let panel = document.querySelector(`#${id}`);
    if (panel) return panel;
    const anchor = document.querySelector(anchorSelector);
    if (!anchor) return null;
    panel = document.createElement("div");
    panel.id = id;
    panel.className = className;
    anchor.insertAdjacentElement(position, panel);
    return panel;
  }

  function placeInPanel(panel, ...items) {
    if (!panel) return;
    items.filter(Boolean).forEach((item) => {
      if (item.parentElement !== panel) panel.append(item);
    });
  }

  function setupTabbedArea(id, anchorSelector, tabs, defaultTab) {
    let shell = document.querySelector(`#${id}`);
    if (!shell) {
      const anchor = document.querySelector(anchorSelector);
      if (!anchor) return null;
      shell = document.createElement("section");
      shell.id = id;
      shell.className = "study-shell";
      shell.innerHTML = `
        <nav class="study-nav" aria-label="Navigation des revisions">
          ${tabs.map((tab) => `<button type="button" data-study-tab="${tab.id}">${tab.label}</button>`).join("")}
        </nav>
        <div class="study-pages">
          ${tabs.map((tab) => `<section id="${id}-${tab.id}" class="study-page"></section>`).join("")}
        </div>
      `;
      anchor.insertAdjacentElement("afterend", shell);
      shell.querySelectorAll("[data-study-tab]").forEach((button) => {
        button.addEventListener("click", () => setActiveTab(shell, button.dataset.studyTab));
      });
    }
    setActiveTab(shell, shell.dataset.active || defaultTab || tabs[0]?.id);
    return shell;
  }

  function setActiveTab(shell, tabId) {
    if (!shell) return;
    shell.dataset.active = tabId;
    shell.querySelectorAll("[data-study-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.studyTab === tabId);
    });
    shell.querySelectorAll(".study-page").forEach((page) => {
      page.classList.toggle("active", page.id.endsWith(`-${tabId}`));
    });
  }

  function organizeHome() {
    const shell = setupTabbedArea("homeStudyShell", ".start-actions", [
      { id: "overview", label: "Accueil" },
      { id: "progress", label: "Progression" },
      { id: "cards", label: "Fiches" },
      { id: "history", label: "Historique" },
    ], "overview");
    if (!shell) return;
    placeInPanel(document.querySelector("#homeStudyShell-overview"), document.querySelector("#learningDashboard"));
    placeInPanel(document.querySelector("#homeStudyShell-progress"), document.querySelector("#themeChartStart"));
    placeInPanel(document.querySelector("#homeStudyShell-cards"), document.querySelector("#revisionCardsStart"));
    placeInPanel(document.querySelector("#homeStudyShell-history"), document.querySelector("#startHistory"));
  }

  function organizeResults() {
    const shell = setupTabbedArea("resultStudyShell", ".result-header", [
      { id: "correction", label: "Correction" },
      { id: "progress", label: "Progression" },
      { id: "cards", label: "Fiches" },
      { id: "history", label: "Historique" },
    ], "correction");
    if (!shell) return;
    placeInPanel(
      document.querySelector("#resultStudyShell-correction"),
      document.querySelector("#scoreBoard"),
      document.querySelector(".result-tabs"),
      document.querySelector("#resultsList"),
    );
    placeInPanel(
      document.querySelector("#resultStudyShell-progress"),
      document.querySelector("#globalStats"),
      document.querySelector("#themeChartResult"),
      document.querySelector("#themeStats"),
    );
    placeInPanel(document.querySelector("#resultStudyShell-cards"), document.querySelector("#revisionCardsResult"));
    placeInPanel(document.querySelector("#resultStudyShell-history"), document.querySelector("#historyPanel"));
  }

  function chartHtml(rows) {
    const goal = scoreGoal();
    return `
      <div class="theme-chart-head">
        <h2 class="section-title">Graphique par theme</h2>
        <span>Objectif ${goal}%</span>
      </div>
      ${rows.map((row) => `
        <div class="chart-row ${row.percent >= goal && row.total ? "goal-ok" : ""}">
          <div class="chart-label">
            <strong>${escapeHtml(row.theme)}</strong>
            <span>${row.correct}/${row.total}</span>
          </div>
          <div class="chart-track">
            <i style="width:${row.percent}%"></i>
            <b style="left:${goal}%"></b>
          </div>
          <span class="chart-percent">${row.percent}%</span>
        </div>
      `).join("")}
    `;
  }

  function renderThemeCharts() {
    const rows = aggregateTrackedThemes();
    const start = ensurePanel("themeChartStart", "theme-chart", "#learningDashboard");
    const result = ensurePanel("themeChartResult", "theme-chart", "#globalStats");
    if (start) start.innerHTML = chartHtml(rows);
    if (result) result.innerHTML = chartHtml(rows);
  }

  function correctAnswerText(question) {
    if (question?.matching?.prompts?.length) {
      return question.matching.prompts.map((prompt, index) =>
        `${prompt} -> ${question.matching.correct?.[index] || question.matching.answers?.[index] || ""}`
      ).join(" ; ");
    }
    return (question?.correct || []).map((index) => question.options?.[index - 1] || question.options?.[index] || "").filter(Boolean).join(" ; ");
  }

  function startIds(ids) {
    if (!ids.length || typeof window.createSession !== "function" || typeof window.renderExam !== "function") return;
    window.createSession(ids, "targeted");
    window.renderExam();
  }

  function toggleDifficult(id) {
    const current = new Set(difficultIds());
    if (current.has(id)) current.delete(id);
    else current.add(id);
    write(keys.difficult, [...current]);
    renderDashboard();
    renderRevisionCards();
    bindStartButtons();
  }

  function revisionCardsHtml() {
    const ids = [...new Set([...lastErrors(), ...difficultIds()])].filter((id) => byId.has(id)).slice(0, 4);
    if (!ids.length) {
      return `
        <h2 class="section-title">Fiches de revision</h2>
        <p class="muted">Tes erreurs se transformeront ici en mini fiches apres une correction.</p>
      `;
    }
    return `
      <h2 class="section-title">Fiches de revision</h2>
      <div class="revision-grid">
        ${ids.map((id) => {
          const question = byId.get(id);
          const fav = difficultIds().includes(id);
          return `
            <article class="revision-card">
              <div class="revision-card-head">
                <span>${escapeHtml(question.theme || "CCNA")}</span>
                <em>${fav ? "Favori" : "Erreur"}</em>
              </div>
              <strong>${escapeHtml(question.question)}</strong>
              <details>
                <summary>Voir la fiche</summary>
                <p>${escapeHtml(correctAnswerText(question) || question.explanation || "Revise la correction complete dans tes resultats.")}</p>
              </details>
              <div>
                <button type="button" data-review="${id}">Reviser</button>
                <button type="button" data-favorite="${id}" class="${fav ? "active" : ""}">${fav ? "Favori" : "Ajouter favori"}</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderRevisionCards() {
    const start = ensurePanel("revisionCardsStart", "revision-panel", "#themeChartStart");
    const result = ensurePanel("revisionCardsResult", "revision-panel", "#historyPanel");
    [start, result].filter(Boolean).forEach((panel) => {
      panel.innerHTML = revisionCardsHtml();
      panel.querySelectorAll("[data-review]").forEach((button) => {
        button.addEventListener("click", () => startIds([Number(button.dataset.review)]));
      });
      panel.querySelectorAll("[data-favorite]").forEach((button) => {
        button.addEventListener("click", () => toggleDifficult(Number(button.dataset.favorite)));
      });
    });
  }

  function addSectionTitle(panel, text) {
    if (!panel || panel.querySelector(".section-title")) return;
    panel.prepend(sectionTitle(text));
  }

  function renderEnhancedHistory() {
    document.querySelectorAll(".history-panel").forEach((panel) => {
      addSectionTitle(panel, "Historique des sessions");
      const rows = [...panel.querySelectorAll(".history-row")];
      rows.forEach((row) => {
        if (row.querySelector(".delete-history")) return;
        const entry = history().find((item) => (row.textContent || "").includes(formatDate(item.date)));
        if (!entry) return;
        const button = document.createElement("button");
        button.className = "delete-history";
        button.type = "button";
        button.textContent = "Supprimer";
        button.addEventListener("click", () => {
          deleteHistoryEntry(entry.id);
          row.remove();
        });
        row.append(button);
      });
    });
  }

  function deleteHistoryEntry(id) {
    write(keys.history, history().filter((entry) => entry.id !== id));
    renderDashboard();
    renderGlobalStats();
    renderThemeCharts();
    renderRevisionCards();
    renderEnhancedHistory();
  }

  function decorateResults() {
    saveDetailedSessionGroups();
    renderHomeIntro();
    renderGlobalStats();
    renderThemeCharts();
    renderRevisionCards();
    addSectionTitle(document.querySelector("#themeStats"), "Cette session par theme");
    renderEnhancedHistory();
    organizeHome();
    organizeResults();
  }

  function patchResultsRenderer() {
    if (typeof window.renderResults !== "function" || window.renderResults.__enhanced) return;
    const original = window.renderResults;
    window.renderResults = function (...args) {
      const output = original.apply(this, args);
      setTimeout(decorateResults, 0);
      return output;
    };
    window.renderResults.__enhanced = true;
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  }

  function bindStartButtons() {
    const hard = document.querySelector("#difficultStartBtn");
    const weak = document.querySelector("#weakThemeStartBtn");
    const hardIds = difficultIds();
    const theme = weakestTheme();

    if (hard) {
      hard.disabled = hardIds.length === 0;
      hard.textContent = hardIds.length ? `Questions difficiles (${hardIds.length})` : "Questions difficiles";
      hard.addEventListener("click", () => startIds(difficultIds()));
    }

    if (weak) {
      weak.disabled = !theme;
      weak.textContent = theme ? `Travailler ${theme}` : "Theme faible";
      weak.addEventListener("click", () => startIds(BANK.filter((question) => question.theme === theme).map((question) => question.id)));
    }
  }

  function bindImageZoom() {
    const modal = document.querySelector("#imageModal");
    const modalImg = document.querySelector("#imageModalImg");
    const close = document.querySelector("#imageModalClose");
    if (!modal || !modalImg || !close) return;

    document.addEventListener("click", (event) => {
      const image = event.target.closest?.(".question-image");
      if (!image) return;
      modalImg.src = image.src;
      modal.classList.remove("hidden");
    });

    const hide = () => {
      modal.classList.add("hidden");
      modalImg.removeAttribute("src");
    };
    close.addEventListener("click", hide);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) hide();
    });
  }

  function registerPwa() {
    if (!("serviceWorker" in navigator) || location.protocol !== "https:") return;
    navigator.serviceWorker.register("sw.js").catch(() => {
      // The site still works normally if the browser refuses offline registration.
    });
  }

  renderDashboard();
  bindStartButtons();
  bindImageZoom();
  patchResultsRenderer();
  registerPwa();
  decorateResults();
})();

