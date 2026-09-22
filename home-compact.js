(function () {
  const SESSION_KEY = "ccnaEnsaExamSession";
  const RESUME_KEY = "ccnaEnsaOpenSession";
  let replacementConfirmed = false;

  function readSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }

  function hasActiveSession() {
    const session = readSession();
    return Boolean(session && !session.submitted && session.items?.length);
  }

  function openCurrentSession() {
    try {
      sessionStorage.setItem(RESUME_KEY, "1");
    } catch {}
    location.href = `${location.pathname}?v=28&resume=1`;
  }

  function menu() {
    return document.querySelector("#themeQuickMenu");
  }

  function sizeSelect() {
    return menu()?.querySelector("[data-theme-size]");
  }

  function launchMixed(size) {
    const select = sizeSelect();
    if (select) select.value = String(size);
    replacementConfirmed = true;
    menu()?.querySelector("[data-theme-all]")?.click();
  }

  function confirmReplacement() {
    return !hasActiveSession() || confirm("Une session est deja en cours. Veux-tu la remplacer ?");
  }

  function closeThemeModal() {
    document.querySelector("#themeModal")?.classList.add("hidden");
  }

  function openThemeModal() {
    document.querySelector("#themeModal")?.classList.remove("hidden");
  }

  function selectPreset(themes) {
    const selected = new Set(themes.map(normalize));
    menu()?.querySelectorAll("[data-theme-choice]").forEach((input) => {
      input.checked = selected.has(normalize(input.value));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function ensureModal() {
    const themeMenu = menu();
    if (!themeMenu || document.querySelector("#themeModal")) return;
    const modal = document.createElement("section");
    modal.id = "themeModal";
    modal.className = "theme-modal hidden";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Choisir les themes de revision");
    modal.innerHTML = `
      <div class="theme-modal-card">
        <div class="theme-modal-bar">
          <h2>Composer une revision ciblee</h2>
          <button type="button" class="theme-modal-close" data-theme-modal-close>Fermer</button>
        </div>
        <div class="theme-presets" aria-label="Raccourcis de themes">
          <button type="button" data-theme-preset="WLAN / Sans fil">WLAN uniquement</button>
          <button type="button" data-theme-preset="Routage IPv4/IPv6">Routage</button>
          <button type="button" data-theme-preset="Securite LAN">Securite LAN</button>
          <button type="button" data-theme-preset="VLAN / Trunk / Inter-VLAN|STP / EtherChannel">VLAN et commutation</button>
        </div>
        <div data-theme-modal-slot></div>
      </div>
    `;
    document.body.append(modal);
    modal.querySelector("[data-theme-modal-slot]").append(themeMenu);
    modal.querySelector("[data-theme-modal-close]").addEventListener("click", closeThemeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeThemeModal();
    });
    modal.querySelectorAll("[data-theme-preset]").forEach((button) => {
      button.addEventListener("click", () => selectPreset(button.dataset.themePreset.split("|")));
    });
    themeMenu.addEventListener("click", (event) => {
      if (!event.target.closest("[data-theme-launch], [data-theme-all]")) return;
      if (replacementConfirmed) {
        replacementConfirmed = false;
        return;
      }
      if (!confirmReplacement()) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);
  }

  function ensureControls() {
    const start = document.querySelector("#startScreen");
    const hero = document.querySelector("#polishHero");
    if (!start || !hero) return;
    start.classList.add("compact-home");
    let controls = document.querySelector("#compactHomeControls");
    if (!controls) {
      controls = document.createElement("section");
      controls.id = "compactHomeControls";
      controls.className = "compact-home-controls";
      hero.after(controls);
    }
    const active = hasActiveSession();
    controls.innerHTML = `
      ${active ? '<button type="button" class="continue-action" data-compact-continue>Continuer ma session</button>' : ""}
      <button type="button" class="primary-action" data-compact-new>Nouvelle session</button>
      <label class="correction-size-field">Questions
        <select data-compact-correction-size>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="70">70</option>
        </select>
      </label>
      <button type="button" class="correction-action" data-compact-correction>Revision avec correction</button>
      <button type="button" data-compact-themes>Choisir mes themes</button>
      <button type="button" data-compact-quick>Revision rapide - 20 questions</button>
    `;
    const correctionSize = controls.querySelector("[data-compact-correction-size]");
    const savedSize = typeof window.getCorrectionSessionSize === "function" ? window.getCorrectionSessionSize() : 20;
    if (correctionSize) correctionSize.value = ["10", "20", "30", "50", "70"].includes(String(savedSize)) ? String(savedSize) : "20";
    correctionSize?.addEventListener("change", () => {
      if (typeof window.saveCorrectionSessionSize === "function") window.saveCorrectionSessionSize(Number(correctionSize.value));
    });
    controls.querySelector("[data-compact-continue]")?.addEventListener("click", openCurrentSession);
    controls.querySelector("[data-compact-new]").addEventListener("click", () => {
      if (!confirmReplacement()) return;
      launchMixed(70);
    });
    controls.querySelector("[data-compact-correction]")?.addEventListener("click", () => {
      if (!confirmReplacement()) return;
      const size = Number(correctionSize?.value || 20);
      if (typeof window.startCorrectionSession === "function") window.startCorrectionSession(size);
      else launchMixed(size);
    });
    controls.querySelector("[data-compact-themes]").addEventListener("click", openThemeModal);
    controls.querySelector("[data-compact-quick]").addEventListener("click", () => {
      if (!confirmReplacement()) return;
      const quickButton = document.querySelector("#quickModeBtn");
      if (quickButton) quickButton.click();
      else launchMixed(20);
    });
  }

  function compactDashboard() {
    const start = document.querySelector("#startScreen");
    if (!start) return;
    const emptyCards = start.querySelectorAll(".dashboard-card.wide");
    emptyCards.forEach((card, index) => {
      if (index > 0) card.hidden = true;
    });
  }

  function run() {
    ensureModal();
    ensureControls();
    compactDashboard();
  }

  document.addEventListener("DOMContentLoaded", run);
  run();
  setTimeout(run, 250);
  setTimeout(run, 900);
})();

