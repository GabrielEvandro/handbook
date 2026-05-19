/**
 * community-stats.js — Painel de Estatísticas reais da comunidade
 * Foundation · Handbook Interativo
 *
 * Exibe somente métricas vindas da API:
 *  1. Visitas registradas
 *  2. Tema mais acessado
 */

(function () {
  'use strict';

  function formatNumber(n) {
    return Number(n || 0).toLocaleString('pt-BR');
  }

  function animateCounter(el, target, duration = 1200) {
    const start = performance.now();
    const from = 0;

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = Math.round(from + (target - from) * eased);
      el.textContent = formatNumber(value);

      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = formatNumber(target);
    }

    requestAnimationFrame(step);
  }

  function observeAndAnimate(el, target) {
    if (!el || !window.IntersectionObserver) return;

    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter(el, target);
        obs.disconnect();
      }
    }, { threshold: 0.3 });

    obs.observe(el);
  }

  async function fetchRealStats() {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3000);
      const resp = await fetch('/api/stats', { signal: ctrl.signal });
      clearTimeout(timer);

      if (!resp.ok) return null;

      return await resp.json();
    } catch {
      return null;
    }
  }

  async function render() {
    const stats = await fetchRealStats();
    const badge = document.getElementById('cstats-source-badge');
    const elTotal = document.getElementById('cstat-total-visits');
    const elTopic = document.getElementById('cstat-top-topic');

    if (!stats) {
      if (badge) badge.textContent = '• aguardando dados reais';
      if (elTotal) elTotal.textContent = '--';
      if (elTopic) elTopic.textContent = 'Sem dados ainda';
      return;
    }

    if (!stats.configured) {
      if (badge) {
        const messageByReason = {
          missing_site: '• configure o site no GoatCounter',
          missing_token: '• configure o token do GoatCounter',
          fetch_failed: '• sem acesso aos dados agora',
        };
        badge.textContent = messageByReason[stats.reason] || '• aguardando dados reais';
      }
      if (elTotal) elTotal.textContent = '--';
      if (elTopic) elTopic.textContent = 'Sem dados ainda';
      return;
    }

    if (badge) badge.textContent = '• dados reais';
    if (elTotal) elTotal.textContent = formatNumber(stats.total);
    if (elTopic) elTopic.textContent = stats.topTopic || 'Sem dados ainda';

    observeAndAnimate(elTotal, stats.total);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
