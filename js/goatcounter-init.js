/**
 * goatcounter-init.js
 * Carrega o GoatCounter em runtime usando a configuração do Worker.
 */

(function () {
  'use strict';

  let pendingPath = null;

  function getCurrentPath() {
    const hash = window.location.hash.replace(/^#/, '');
    return hash ? `/${hash}` : '/';
  }

  function track(path) {
    if (typeof window.goatcounter?.count === 'function') {
      window.goatcounter.count({
        path,
        title: document.title,
        event: false,
      });
      return true;
    }

    pendingPath = path;
    return false;
  }

  window.trackGoatcounterPageview = function trackGoatcounterPageview(path) {
    return track(path || getCurrentPath());
  };

  async function loadGoatCounter() {
    try {
      const resp = await fetch('/api/config');
      if (!resp.ok) return;

      const config = await resp.json();
      if (!config.goatcounterConfigured || !config.goatcounterSite) return;

      const script = document.createElement('script');
      script.async = true;
      script.src = '//gc.zgo.at/count.js';
      script.dataset.goatcounter = `https://${config.goatcounterSite}.goatcounter.com/count`;
      script.addEventListener('load', () => {
        track(pendingPath || getCurrentPath());
        pendingPath = null;
      });
      document.head.appendChild(script);
    } catch {
      // Falha silenciosa: o site continua funcionando sem analytics
    }
  }

  loadGoatCounter();
})();
