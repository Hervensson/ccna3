(function () {
  const HISTORY_KEY = "ccnaEnsaScoreHistory";
  const GOAL_KEY = "ccnaEnsaScoreGoal";

  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
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

  function goal() {
    const value = Number(read(GOAL_KEY, 85));
    return Number.isFinite(value) ? Math.min(100, Math.max(1, value)) : 85;
  }

  function sessions() {
    return read(HISTORY_KEY, []).filter((entry) => Number.isFinite(Number(entry.percent)));
  }

  function themeRows() {
    const rows = new Map();
    sessions().forEach((session) => {
      (session.themes || session.groups || []).forEach((row) => {
        const name = row.theme || "Autres";
        if (!rows.has(name)) rows.set(name, { theme: name, total: 0, correct: 0 });
        const target = rows.get(name);
        target.total += Number(row.total) || 0;
        target.correct += Number(row.correct) || 0;
      });
    });
    return [...rows.values()]
      .map((row) => ({ ...row, percent: row.total ? Math.round((row.correct / row.total) * 100) : 0 }))
      .filter((row) => row.total)
      .sort((a, b) => a.percent - b.percent || b.total - a.total);
  }

  function formatDate(value) {
    if (!value) return "Session";
    return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit" }).format(new Date(value));
  }

  function openWeakTheme(theme) {
    document.querySelector("[data-compact-themes]")?.click();
    setTimeout(() => {
      document.querySelectorAll("[data-theme-choice]").forEach((input) => {
        input.checked = input.value === theme;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    }, 0);
  }

  function trendHtml(history, target) {
    const recent = history.slice(0, 8).reverse();
    if (!recent.length) return '<p class="progress-empty">Ta courbe apparaîtra après ta première session terminée.</p>';
    return `
      <div class="score-trend">
        ${recent.map((session) => {
          const percent = Math.min(100, Math.max(0, Number(session.percent) || 0));
          return `
            <div class="score-trend-item ${percent >= target ? "goal-ok" : ""}">
              <div class="score-trend-bar"><i style="height:${percent}%"></i></div>
              <strong>${percent}%</strong>
              <span>${formatDate(session.date)}</span>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function themesHtml(rows, target) {
    if (!rows.length) return '<p class="progress-empty">Les statistiques par thème apparaîtront après tes premières corrections.</p>';
    return `
      <div class="progress-theme-list">
        ${rows.map((row) => `
          <div class="progress-theme-row ${row.percent >= target ? "goal-ok" : ""}">
            <strong>${escapeHtml(row.theme)}</strong>
            <div class="progress-theme-track"><i style="width:${row.percent}%"></i></div>
            <span>${row.percent}%</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  function render() {
    const page = document.querySelector("#homeStudyShell-progress");
    if (!page) return;
    let dashboard = document.querySelector("#progressDashboard");
    if (!dashboard) {
      dashboard = document.createElement("section");
      dashboard.id = "progressDashboard";
      dashboard.className = "progress-dashboard";
      page.prepend(dashboard);
    }
    const history = sessions();
    const target = goal();
    const avg = history.length ? Math.round(history.reduce((sum, row) => sum + Number(row.percent || 0), 0) / history.length) : 0;
    const best = history.length ? Math.max(...history.map((row) => Number(row.percent) || 0)) : 0;
    const latest = history[0]?.percent || 0;
    const rows = themeRows();
    const weak = rows.find((row) => row.percent < target) || rows[0];
    const recommendation = weak
      ? `Travaille ${weak.theme} : ${weak.percent}% de réussite sur ${weak.total} question${weak.total > 1 ? "s" : ""}.`
      : "Termine une première session pour obtenir une recommandation personnalisée.";
    dashboard.innerHTML = `
      <div class="progress-summary">
        <div class="progress-metric"><span>Sessions</span><strong>${history.length}</strong></div>
        <div class="progress-metric"><span>Moyenne</span><strong>${avg}%</strong></div>
        <div class="progress-metric"><span>Meilleur</span><strong>${best}%</strong></div>
        <div class="progress-metric"><span>Dernier score</span><strong>${latest}%</strong></div>
      </div>
      <div class="progress-coach">
        <div><span class="progress-kicker">Recommandation</span><h2>${escapeHtml(recommendation)}</h2><p>Objectif actuel : ${target}%.</p></div>
        ${weak ? `<button type="button" data-train-weak>Travailler ce thème</button>` : ""}
      </div>
      <div class="progress-chart-panel">
        <span class="progress-kicker">Évolution récente</span>
        <h2>Tes ${Math.min(history.length, 8) || 0} dernières sessions</h2>
        ${trendHtml(history, target)}
      </div>
      <div class="progress-themes-panel">
        <span class="progress-kicker">Réussite globale</span>
        <h2>Progression par thème</h2>
        ${themesHtml(rows, target)}
      </div>
    `;
    dashboard.querySelector("[data-train-weak]")?.addEventListener("click", () => openWeakTheme(weak.theme));
    [...page.children].forEach((child) => {
      if (child !== dashboard) child.hidden = true;
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-study-tab='progress']")) setTimeout(render, 50);
  });
  document.addEventListener("DOMContentLoaded", render);
  render();
  setTimeout(render, 500);
  setTimeout(render, 1200);
})();

