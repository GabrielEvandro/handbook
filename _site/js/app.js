/**
 * Foundation — Handbook Interativo
 */

const CONTENT = {
  estatistica: {
    basico: [
      {
        title: 'O que é Estatística?',
        body: `<p>Estatística é a ciência de <strong>coletar, organizar, analisar e interpretar dados</strong> para tomar decisões com menos incerteza.</p>
        <p>Pense nela como um GPS para decisões: os dados mostram onde você está; a estatística ajuda a prever para onde pode ir.</p>
        <div class="tip-box"><strong>💡 Intuição</strong> Antes de qualquer fórmula, pergunte: "O que quero descobrir com esses dados?"</div>`
      },
      {
        title: 'Média Aritmética',
        body: `<p>A <strong>média</strong> responde: "se dividirmos o total igualmente, quanto cada um ficaria?" Você soma todos os valores e divide pela quantidade.</p>
        <p>Imagine o salário de 4 colegas: R$ 10, R$ 12, R$ 14 e R$ 18 mil. A média é R$ 13,5 mil — o "centro de gravidade" do grupo. Mas se um CEO ganha R$ 100 mil no mesmo cálculo, a média dispara para R$ 34 mil, mesmo que a maioria ganhe bem menos.</p>
        <p>Por isso a média é <strong>sensível a outliers</strong> (valores muito distantes do resto).</p>
        <div class="stat-demo" data-demo="media"></div>
        <div class="tip-box"><strong>Quando usar</strong> Dados simétricos, sem extremos absurdos — ex.: altura de uma turma, temperatura média da semana.</div>`
      },
      {
        title: 'Mediana',
        body: `<p>A <strong>mediana</strong> é o valor que fica no meio depois de ordenar os dados. Metade fica abaixo, metade acima — é o "centro" que não se importa com quanto o maior valor é exagerado.</p>
        <p>No exemplo [10, 12, 14, 100]: ordenando, o centro está entre 12 e 14 → mediana = <strong>13</strong>. O 100 quase não mexeu nela. Já a média seria 34.</p>
        <p>Com quantidade <strong>ímpar</strong>, pegamos o valor do meio. Com quantidade <strong>par</strong>, fazemos a média dos dois centrais.</p>
        <div class="stat-demo" data-demo="mediana"></div>
        <div class="tip-box"><strong>Quando usar</strong> Salários, preços de imóveis, avaliações — distribuições com outliers ou assimetria.</div>`
      },
      {
        title: 'Moda',
        body: `<p>A <strong>moda</strong> é o valor que mais aparece no conjunto — o "campeão de frequência". Não exige conta de soma: só contar repetições.</p>
        <p>Em uma prova, se as notas 7, 7, 7, 8, 9 aparecem, a moda é <strong>7</strong>. Em uma pesquisa de cor favorita, a moda é a cor mais votada (dado categórico).</p>
        <p>Pode haver <strong>mais de uma moda</strong> (bimodal) ou <strong>nenhuma</strong>, se todos os valores repetirem igualmente.</p>
        <div class="stat-demo" data-demo="moda"></div>
        <div class="tip-box"><strong>Quando usar</strong> Moda de vendas, tamanho mais pedido, categoria mais comum — especialmente em dados nominais ou discretos.</div>`
      },
      {
        title: 'Variabilidade: Desvio Padrão',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      }
    ],
    intermediario: [
      {
        title: 'Distribuição Normal',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Correlação vs Causalidade',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Teste t e p-valor',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      }
    ],
    avancado: [
      {
        title: 'Regressão Linear Múltipla',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'ANOVA',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Bayesiana — Introdução',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      }
    ]
  },
  python: {
    basico: [
      {
        title: 'Por que Python para Dados?',
        body: `<p>Python é legível, tem ecossistema gigante (Pandas, NumPy, scikit-learn) e é a linguagem padrão em ciência de dados e IA.</p>`
      },
      {
        title: 'Variáveis e Tipos',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Estruturas de Controle',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Funções',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      }
    ],
    intermediario: [
      {
        title: 'List Comprehensions',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'NumPy — Arrays Vetorizados',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Pandas — DataFrames',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      }
    ],
    avancado: [
      {
        title: 'OOP para Pipelines',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Decoradores e Context Managers',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      },
      {
        title: 'Performance: Numba e Polars',
        body: `<p>EM CONSTRUÇÃO 🚧</p>`
      }
    ]
  },
  ia: {
    ml: {
      basico: [
        {
          title: 'O que é Machine Learning?',
          body: `<p>ML é o ramo da IA onde algoritmos <strong>aprendem padrões a partir de dados</strong> sem serem explicitamente programados para cada regra.</p>
        <p>Três paradigmas: supervisionado (rótulos), não supervisionado (sem rótulos) e por reforço (recompensas).</p>`
        },
        {
          title: 'Overfitting vs Underfitting',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Regressão Logística',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ],
      intermediario: [
        {
          title: 'Random Forest',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Métricas: Precision, Recall, F1',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Validação Cruzada k-Fold',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ],
      avancado: [
        {
          title: 'Gradient Boosting (XGBoost, LightGBM)',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'SHAP — Interpretabilidade',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ]
    },
    dl: {
      basico: [
        {
          title: 'Redes Neurais — Conceito',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Funções de Ativação',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Loss Functions',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ],
      intermediario: [
        {
          title: 'CNNs para Imagens',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Dropout e Batch Normalization',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Transfer Learning',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ],
      avancado: [
        {
          title: 'Transformers — Arquitetura',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Fine-tuning e LoRA',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ]
    },
    genai: {
      basico: [
        {
          title: 'O que é IA Generativa?',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Tokens e Context Window',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Prompt Engineering Básico',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ],
      intermediario: [
        {
          title: 'RAG — Retrieval Augmented Generation',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Embeddings e Similaridade',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Azure OpenAI — Visão Geral',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ],
      avancado: [
        {
          title: 'Agents e Tool Use',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Fine-tuning de LLMs',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        },
        {
          title: 'Segurança e Responsible AI',
          body: `<p>EM CONSTRUÇÃO 🚧</p>`
        }
      ]
    }
  }
};

// State
let currentSection = 'inicio';
let currentLevel = 'basico';
let currentIaSubtab = 'ml';

// DOM
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const menuToggle = document.getElementById('menuToggle');

function navigateTo(sectionId) {
  currentSection = sectionId;
  const hash = sectionId === 'inicio' ? '' : sectionId;

  sections.forEach(s => s.classList.toggle('active', s.id === sectionId));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === sectionId));

  if (hash) history.replaceState(null, '', `#${sectionId}`);
  else history.replaceState(null, '', window.location.pathname);

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
        initStatsDemos(item);
      }
    });
  });

  initStatsDemos(container);
}

function refreshStatsTopics() {
  const topics = CONTENT.estatistica[currentLevel];
  renderAccordion('statsTopics', topics);
}

function refreshPythonTopics() {
  const topics = CONTENT.python[currentLevel];
  renderAccordion('pythonTopics', topics);
}

function refreshIaTopics() {
  const topics = CONTENT.ia[currentIaSubtab][currentLevel];
  renderAccordion('iaTopics', topics);
}

function initFromHash() {
  const hash = window.location.hash.replace('#', '') || 'inicio';
  const valid = ['inicio', 'estatistica', 'python', 'ia', 'sobre'];
  navigateTo(valid.includes(hash) ? hash : 'inicio');
}

// Navigation clicks
document.querySelectorAll('[data-section]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.dataset.section);
  });
});

document.querySelectorAll('.topic-card').forEach(card => {
  card.addEventListener('click', () => navigateTo(card.dataset.goto));
});

// Level tabs (per section)
function setupLevelTabs(sectionEl) {
  const tabs = sectionEl?.querySelectorAll('.level-tab');
  tabs?.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentLevel = tab.dataset.level;
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
    searchIn('estatistica', 'statsTopics', () => CONTENT.estatistica[level]);
    refreshPythonTopics();
    searchIn('python', 'pythonTopics', () => CONTENT.python[level]);
    ['ml', 'dl', 'genai'].forEach(sub => {
      currentIaSubtab = sub;
      refreshIaTopics();
      searchIn('ia', 'iaTopics', () => CONTENT.ia[sub][level]);
    });
  });

  currentLevel = document.querySelector('.page-section.active .level-tab.active')?.dataset.level || 'basico';

  if (foundSection) {
    navigateTo(foundSection);
    if (foundSection === 'estatistica') refreshStatsTopics();
    if (foundSection === 'python') refreshPythonTopics();
    if (foundSection === 'ia') refreshIaTopics();
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
