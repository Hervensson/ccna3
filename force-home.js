(function () {
  const RESUME_KEY = "ccnaEnsaOpenSession";
  function shouldKeepSessionOpen() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("resume") === "1") return true;
    try { if (sessionStorage.getItem(RESUME_KEY) === "1") { sessionStorage.removeItem(RESUME_KEY); return true; } } catch {}
    return false;
  }
  function showHomeOnLaunch() {
    if (shouldKeepSessionOpen()) return;
    const start = document.querySelector("#startScreen"); const exam = document.querySelector("#examShell"); const result = document.querySelector("#resultScreen");
    if (!start || !exam || !result) return;
    start.classList.remove("hidden"); exam.classList.add("hidden"); result.classList.add("hidden");
  }
  showHomeOnLaunch(); document.addEventListener("DOMContentLoaded", showHomeOnLaunch); setTimeout(showHomeOnLaunch, 80); setTimeout(showHomeOnLaunch, 350);
})();
(function loadExamTracking() {
  if (!document.querySelector('link[href*="exam-tracking.css"]')) { const style=document.createElement("link"); style.rel="stylesheet"; style.href="exam-tracking.css?v=34"; style.dataset.examTracking="true"; document.head.append(style); }
  if (!document.querySelector('script[src*="exam-tracking.js"]')) { const script=document.createElement("script"); script.src="exam-tracking.js?v=34"; script.dataset.examTracking="true"; document.body.append(script); }
})();

