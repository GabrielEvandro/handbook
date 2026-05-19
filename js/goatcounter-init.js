/**
 * goatcounter-init.js
 * Carrega o GoatCounter em runtime usando a configuração do Worker.
 */

(function () {
  'use strict';

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
      document.head.appendChild(script);
    } catch {
      // Falha silenciosa: o site continua funcionando sem analytics
    }
  }

  loadGoatCounter();
})();
