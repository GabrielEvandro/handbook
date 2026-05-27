/**
 * Foundation — Handbook Interativo
 */

// State
let currentSection = 'inicio';
let currentLevel = 'basico';
let currentIaSubtab = 'ml';
let lastSearchQuery = '';

// DOM
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const menuToggle = document.getElementById('menuToggle');

function navigateTo(sectionId, source = 'navigation') {
  currentSection = sectionId;
  const hash = sectionId === 'inicio' ? '' : sectionId;

  sections.forEach(s => s.classList.toggle('active', s.id === sectionId));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === sectionId));

  if (hash) history.replaceState(null, '', `#${sectionId}`);
  else history.replaceState(null, '', window.location.pathname);

  document.dispatchEvent(new CustomEvent('foundation:navigate', {
    detail: { sectionId, source }
  }));

  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function closeSidebar() {
  sidebar?.classList.remove('open');
  overlay?.classList.remove('visible');
  menuToggle?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

function openSidebar() {
  sidebar?.classList.add('open');
  overlay?.classList.add('visible');
  menuToggle?.classList.add('open');
  menuToggle?.setAttribute('aria-expanded', 'true');
}

function renderAccordion(containerId, topics) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!topics || topics.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhum tópico neste nível ainda. Em breve!</div>';
    return;
  }

  container.innerHTML = topics.map((t, i) => `
    <div class="accordion-item" data-title="${t.title.toLowerCase()}">
      <button class="accordion-header" aria-expanded="false" id="acc-${containerId}-${i}">
        <span>${t.title}</span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div class="accordion-body" role="region" aria-labelledby="acc-${containerId}-${i}">
        <div class="accordion-content">${t.body}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      container.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        document.dispatchEvent(new CustomEvent('foundation:topic_open', {
          detail: {
            sectionId: currentSection,
            level: currentLevel,
            iaSubtab: currentSection === 'ia' ? currentIaSubtab : null,
            topicTitle: btn.textContent.trim()
          }
        }));
        initStatsDemos(item);
        initLLMDemos(item);
      }
    });
  });

  initStatsDemos(container);
  initLLMDemos(container);
}

function refreshStatsTopics() {
  const topics = window.i18n.getCurrentContent().estatistica[currentLevel];
  renderAccordion('statsTopics', topics);
}

function refreshPythonTopics() {
  const topics = window.i18n.getCurrentContent().python[currentLevel];
  renderAccordion('pythonTopics', topics);
}

function refreshIaTopics() {
  const topics = window.i18n.getCurrentContent().ia[currentIaSubtab][currentLevel];
  renderAccordion('iaTopics', topics);
}

function initFromHash() {
  const hash = window.location.hash.replace('#', '') || 'inicio';
  const valid = ['inicio', 'estatistica', 'python', 'ia', 'sobre'];
  navigateTo(valid.includes(hash) ? hash : 'inicio', 'hash');
}

// Navigation clicks
document.querySelectorAll('[data-section]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.dataset.section, 'nav_click');
  });
});

document.querySelectorAll('.topic-card').forEach(card => {
  card.addEventListener('click', () => navigateTo(card.dataset.goto, 'topic_card'));
});

// Level tabs (per section)
function setupLevelTabs(sectionEl) {
  const tabs = sectionEl?.querySelectorAll('.level-tab');
  tabs?.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentLevel = tab.dataset.level;
      document.dispatchEvent(new CustomEvent('foundation:level_change', {
        detail: {
          sectionId: sectionEl.id,
          level: currentLevel,
          iaSubtab: sectionEl.id === 'ia' ? currentIaSubtab : null
        }
      }));
      if (sectionEl.id === 'estatistica') refreshStatsTopics();
      if (sectionEl.id === 'python') refreshPythonTopics();
      if (sectionEl.id === 'ia') refreshIaTopics();
    });
  });
}

setupLevelTabs(document.getElementById('estatistica'));
setupLevelTabs(document.getElementById('python'));
setupLevelTabs(document.getElementById('ia'));

// IA sub-tabs
document.querySelectorAll('#iaSubTabs .sub-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('#iaSubTabs .sub-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentIaSubtab = tab.dataset.subtab;
    currentLevel = 'basico';
    document.dispatchEvent(new CustomEvent('foundation:ia_subtab_change', {
      detail: {
        sectionId: 'ia',
        iaSubtab: currentIaSubtab,
        level: currentLevel
      }
    }));
    document.querySelectorAll('#ia .level-tab').forEach((t, i) => {
      t.classList.toggle('active', i === 0);
    });
    refreshIaTopics();
  });
});

// Mobile menu
menuToggle?.addEventListener('click', () => {
  if (sidebar?.classList.contains('open')) closeSidebar();
  else openSidebar();
});

overlay?.addEventListener('click', closeSidebar);

// Global search
const searchInput = document.getElementById('globalSearch');
searchInput?.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    if (lastSearchQuery) {
      document.dispatchEvent(new CustomEvent('foundation:search', {
        detail: {
          query: '',
          resultsCount: 0,
          destinationSection: currentSection,
          action: 'clear'
        }
      }));
    }
    lastSearchQuery = '';
    document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('hidden'));
    return;
  }

  // Search across all sections — navigate to first match area
  let foundSection = null;

  const searchIn = (section, containerId, getTopics) => {
    const topics = getTopics();
    const container = document.getElementById(containerId);
    if (!container) return false;
    let any = false;
    container.querySelectorAll('.accordion-item').forEach(el => {
      const title = el.dataset.title || '';
      const text = el.textContent.toLowerCase();
      const match = title.includes(q) || text.includes(q);
      el.classList.toggle('hidden', !match);
      if (match) any = true;
    });
    if (any) foundSection = foundSection || section;
    return any;
  };

  ['basico', 'intermediario', 'avancado'].forEach(level => {
    currentLevel = level;
    refreshStatsTopics();
    searchIn('estatistica', 'statsTopics', () => window.i18n.getCurrentContent().estatistica[level]);
    refreshPythonTopics();
    searchIn('python', 'pythonTopics', () => window.i18n.getCurrentContent().python[level]);
    ['ml', 'dl', 'genai'].forEach(sub => {
      currentIaSubtab = sub;
      refreshIaTopics();
      searchIn('ia', 'iaTopics', () => window.i18n.getCurrentContent().ia[sub][level]);
    });
  });

  currentLevel = document.querySelector('.page-section.active .level-tab.active')?.dataset.level || 'basico';
  const visibleResults = document.querySelectorAll('.accordion-item:not(.hidden)').length;

  if (foundSection) {
    navigateTo(foundSection, 'search');
    if (foundSection === 'estatistica') refreshStatsTopics();
    if (foundSection === 'python') refreshPythonTopics();
    if (foundSection === 'ia') refreshIaTopics();
  }

  if (q !== lastSearchQuery) {
    document.dispatchEvent(new CustomEvent('foundation:search', {
      detail: {
        query: q,
        resultsCount: visibleResults,
        destinationSection: foundSection || currentSection,
        action: 'search'
      }
    }));
    lastSearchQuery = q;
  }
});

window.addEventListener('hashchange', initFromHash);
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeSidebar();
});

// Init
refreshStatsTopics();
refreshPythonTopics();
refreshIaTopics();
initFromHash();

document.addEventListener('foundation:language_changed', () => {
  refreshStatsTopics();
  refreshPythonTopics();
  refreshIaTopics();
  
  // Re-run search if there was a query
  if (lastSearchQuery) {
    const q = lastSearchQuery;
    lastSearchQuery = '';
    searchInput.value = q;
    searchInput.dispatchEvent(new Event('input'));
  }
});
