/* global _hmt */

if (!window._hmt) window._hmt = [];
document.referrer = document.location.href;
document.addEventListener('pjax:success', () => {
  _hmt.push(['_trackPageview', location.pathname]);
});
