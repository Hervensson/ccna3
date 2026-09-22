(function () {
  function activateTab(tabId, activeButton, shouldScroll = true) {
    const shell = document.querySelector("#homeStudyShell");
    if (!shell || !tabId) return;
    shell.dataset.active = tabId;

    document.querySelectorAll("#homeTopbar [data-study-tab], #homeStudyShell [data-study-tab]").forEach((button) => {
      button.classList.toggle("active", button === activeButton || button.dataset.studyTab === tabId);
    });

    shell.querySelectorAll(".study-page").forEach((page) => {
      page.classList.toggle("active", page.id === `homeStudyShell-${tabId}`);
    });

    if (shouldScroll) {
      setTimeout(() => {
        const page = document.querySelector(`#homeStudyShell-${tabId}`);
        const target = page?.classList.contains("active") ? page : shell;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
    }
  }

  function moveHomeNav() {
    const start = document.querySelector("#startScreen");
    const topbar = document.querySelector("#homeTopbar");
    const brand = start?.querySelector(":scope > .brand-row") || topbar?.querySelector(".brand-row");
    const nav = document.querySelector("#homeStudyShell .study-nav") || topbar?.querySelector(".study-nav");
    if (!start || !brand || !nav) return;

    let targetTopbar = topbar;
    if (!targetTopbar) {
      targetTopbar = document.createElement("div");
      targetTopbar.id = "homeTopbar";
      targetTopbar.className = "home-topbar";
      brand.before(targetTopbar);
      targetTopbar.append(brand);
    }

    if (nav.parentElement !== targetTopbar) targetTopbar.append(nav);
    document.querySelector("#homeStudyShell")?.classList.add("nav-relocated");
    bindTopbarNav(nav);
  }

  function bindTopbarNav(nav) {
    if (!nav || nav.dataset.topNavBound) return;
    nav.dataset.topNavBound = "true";
    nav.addEventListener("click", (event) => {
      const button = event.target.closest("[data-study-tab]");
      if (!button) return;
      event.preventDefault();
      activateTab(button.dataset.studyTab, button);
    }, true);
    nav.addEventListener("touchend", (event) => {
      const button = event.target.closest("[data-study-tab]");
      if (!button) return;
      event.preventDefault();
      activateTab(button.dataset.studyTab, button);
    }, { passive: false, capture: true });
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("#homeTopbar [data-study-tab]");
    if (!button) return;
    event.preventDefault();
    activateTab(button.dataset.studyTab, button);
  }, true);

  document.addEventListener("DOMContentLoaded", moveHomeNav);
  moveHomeNav();
  setTimeout(moveHomeNav, 150);
  setTimeout(moveHomeNav, 700);
  setTimeout(moveHomeNav, 1400);
})();

