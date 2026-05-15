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
        title: 'Média, Mediana e Moda',
        body: `<p><strong>Média</strong> — soma todos os valores e divide pela quantidade. Sensível a valores extremos (outliers).</p>
        <p><strong>Mediana</strong> — valor central quando os dados estão ordenados. Robusta a outliers.</p>
        <p><strong>Moda</strong> — valor que mais se repete. Útil em dados categóricos.</p>
        <pre class="code-block">dados = [10, 12, 14, 100]
média = 34    # puxada pelo 100
mediana = 13  # representa melhor o "centro"</pre>`
      },
      {
        title: 'Variabilidade: Desvio Padrão',
        body: `<p>O <strong>desvio padrão</strong> mede o quanto os dados se espalham em torno da média. Quanto maior, mais dispersos estão os pontos.</p>
        <p>Regra prática: em distribuições normais, ~68% dos dados ficam a 1 desvio da média, ~95% a 2 desvios.</p>`
      }
    ],
    intermediario: [
      {
        title: 'Distribuição Normal',
        body: `<p>A curva em sino (Gauss) aparece em inúmeros fenômenos naturais. Caracterizada por média (μ) e desvio padrão (σ).</p>
        <p>Central para testes de hipótese e intervalos de confiança.</p>`
      },
      {
        title: 'Correlação vs Causalidade',
        body: `<p><strong>Correlação</strong> mede associação linear entre duas variáveis (−1 a +1). <strong>Não implica causa!</strong></p>
        <p>Exemplo clássico: vendas de sorvete e afogamentos correlacionam — ambos sobem no verão (variável oculta).</p>`
      },
      {
        title: 'Teste t e p-valor',
        body: `<p>O <strong>p-valor</strong> é a probabilidade de observar um resultado tão extremo quanto o seu, assumindo que a hipótese nula é verdadeira.</p>
        <p>p &lt; 0,05 é convenção comum, mas contexto e tamanho do efeito importam tanto quanto o limiar.</p>`
      }
    ],
    avancado: [
      {
        title: 'Regressão Linear Múltipla',
        body: `<p>Modela uma variável resposta como combinação linear de vários preditores. Coeficientes indicam mudança esperada na resposta por unidade de cada preditor.</p>
        <p>Atenção a multicolinearidade, heterocedasticidade e resíduos não normais.</p>`
      },
      {
        title: 'ANOVA',
        body: `<p><strong>Analysis of Variance</strong> compara médias entre 3+ grupos. Decompõe variância total em entre-grupos e dentro-grupos.</p>`
      },
      {
        title: 'Bayesiana — Introdução',
        body: `<p>Atualiza crenças prévias (prior) com evidência dos dados (likelihood) para obter distribuição posterior.</p>
        <p>P(<strong>θ</strong>|dados) ∝ P(dados|<strong>θ</strong>) · P(<strong>θ</strong>)</p>`
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
        body: `<pre class="code-block">nome = "Gabriel Prado"      # str
idade = 28             # int
salario = 8500.50      # float
ativo = True           # bool
skills = ["Python", "SQL"]  # list</pre>
        <p>Use <code>type()</code> para inspecionar e nomes descritivos em snake_case.</p>`
      },
      {
        title: 'Estruturas de Controle',
        body: `<pre class="code-block">for i in range(5):
    print(i)

if score >= 0.7:
    print("Aprovado")
else:
    print("Revisar")</pre>`
      },
      {
        title: 'Funções',
        body: `<pre class="code-block">def media(lista):
    return sum(lista) / len(lista)

resultado = media([1, 2, 3, 4])  # 2.5</pre>
        <p>Funções encapsulam lógica reutilizável. Use type hints em projetos maiores.</p>`
      }
    ],
    intermediario: [
      {
        title: 'List Comprehensions',
        body: `<pre class="code-block">quadrados = [x**2 for x in range(10)]
pares = [x for x in range(20) if x % 2 == 0]</pre>
        <p>Sintaxe concisa e pythônica para criar listas a partir de iteráveis.</p>`
      },
      {
        title: 'NumPy — Arrays Vetorizados',
        body: `<pre class="code-block">import numpy as np
a = np.array([1, 2, 3])
b = a * 2          # [2, 4, 6] — sem loop!
media = a.mean()</pre>
        <p>Operações vetorizadas são muito mais rápidas que loops Python puros.</p>`
      },
      {
        title: 'Pandas — DataFrames',
        body: `<pre class="code-block">import pandas as pd
df = pd.read_csv("dados.csv")
df.head()
df.groupby("categoria")["vendas"].mean()</pre>`
      }
    ],
    avancado: [
      {
        title: 'OOP para Pipelines',
        body: `<p>Classes ajudam a organizar transformadores encadeáveis compatíveis com scikit-learn (<code>fit</code>, <code>transform</code>).</p>`
      },
      {
        title: 'Decoradores e Context Managers',
        body: `<pre class="code-block">from contextlib import contextmanager

@contextmanager
def timer():
  import time
  start = time.time()
  yield
  print(f"{time.time()-start:.2f}s")</pre>`
      },
      {
        title: 'Performance: Numba e Polars',
        body: `<p>Para datasets grandes, considere <strong>Polars</strong> (Rust) ou <strong>Numba</strong> para JIT de funções numéricas críticas.</p>`
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
          body: `<p><strong>Overfitting</strong> — modelo decora o treino e falha em dados novos.</p>
        <p><strong>Underfitting</strong> — modelo simples demais, não captura o padrão.</p>
        <p>Soluções: validação cruzada, regularização, mais dados, early stopping.</p>`
        },
        {
          title: 'Regressão Logística',
          body: `<p>Classificação binária que estima probabilidade via função sigmoide. Saída entre 0 e 1 interpretável como chance da classe positiva.</p>`
        }
      ],
      intermediario: [
        {
          title: 'Random Forest',
          body: `<p>Ensemble de árvores de decisão com bagging e seleção aleatória de features. Robusto, pouco tuning, bom baseline.</p>`
        },
        {
          title: 'Métricas: Precision, Recall, F1',
          body: `<p>Em classes desbalanceadas, acurácia engana. <strong>F1</strong> equilibra precision (quão confiáveis são os positivos previstos) e recall (quantos positivos reais foram encontrados).</p>`
        },
        {
          title: 'Validação Cruzada k-Fold',
          body: `<p>Divide dados em k partes; treina em k−1 e valida na restante, rotacionando. Estima performance com menos viés que um único split.</p>`
        }
      ],
      avancado: [
        {
          title: 'Gradient Boosting (XGBoost, LightGBM)',
          body: `<p>Constrói árvores sequencialmente, cada uma corrigindo erros da anterior. Estado da arte em dados tabulares estruturados.</p>`
        },
        {
          title: 'SHAP — Interpretabilidade',
          body: `<p>Valores SHAP atribuem contribuição de cada feature para cada predição, baseados em teoria dos jogos.</p>`
        }
      ]
    },
    dl: {
      basico: [
        {
          title: 'Redes Neurais — Conceito',
          body: `<p>Camadas de neurônios artificiais aplicam transformações não lineares. A rede aprende pesos via <strong>backpropagation</strong> e gradiente descendente.</p>`
        },
        {
          title: 'Funções de Ativação',
          body: `<p><strong>ReLU</strong> — max(0, x), padrão em camadas ocultas.</p>
        <p><strong>Sigmoid/Softmax</strong> — saídas probabilísticas para classificação.</p>`
        },
        {
          title: 'Loss Functions',
          body: `<p>Cross-entropy para classificação, MSE para regressão. A loss guia o quanto o modelo precisa ajustar os pesos.</p>`
        }
      ],
      intermediario: [
        {
          title: 'CNNs para Imagens',
          body: `<p>Convoluções detectam padrões locais (bordas, texturas) com compartilhamento de pesos. Pooling reduz dimensionalidade espacial.</p>`
        },
        {
          title: 'Dropout e Batch Normalization',
          body: `<p><strong>Dropout</strong> desliga neurônios aleatoriamente no treino para regularizar.</p>
        <p><strong>BatchNorm</strong> normaliza ativações por mini-batch, acelera convergência.</p>`
        },
        {
          title: 'Transfer Learning',
          body: `<p>Reutilize modelos pré-treinados (ResNet, EfficientNet) e adapte só as últimas camadas — menos dados e tempo necessários.</p>`
        }
      ],
      avancado: [
        {
          title: 'Transformers — Arquitetura',
          body: `<p><strong>Self-attention</strong> permite que cada token "olhe" para todos os outros em paralelo. Base de BERT, GPT e modelos multimodais modernos.</p>`
        },
        {
          title: 'Fine-tuning e LoRA',
          body: `<p>LoRA adiciona matrizes de baixo rank treináveis, reduzindo custo de adaptar LLMs grandes a domínios específicos.</p>`
        }
      ]
    },
    genai: {
      basico: [
        {
          title: 'O que é IA Generativa?',
          body: `<p>Modelos que <strong>criam conteúdo novo</strong> — texto, imagem, áudio, código — a partir de padrões aprendidos em dados massivos.</p>
        <p>Exemplos: GPT, DALL·E, Stable Diffusion.</p>`
        },
        {
          title: 'Tokens e Context Window',
          body: `<p>Texto é dividido em <strong>tokens</strong> (pedaços de palavras). A janela de contexto limita quantos tokens o modelo processa de uma vez.</p>`
        },
        {
          title: 'Prompt Engineering Básico',
          body: `<p>Seja específico, dê contexto, defina formato de saída e use exemplos (few-shot). "Você é um especialista em..." ancora o comportamento.</p>`
        }
      ],
      intermediario: [
        {
          title: 'RAG — Retrieval Augmented Generation',
          body: `<p>Combina busca em base de conhecimento (vetores/embeddings) com geração do LLM. Reduz alucinações e permite dados privados atualizados.</p>`
        },
        {
          title: 'Embeddings e Similaridade',
          body: `<p>Textos viram vetores densos onde significado similar fica próximo no espaço. Cosine similarity mede proximidade semântica.</p>`
        },
        {
          title: 'Azure OpenAI — Visão Geral',
          body: `<p>Serviço gerenciado com modelos GPT, embeddings, DALL·E e compliance enterprise — alinhado às certificações AI-102 e AI-900.</p>`
        }
      ],
      avancado: [
        {
          title: 'Agents e Tool Use',
          body: `<p>Agentes orquestram chamadas a ferramentas (APIs, SQL, código) em loop raciocínio-ação. Frameworks: LangChain, Semantic Kernel, AutoGen.</p>`
        },
        {
          title: 'Fine-tuning de LLMs',
          body: `<p>Ajuste supervisionado em pares instrução-resposta para especializar tom, formato ou domínio. Avalie com benchmarks e testes humanos.</p>`
        },
        {
          title: 'Segurança e Responsible AI',
          body: `<p>Content filtering, red teaming, guardrails e monitoramento de drift. Princípios: fairness, transparência, privacidade e accountability.</p>`
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
      }
    });
  });
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
