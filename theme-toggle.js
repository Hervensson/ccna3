(function () {
  const STORAGE_KEY = "ccnaEnsaTheme";
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function currentTheme() {
    return root.dataset.theme === "dark" ? "dark" : "light";
  }

  function syncControls() {
    const activeTheme = currentTheme();
    document.querySelectorAll("[data-theme-value]").forEach((button) => {
      const active = button.dataset.themeValue === activeTheme;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("active", active);
    });
  }

  function applyTheme(theme, persist) {
    const normalized = theme === "dark" ? "dark" : "light";
    root.dataset.theme = normalized;
    if (themeColor) themeColor.content = normalized === "dark" ? "#0b1113" : "#edf3f1";
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, normalized);
      } catch {}
    }
    syncControls();
  }

  function createSelector() {
    const selector = document.createElement("div");
    selector.className = "appearance-switch";
    selector.setAttribute("role", "group");
    selector.setAttribute("aria-label", "Choisir le thème d'affichage");
    selector.innerHTML = `
      <button type="button" data-theme-value="light" aria-pressed="false">Clair</button>
      <button type="button" data-theme-value="dark" aria-pressed="false">Sombre</button>
    `;
    selector.addEventListener("click", (event) => {
      const button = event.target.closest("[data-theme-value]");
      if (button) applyTheme(button.dataset.themeValue, true);
    });
    return selector;
  }

  function mountSelectors() {
    document.querySelectorAll(".brand-row").forEach((brand) => {
      if (!brand.querySelector(".appearance-switch")) brand.append(createSelector());
    });
    syncControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountSelectors, { once: true });
  } else {
    mountSelectors();
  }

  applyTheme(currentTheme(), false);
})();
