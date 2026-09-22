(function () {
  const BANK = window.CCNA_QUESTIONS || [];
  const HISTORY_KEY = "ccnaEnsaScoreHistory";
  const byId = new Map(BANK.map((question) => [question.id, question]));
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } };
  const escapeHtml = (value) => String(value || "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  function answerHtml(question) {
    if (question.type === "matching") return (question.matching?.correct || []).map(escapeHtml).join(" · ") || "Correction disponible dans la fiche.";
    if (question.type === "study") return "Question de revision libre.";
    return (question.correct || []).map((index) => escapeHtml(question.options?.[index])).filter(Boolean).join(" · ");
  }
  function errorsHtml(entry) {
    const ids = (entry.wrongIds || []).filter((id) => byId.has(id));
    if (!ids.length) return `<p class="old-errors-empty">Aucune erreur enregistree pour cette session.</p>`;
    return `<div class="old-errors-list">${ids.map((id) => { const question = byId.get(id); return `<article class="old-error-card"><span>${escapeHtml(question.theme || "CCNA")} · Banque #${question.sourceNumber || question.id}</span><strong>${escapeHtml(question.question)}</strong><p><b>Bonne reponse :</b> ${answerHtml(question) || "Consulte la fiche de correction."}</p>${question.explanation ? `<p>${escapeHtml(question.explanation)}</p>` : ""}</article>`; }).join("")}</div><button type="button" class="redo-old-errors">Refaire ces ${ids.length} erreur${ids.length > 1 ? "s" : ""}</button>`;
  }
  function startOldErrors(entry) {
    const ids = (entry.wrongIds || []).filter((id) => byId.has(id));
    if (ids.length && typeof window.createSession === "function" && typeof window.renderExam === "function") { window.createSession(ids, "errors"); window.renderExam(); }
  }
  function decoratePanel(panel) {
    const history = read(HISTORY_KEY, []);
    [...panel.querySelectorAll(".history-row")].forEach((row, index) => {
      const entry = history[index];
      if (!entry || row.dataset.oldErrorsReady === entry.id) return;
      row.dataset.oldErrorsReady = entry.id;
      const ids = (entry.wrongIds || []).filter((id) => byId.has(id));
      const button = document.createElement("button"); button.type = "button"; button.className = "show-old-errors"; button.textContent = ids.length ? `Voir mes erreurs (${ids.length})` : "Aucune erreur"; button.disabled = !ids.length; row.append(button);
      const details = document.createElement("section"); details.className = "old-errors-details hidden"; details.innerHTML = errorsHtml(entry); row.insertAdjacentElement("afterend", details);
      button.addEventListener("click", () => { const opening = details.classList.contains("hidden"); details.classList.toggle("hidden", !opening); button.textContent = opening ? "Masquer les erreurs" : `Voir mes erreurs (${ids.length})`; });
      details.querySelector(".redo-old-errors")?.addEventListener("click", () => startOldErrors(entry));
    });
  }
  function run() { document.querySelectorAll(".history-panel").forEach(decoratePanel); }
  document.addEventListener("DOMContentLoaded", run); document.addEventListener("click", () => setTimeout(run, 120)); run(); setInterval(run, 1500);
})();

