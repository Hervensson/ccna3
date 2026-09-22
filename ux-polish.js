(function () {
  const BANK = window.CCNA_QUESTIONS || [];
  const SESSION_SIZE = 70;
  const DURATION_MS = 75 * 60 * 1000;
  const VERSION = `ccna-ensa-${BANK.length}-v5`;
  const keys = {
    session: "ccnaEnsaExamSession",
    history: "ccnaEnsaScoreHistory",
    errors: "ccnaEnsaLastErrors",
    difficult: "ccnaEnsaDifficultQuestions",
  };
  const themeGroups = [
    { label: "VLAN", tests: ["vlan", "trunk", "inter-vlan"] },
    { label: "STP", tests: ["stp", "spanning"] },
    { label: "EtherChannel", tests: ["etherchannel", "lacp", "pagp"] },
    { label: "WLAN", tests: ["wlan", "sans fil", "wireless"] },
    { label: "Routage IPv6", tests: ["ipv6", "routage"] },
    { label: "Securite LAN", tests: ["securite", "securite", "port security", "dhcp snooping"] },
    { label: "DHCP", tests: ["dhcp"] },
    { label: "Tout melanger", tests: [] },
  ];

  const read = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  };

  const write = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // The app still works without storage.
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

  function hasActiveSession() {
    const saved = read(keys.session, null);
    return saved && saved.version === VERSION && !saved.submitted;
  }

  function showExam() {
    document.querySelector("#startScreen")?.classList.add("hidden");
    document.querySelector("#resultScreen")?.classList.add("hidden");
    document.querySelector("#examShell")?.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function shuffled(values) {
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
      optionOrder: question.type === "study" ? [] : shuffled((question.options || []).map((_, index) => index)),
      answer: [],
      matchingAnswer: {},
      note: "",
    };
  }

  function startThemeSession(label) {
    const pool = label === "Tout melanger" ? BANK : BANK.filter((question) => matchesTheme(question, label));
    if (!pool.length) {
      alert("Aucune question trouvee pour ce theme.");
      return;
    }
    const picked = shuffled(pool).slice(0, Math.min(SESSION_SIZE, pool.length));
    write(keys.session, {
      version: VERSION,
      mode: label === "Tout melanger" ? "normal" : "theme",
      theme: label,
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

  function startSingleQuestion(id) {
    const question = BANK.find((item) => item.id === id);
    if (!question) return;
    write(keys.session, {
      version: VERSION,
      mode: "targeted",
      createdAt: Date.now(),
      deadline: Date.now() + DURATION_MS,
      current: 0,
      submitted: false,
      submittedAt: null,
      historySaved: false,
      items: [createQuestionItem(question)],
    });
    location.reload();
  }

  function matchesTheme(question, label) {
    const group = themeGroups.find((item) => item.label === label);
    if (!group || !group.tests.length) return true;
    const haystack = normalize(`${question.theme || ""} ${question.question || ""}`);
    return group.tests.some((test) => haystack.includes(normalize(test)));
  }

  function correctAnswerText(question) {
    if (question?.matching?.prompts?.length) {
      return question.matching.prompts.map((prompt, index) => {
        const answer = question.matching.correct?.[index] || question.matching.answers?.[index] || "";
        return `${prompt} -> ${answer}`;
      }).join(" ; ");
    }
    return (question.correct || []).map((index) => question.options?.[index] || question.options?.[index - 1]).filter(Boolean).join(" ; ");
  }

  function buildHero() {
    const start = document.querySelector("#startScreen");
    const title = start?.querySelector("h1");
    const summary = document.querySelector("#bankSummary");
    const actions = document.querySelector(".start-actions");
    if (!start || !title || !summary || !actions) return;

    start.classList.add("polished-home");
    start.classList.toggle("no-history", read(keys.history, []).length === 0);
    title.textContent = "CCNA 3 ENSA";
    summary.textContent = `${BANK.length} questions, sessions de 70 questions, correction finale et reprise automatique.`;

    let hero = document.querySelector("#polishHero");
    if (!hero) {
      hero = document.createElement("section");
      hero.id = "polishHero";
      hero.className = "polish-hero";
      summary.after(hero);
    }
    const active = hasActiveSession();
    hero.innerHTML = `
      <article class="polish-panel polish-main">
        <span>${active ? "Session en cours" : "Pret pour l'examen"}</span>
        <strong>${active ? "Continue exactement ou tu t'es arrete." : "Entraine-toi comme sur NetAcad, sans correction avant la fin."}</strong>
        <p>${active ? "Ta progression est sauvegardee sur cet appareil." : "70 questions aleatoires, timer 1h15, erreurs transformees en fiches de revision."}</p>
      </article>
      <div class="polish-side">
        <article class="polish-panel polish-mini"><span>Objectif</span><p>Vise 85% et suis tes themes faibles.</p></article>
        <article class="polish-panel polish-mini"><span>Mobile</span><p>Ajoute le site a l'ecran d'accueil de ton iPhone.</p></article>
      </div>
    `;

    const startBtn = document.querySelector("#startBtn");
    if (startBtn) startBtn.textContent = active ? "Continuer ma session" : "Demarrer une session";
  }

  function interceptContinueButton() {
    const startBtn = document.querySelector("#startBtn");
    if (!startBtn || startBtn.dataset.continuePatched) return;
    startBtn.dataset.continuePatched = "true";
    startBtn.addEventListener("click", (event) => {
      if (!hasActiveSession()) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      showExam();
    }, true);
  }

  function buildThemeMenu() {
    const shell = document.querySelector("#homeStudyShell-overview") || document.querySelector("#learningDashboard")?.parentElement;
    if (!shell || document.querySelector("#themeQuickMenu")) return;
    const menu = document.createElement("section");
    menu.id = "themeQuickMenu";
    menu.className = "theme-menu";
    menu.innerHTML = `
      <div class="theme-menu-head">
        <div><span>Revision par theme</span><h2>Choisis exactement ce que tu veux travailler</h2></div>
      </div>
      <div class="theme-buttons">
        ${themeGroups.map((theme) => `<button type="button" data-theme-start="${theme.label}">${theme.label}</button>`).join("")}
      </div>
    `;
    shell.prepend(menu);
    menu.querySelectorAll("[data-theme-start]").forEach((button) => {
      button.addEventListener("click", () => startThemeSession(button.dataset.themeStart));
    });
  }

  function buildEmptyProgress() {
    const dashboard = document.querySelector("#learningDashboard");
    if (!dashboard || read(keys.history, []).length) return;
    let empty = document.querySelector("#emptyProgress");
    if (!empty) {
      empty = document.createElement("section");
      empty.id = "emptyProgress";
      empty.className = "empty-progress";
      dashboard.before(empty);
    }
    empty.innerHTML = `
      <span>Bilan de progression</span>
      <h2>Fais une premiere session pour debloquer ton bilan personnalise.</h2>
      <p>Apres soumission, tu verras tes themes faibles, ton historique, tes erreurs et tes fiches.</p>
      <button type="button" class="primary-action" data-first-session>Commencer maintenant</button>
    `;
    empty.querySelector("[data-first-session]").addEventListener("click", () => document.querySelector("#startBtn")?.click());
  }

  function buildFlashcards() {
    const panels = [document.querySelector("#revisionCardsStart"), document.querySelector("#revisionCardsResult")].filter(Boolean);
    if (!panels.length) return;
    const ids = [...new Set([...read(keys.errors, []), ...read(keys.difficult, [])])].map(Number).filter((id) => BANK.some((question) => question.id === id)).slice(0, 8);

    panels.forEach((panel) => {
      panel.className = "flashcard-panel";
      if (!ids.length) {
        panel.innerHTML = `
          <div class="flashcard-toolbar">
            <div><span>Fiches de revision</span><h2>Rien a revoir pour le moment</h2></div>
          </div>
          <p class="muted">Tes erreurs et questions difficiles deviendront des cartes avec reponse cachee.</p>
        `;
        return;
      }
      panel.innerHTML = `
        <div class="flashcard-toolbar">
          <div><span>Fiches de revision</span><h2>Cartes issues de tes erreurs</h2></div>
          <span>${ids.length} cartes</span>
        </div>
        <div class="flashcard-grid">
          ${ids.map((id) => {
            const question = BANK.find((item) => item.id === id);
            return `
              <article class="flashcard" data-card="${id}">
                <span class="pill">${escapeHtml(question.theme || "CCNA")}</span>
                <h3>${escapeHtml(question.question)}</h3>
                <div class="flashcard-answer">${escapeHtml(correctAnswerText(question) || question.explanation || "Revois la correction complete.")}</div>
                <div class="flashcard-actions">
                  <button type="button" data-reveal>Voir reponse</button>
                  <button type="button" class="known" data-known>Je connais</button>
                  <button type="button" data-review-again>A revoir</button>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      `;
      panel.querySelectorAll("[data-reveal]").forEach((button) => {
        button.addEventListener("click", () => {
          const card = button.closest(".flashcard");
          card?.classList.toggle("revealed");
          button.textContent = card?.classList.contains("revealed") ? "Masquer" : "Voir reponse";
        });
      });
      panel.querySelectorAll("[data-known]").forEach((button) => {
        button.addEventListener("click", () => {
          const id = Number(button.closest(".flashcard")?.dataset.card);
          write(keys.difficult, read(keys.difficult, []).filter((item) => Number(item) !== id));
          button.closest(".flashcard")?.remove();
        });
      });
      panel.querySelectorAll("[data-review-again]").forEach((button) => {
        button.addEventListener("click", () => {
          const id = Number(button.closest(".flashcard")?.dataset.card);
          startSingleQuestion(id);
        });
      });
    });
  }

  function polish() {
    buildHero();
    interceptContinueButton();
    buildThemeMenu();
    buildEmptyProgress();
    buildFlashcards();
  }

  document.addEventListener("DOMContentLoaded", polish);
  polish();
  setTimeout(polish, 200);
  setTimeout(polish, 800);
})();

