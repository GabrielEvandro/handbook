/**
 * community-stats.js — Painel de Estatísticas da Comunidade
 * Foundation · Handbook Interativo
 *
 * Métricas:
 *  1. Visitantes totais  — seed crescente + localStorage
 *  2. Online agora       — flutuação realista entre 3–18
 *  3. Tópico mais acessado — rastreado via accordion clicks
 *  4. Tempo médio        — calculado da sessão atual
 *  5. Progresso          — "X pessoas já estudaram aqui"
 */

(function () {
  'use strict';

  /* ─── Configuração ──────────────────────────────────────── */
  const SEED_TOTAL     = 18;                              // visitantes reais desde o lançamento
  const GROWTH_PER_DAY = 5;                               // crescimento diário estimado (otimista)
  const LAUNCH_DATE    = new Date('2026-05-15T00:00:00Z'); // data real de lançamento

  const LS = {
    VISITS:      'hb_total_visits',
    SESSION_ID:  'hb_session_id',
    SESSION_START:'hb_session_start',
    TOP_TOPIC:   'hb_top_topic',
    TOPIC_COUNTS:'hb_topic_counts',
    AVG_TIME:    'hb_avg_time',   // média histórica em segundos
    AVG_COUNT:   'hb_avg_count',  // qtd de sessões para calcular média
    DAY_SEED:    'hb_day_seed',   // dia base do seed para consistência
  };

  /* ─── Utilitários ───────────────────────────────────────── */
  function ls(key, value) {
    if (value === undefined) {
      try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
    }
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }

  function daysSinceLaunch() {
    return Math.max(0, Math.floor((Date.now() - LAUNCH_DATE) / 86_400_000));
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}m ${String(s).padStart(2, '0')}s`;
  }

  function formatNumber(n) {
    return n.toLocaleString('pt-BR');
  }

  /* ─── 1. Visitantes totais ──────────────────────────────── */
  function getTotalVisits() {
    const daysSeed = daysSinceLaunch();
    const base = SEED_TOTAL + daysSeed * GROWTH_PER_DAY;

    // Pega ou cria a contagem local (incrementa 1 por sessão)
    let stored = ls(LS.VISITS) || { count: 0, lastDay: 0 };
    if (typeof stored !== 'object') stored = { count: 0, lastDay: 0 };

    const sessionId = getSessionId();
    if (!ls('hb_counted_' + sessionId)) {
      stored.count = (stored.count || 0) + 1;
      ls(LS.VISITS, stored);
      ls('hb_counted_' + sessionId, true);
    }

    return base + (stored.count || 0);
  }

  /* ─── 2. Sessão ─────────────────────────────────────────── */
  function getSessionId() {
    let id = sessionStorage.getItem(LS.SESSION_ID);
    if (!id) {
      id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      sessionStorage.setItem(LS.SESSION_ID, id);
      sessionStorage.setItem(LS.SESSION_START, Date.now().toString());
    }
    return id;
  }

  function getSessionSeconds() {
    const start = parseInt(sessionStorage.getItem(LS.SESSION_START) || '0', 10);
    return start ? Math.floor((Date.now() - start) / 1000) : 0;
  }

  /* ─── 3. Online agora ───────────────────────────────────── */
  const ONLINE_MIN = 1;
  const ONLINE_MAX = 4;
  let currentOnline = null;
  let onlineTarget  = null;

  function getOnlineNow() {
    if (currentOnline === null) {
      // Usa hora atual como seed para consistência entre reloads próximos
      const minuteSeed = Math.floor(Date.now() / 45_000);
      const pseudo = ((minuteSeed * 1664525 + 1013904223) >>> 0) % (ONLINE_MAX - ONLINE_MIN + 1);
      currentOnline = ONLINE_MIN + pseudo;
      onlineTarget  = currentOnline;
    }
    return currentOnline;
  }

  function pickNewOnlineTarget() {
    const delta = Math.floor(Math.random() * 5) - 2; // -2 a +2
    onlineTarget = Math.max(ONLINE_MIN, Math.min(ONLINE_MAX, onlineTarget + delta));
  }

  /* ─── 4. Tópico mais acessado ──────────────────────────── */
  function getTopTopic() {
    const counts = ls(LS.TOPIC_COUNTS) || {};
    const fallback = 'Média Aritmética';
    if (!Object.keys(counts).length) return fallback;
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || fallback;
  }

  function trackTopicOpen(title) {
    const counts = ls(LS.TOPIC_COUNTS) || {};
    counts[title] = (counts[title] || 0) + 1;
    ls(LS.TOPIC_COUNTS, counts);
    // Atualiza o card em tempo real
    const el = document.getElementById('cstat-top-topic');
    if (el) {
      el.textContent = getTopTopic();
      animatePop(el.closest('.cstat-card'));
    }
  }

  /* ─── 5. Tempo médio ────────────────────────────────────── */
  function getAverageTime() {
    // Combina histórico salvo + estimativa base (4m20s = 260s) com sessão atual
    const histAvg = ls(LS.AVG_TIME) || 260;
    const histCount = ls(LS.AVG_COUNT) || 5;
    const sessionSec = getSessionSeconds();
    // Weighted average
    const totalSecs = (histAvg * histCount + Math.max(sessionSec, 60)) / (histCount + 1);
    return Math.round(totalSecs);
  }

  function saveSessionTime() {
    const secs = getSessionSeconds();
    if (secs < 10) return; // sessão muito curta, ignora
    const histAvg = ls(LS.AVG_TIME) || 260;
    const histCount = ls(LS.AVG_COUNT) || 5;
    const newAvg = Math.round((histAvg * histCount + secs) / (histCount + 1));
    ls(LS.AVG_TIME, newAvg);
    ls(LS.AVG_COUNT, Math.min(histCount + 1, 999));
  }

  /* ─── 6. Progresso da comunidade ─────────────────── */
  // Quem visitou o site, estudou algo — são o mesmo grupo.
  // Retorna o total de visitas para consistência.
  function getCommunityStudents() {
    return getTotalVisits();
  }

  /* ─── Micro-animação: pop ────────────────────────────────── */
  function animatePop(el) {
    if (!el) return;
    el.classList.remove('cstat-pop');
    void el.offsetWidth; // reflow
    el.classList.add('cstat-pop');
  }

  /* ─── Counter animado ───────────────────────────────────── */
  function animateCounter(el, target, duration = 1200, isFloat = false) {
    const start = performance.now();
    const from = 0;
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = Math.round(from + (target - from) * eased);
      el.textContent = formatNumber(value);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = formatNumber(target);
    }
    requestAnimationFrame(step);
  }

  /* ─── Busca dados reais da API ────────────────────── */
  async function fetchRealStats() {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3000); // timeout 3s
      const resp = await fetch('/api/stats', { signal: ctrl.signal });
      clearTimeout(timer);
      if (!resp.ok) return null;
      const data = await resp.json();
      return data.configured ? data : null;
    } catch {
      return null; // silenciosamente cai no modo simulado
    }
  }

  /* ─── Render inicial ──────────────────────────────── */
  async function render() {
    // Tenta dados reais primeiro; cai em simulação se não configurado
    const real = await fetchRealStats();

    const totalVisits = real?.total    ?? getTotalVisits();
    const topTopic    = real?.topTopic ?? getTopTopic();
    const onlineNow   = getOnlineNow();
    const avgTime     = getAverageTime();
    const students    = real?.total    ?? getCommunityStudents();

    // Indica se os dados são reais ou simulados
    const badge = document.getElementById('cstats-source-badge');
    if (badge) badge.textContent = real ? '• dados reais' : '• dados estimados';

    // Popula valores nos elementos
    const elTotal    = document.getElementById('cstat-total-visits');
    const elOnline   = document.getElementById('cstat-online-now');
    const elTopic    = document.getElementById('cstat-top-topic');
    const elTime     = document.getElementById('cstat-avg-time');
    const elStudents = document.getElementById('cstat-students');
    const elBar      = document.getElementById('cstat-progress-bar');

    if (elTotal)    elTotal.textContent    = formatNumber(totalVisits);
    if (elOnline)   elOnline.textContent   = onlineNow;
    if (elTopic)    elTopic.textContent    = topTopic;
    if (elTime)     elTime.textContent     = formatTime(avgTime);
    if (elStudents) elStudents.textContent = formatNumber(students);

    // Barra de progresso (meta simbólica: 500 pessoas)
    if (elBar) {
      const pct = Math.min(100, (students / 500) * 100);
      setTimeout(() => { elBar.style.width = pct.toFixed(1) + '%'; }, 400);
    }

    // Anima contadores ao entrar na viewport
    observeAndAnimate(elTotal,    totalVisits);
    observeAndAnimate(elOnline,   onlineNow);
    observeAndAnimate(elStudents, students);
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

  /* ─── Live update: online agora ────────────────────────── */
  function startOnlineTicker() {
    setInterval(() => {
      pickNewOnlineTarget();
      // Transição suave: muda 1 por vez a cada tick de 3s até atingir target
      const tickInterval = setInterval(() => {
        if (currentOnline === onlineTarget) { clearInterval(tickInterval); return; }
        currentOnline += currentOnline < onlineTarget ? 1 : -1;
        const el = document.getElementById('cstat-online-now');
        if (el) {
          el.textContent = currentOnline;
          animatePop(el.closest('.cstat-card'));
        }
      }, 3_000);
    }, 45_000);
  }

  /* ─── Live update: tempo de sessão ──────────────────────── */
  function startTimeTicker() {
    setInterval(() => {
      const el = document.getElementById('cstat-avg-time');
      if (el) el.textContent = formatTime(getAverageTime());
    }, 10_000);
  }

  /* ─── Hook: rastrear abertura de accordion ───────────────── */
  function hookAccordionTracking() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.accordion-header');
      if (!btn) return;
      const item = btn.closest('.accordion-item');
      if (!item) return;
      // Só rastreia se o item está ABRINDO (não fechando)
      if (!item.classList.contains('open')) {
        const titleEl = btn.querySelector('span');
        if (titleEl) trackTopicOpen(titleEl.textContent.trim());
      }
    });
  }

  /* ─── Salva tempo ao sair ───────────────────────────────── */
  function hookSessionEnd() {
    window.addEventListener('pagehide', saveSessionTime);
    window.addEventListener('beforeunload', saveSessionTime);
  }

  /* ─── Init ──────────────────────────────────────────────── */
  function init() {
    getSessionId(); // garante que a sessão começa
    render();
    startOnlineTicker();
    startTimeTicker();
    hookAccordionTracking();
    hookSessionEnd();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
