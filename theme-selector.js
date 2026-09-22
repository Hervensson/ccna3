(function () {
  const BANK = window.CCNA_QUESTIONS || [];
  const VERSION = `ccna-ensa-${BANK.length}-v3`;
  const SESSION_KEY = "ccnaEnsaExamSession";
  const RESUME_KEY = "ccnaEnsaOpenSession";
  const DURATION_MS = 75 * 60 * 1000;
  const themes = [...new Set(BANK.map((question) => question.theme).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "fr"));

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
      optionOrder: question.type === "study" ? [] : shuffled((question.options || []).map((_, index) => index)),
      answer: [],
      matchingAnswer: {},
      note: "",
    };
  }

  function launch(selectedLabels, requestedSize) {
    const pool = selectedLabels.length
      ? BANK.filter((question) => selectedLabels.includes(question.theme))
      : BANK;
    if (!pool.length) {
      alert("Aucune question trouvee pour cette selection.");
      return;
    }
    const picked = shuffled(pool).slice(0, Math.min(requestedSize, pool.length));
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      version: VERSION,
      mode: selectedLabels.length ? "theme" : "normal",
      theme: selectedLabels.join(" + ") || "Tout melanger",
      createdAt: Date.now(),
      deadline: Date.now() + DURATION_MS,
      current: 0,
      submitted: false,
      submittedAt: null,
      historySaved: false,
      items: picked.map(questionItem),
    }));
    try {
      sessionStorage.setItem(RESUME_KEY, "1");
    } catch {}
    location.href = `${location.pathname}?v=28&resume=1`;
  }

  function render() {
    const menu = document.querySelector("#themeQuickMenu");
    if (!menu || menu.dataset.multiThemeReady) return;
    menu.dataset.multiThemeReady = "true";
    menu.innerHTML = `
      <div class="theme-menu-head">
        <div><span>Revision ciblee</span><h2>Choisis un ou plusieurs themes</h2></div>
        <div class="theme-head-actions">
          <button type="button" class="theme-reset" data-theme-select-all>Tout selectionner</button>
          <button type="button" class="theme-reset" data-theme-reset>Tout deselectionner</button>
        </div>
      </div>
      <div class="theme-choices">
        ${themes.map((theme) => `
          <label class="theme-choice">
            <input type="checkbox" value="${theme}" data-theme-choice>
            <span>${theme}</span>
          </label>
        `).join("")}
      </div>
      <div class="theme-launcher">
        <label>Questions
          <select data-theme-size>
            <option value="10">10</option>
            <option value="20" selected>20</option>
            <option value="40">40</option>
            <option value="70">70</option>
            <option value="999">Toutes</option>
          </select>
        </label>
        <p data-theme-summary></p>
        <button type="button" class="primary-action" data-theme-launch>Lancer la revision</button>
        <button type="button" data-theme-all>Tout melanger</button>
      </div>
    `;

    const choices = [...menu.querySelectorAll("[data-theme-choice]")];
    const size = menu.querySelector("[data-theme-size]");
    const summary = menu.querySelector("[data-theme-summary]");
    const selectedLabels = () => choices.filter((input) => input.checked).map((input) => input.value);
    const updateSummary = () => {
      const labels = selectedLabels();
      const count = labels.length
        ? BANK.filter((question) => labels.includes(question.theme)).length
        : BANK.length;
      summary.textContent = labels.length
        ? `${labels.length} theme${labels.length > 1 ? "s" : ""} - ${count} questions disponibles.`
        : `${BANK.length} questions disponibles si tu melanges tout.`;
    };

    choices.forEach((input) => input.addEventListener("change", updateSummary));
    menu.querySelector("[data-theme-select-all]").addEventListener("click", () => {
      choices.forEach((input) => { input.checked = true; });
      updateSummary();
    });
    menu.querySelector("[data-theme-reset]").addEventListener("click", () => {
      choices.forEach((input) => { input.checked = false; });
      updateSummary();
    });
    menu.querySelector("[data-theme-launch]").addEventListener("click", () => {
      const labels = selectedLabels();
      if (!labels.length) {
        alert("Choisis au moins un theme ou utilise Tout melanger.");
        return;
      }
      launch(labels, Number(size.value) || 20);
    });
    menu.querySelector("[data-theme-all]").addEventListener("click", () => launch([], Number(size.value) || 20));
    updateSummary();
  }

  document.addEventListener("DOMContentLoaded", render);
  render();
  setTimeout(render, 250);
  setTimeout(render, 900);
})();

