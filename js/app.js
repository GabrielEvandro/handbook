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
          title: 'Como as LLMs funcionam',
          body: `<h1><strong>Como os LLMs Funcionam</strong></h1>
        <p>LLM significa <strong>Large Language Model</strong>. Na prática, é uma IA treinada para transformar linguagem em matemática e, a partir disso, <strong>prever qual token vem em seguida</strong>.</p>
        <div class="llm-summary-grid">
          <div class="llm-summary-card">
            <span class="llm-summary-kicker">Ideia central</span>
            <p>Ler contexto, calcular probabilidades e gerar a próxima parte da resposta.</p>
          </div>
          <div class="llm-summary-card">
            <span class="llm-summary-kicker">Matéria-prima</span>
            <p>Bilhões de tokens vindos de livros, artigos, código, diálogos e documentos.</p>
          </div>
          <div class="llm-summary-card">
            <span class="llm-summary-kicker">Estrutura</span>
            <p>Redes neurais do tipo <strong>Transformer</strong>, com mecanismo de atenção.</p>
          </div>
        </div>

        <h2><strong>1. A ideia principal: prever o próximo token</strong></h2>
        <p>Quando você digita <code>"O céu é..."</code>, o modelo não procura uma frase decorada. Ele compara esse contexto com padrões que aprendeu e calcula algo como:</p>
        <ul>
          <li><strong>azul</strong> → alta probabilidade</li>
          <li>bonito → média probabilidade</li>
          <li>infinito → menor probabilidade</li>
        </ul>
        <p>Depois ele escolhe um candidato e repete o processo. A resposta nasce <strong>token por token</strong>.</p>

        <div class="llm-demo" data-demo="llm-next-token"></div>

        <h2><strong>2. O que é um token?</strong></h2>
        <p>LLMs não enxergam palavras exatamente como nós. Eles quebram o texto em pedaços menores chamados <strong>tokens</strong>. Um token pode ser uma palavra inteira, um pedaço de palavra, pontuação ou até espaço.</p>
        <p>Exemplo:</p>
        <pre class="code-block">"Inteligência Artificial" → ["Intelig", "ência", " Artificial"]</pre>
        <p>É com tokens que o modelo lê, pensa matematicamente e responde.</p>

        <div class="llm-demo" data-demo="llm-tokenizer"></div>

        <h2><strong>3. Como o modelo aprende?</strong></h2>
        <p>O treinamento principal chama-se <strong>pré-treinamento</strong>. O exercício é simples de descrever e enorme de executar:</p>
        <div class="tip-box"><strong>Objetivo do treino</strong>Tentar prever o próximo token milhões e bilhões de vezes, ajustando os pesos internos sempre que errar.</div>
        <p>Depois de repetir isso em escala gigantesca, o modelo aprende:</p>
        <ul>
          <li>gramática e estilo</li>
          <li>relações entre conceitos</li>
          <li>estrutura de textos e código</li>
          <li>padrões de pergunta e resposta</li>
          <li>regularidades que parecem raciocínio textual</li>
        </ul>

        <h2><strong>4. Onde esse aprendizado fica guardado?</strong></h2>
        <p>Ele fica espalhado em <strong>parâmetros</strong>, que são números ajustáveis dentro da rede neural. Pense neles como botões matemáticos que definem o comportamento do modelo.</p>
        <table class="content-table">
          <thead>
            <tr>
              <th>Escala</th>
              <th>Ordem de grandeza</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pequeno</td>
              <td>milhões de parâmetros</td>
            </tr>
            <tr>
              <td>Médio</td>
              <td>bilhões de parâmetros</td>
            </tr>
            <tr>
              <td>Grande</td>
              <td>dezenas ou centenas de bilhões</td>
            </tr>
          </tbody>
        </table>
        <p>Mais parâmetros geralmente significam <strong>mais capacidade de representar nuances</strong>, mas também mais custo computacional.</p>

        <h2><strong>5. Embeddings: como palavras viram números</strong></h2>
        <p>Antes de raciocinar sobre texto, o modelo converte tokens em vetores numéricos chamados <strong>embeddings</strong>. Nessa representação, termos parecidos tendem a ficar próximos.</p>
        <p>É por isso que o modelo consegue capturar relações como:</p>
        <ul>
          <li><code>rei</code> próximo de <code>rainha</code></li>
          <li><code>gato</code> próximo de <code>cachorro</code></li>
          <li><code>Python</code> próximo de <code>código</code></li>
        </ul>

        <div class="llm-demo" data-demo="llm-embeddings"></div>

        <h2><strong>6. O que torna os LLMs modernos tão fortes?</strong></h2>
        <p>O salto veio com a arquitetura <strong>Transformer</strong>, apresentada pelo Google em 2017 no artigo <em>Attention Is All You Need</em>. O ponto central dela é o mecanismo de <strong>attention</strong>.</p>

        <h2><strong>7. O que é attention?</strong></h2>
        <p>Attention permite que o modelo meça <strong>quais partes do contexto importam mais para entender cada token</strong>.</p>
        <p>Na frase <code>"João colocou o livro na mochila porque ela estava pesada."</code>, o modelo precisa inferir a que <code>ela</code> se refere. A atenção ajuda a conectar pronomes, sujeitos, objetos e relações semânticas.</p>
        <p>Uma boa analogia é imaginar um leitor com marca-texto: ele destaca partes relevantes do texto antes de continuar.</p>

        <div class="llm-demo" data-demo="llm-attention"></div>

        <h2><strong>8. Como a resposta é gerada</strong></h2>
        <ol>
          <li>Seu texto entra no prompt.</li>
          <li>O texto é quebrado em tokens.</li>
          <li>Cada token vira embedding.</li>
          <li>O Transformer calcula atenção entre os tokens.</li>
          <li>O modelo produz probabilidades para o próximo token.</li>
          <li>Um token é escolhido.</li>
          <li>Esse token volta para a sequência e o ciclo se repete.</li>
        </ol>
        <p>Tudo isso acontece muito rápido, várias vezes por segundo.</p>

        <h2><strong>9. O modelo “lembra” da conversa?</strong></h2>
        <p>Não como humanos. O que ele faz é receber um bloco de contexto com a conversa recente, instruções e documentos anexados. Esse bloco cabe dentro de uma <strong>janela de contexto</strong>.</p>
        <p>Quando a janela enche, o sistema precisa resumir, cortar ou descartar partes antigas.</p>

        <div class="llm-demo" data-demo="llm-context"></div>

        <h2><strong>10. O que é temperatura?</strong></h2>
        <p><strong>Temperatura</strong> controla o quanto a escolha do próximo token será conservadora ou criativa.</p>
        <ul>
          <li>temperatura baixa → respostas mais previsíveis</li>
          <li>temperatura alta → respostas mais variadas</li>
        </ul>
        <p>Ela não muda o conhecimento do modelo. Ela muda <strong>como o modelo escolhe entre possibilidades</strong>.</p>

        <div class="llm-demo" data-demo="llm-temperature"></div>

        <h2><strong>11. Pré-treinamento não é o fim</strong></h2>
        <p>Depois do pré-treinamento, muitos modelos passam por etapas adicionais:</p>
        <ul>
          <li><strong>instruction tuning</strong>: aprender a seguir instruções</li>
          <li><strong>alinhamento</strong>: reduzir respostas perigosas ou inúteis</li>
          <li><strong>RLHF ou técnicas similares</strong>: ajustar respostas com base em preferências humanas</li>
          <li><strong>fine-tuning</strong>: especializar o modelo em um domínio</li>
        </ul>
        <p>É isso que ajuda um LLM bruto a virar um assistente conversacional útil.</p>

        <h2><strong>12. Por que eles parecem inteligentes?</strong></h2>
        <p>Porque a linguagem humana carrega muito conhecimento. Ao aprender padrões de linguagem, o modelo acaba absorvendo relações sobre ciência, história, matemática, programação e comportamento textual.</p>
        <p>Isso gera a sensação de entendimento profundo, mesmo que o mecanismo interno continue sendo essencialmente estatístico.</p>

        <h2><strong>13. O que eles fazem muito bem</strong></h2>
        <ul>
          <li>reconhecem padrões</li>
          <li>mantêm coerência local</li>
          <li>resumem e reescrevem</li>
          <li>traduzem e classificam</li>
          <li>geram texto, código e explicações</li>
        </ul>

        <h2><strong>14. O que eles não fazem como humanos</strong></h2>
        <ul>
          <li>não possuem consciência</li>
          <li>não entendem o mundo exatamente como pessoas</li>
          <li>não têm memória biográfica própria</li>
          <li>não garantem verdade factual em toda resposta</li>
        </ul>

        <h2><strong>15. Por que acontecem alucinações?</strong></h2>
        <p>O modelo é treinado para gerar <strong>continuações plausíveis</strong>, não para garantir verdade absoluta. Se o contexto estiver fraco, ambíguo ou incompleto, ele pode produzir algo convincente e errado.</p>
        <div class="tip-box"><strong>Regra prática</strong>Quanto maior a exigência de precisão, mais importante é usar contexto confiável, validação externa, RAG, ferramentas e checagem humana.</div>

        <h2><strong>16. E multimodalidade?</strong></h2>
        <p>Modelos modernos também conseguem processar imagens, áudio, vídeo e documentos. O princípio é parecido: converter essas entradas em representações numéricas compatíveis com o modelo para que ele encontre padrões e responda sobre elas.</p>

        <h2><strong>17. Resumo em uma linha</strong></h2>
        <p>Um LLM é uma máquina gigantesca de padrões que <strong>transforma linguagem em números, usa atenção para interpretar contexto e gera resposta prevendo o próximo token</strong>.</p>`
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
