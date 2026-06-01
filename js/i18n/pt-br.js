window.i18nData = window.i18nData || {};

window.i18nData['pt-BR'] = {
  ui: {
    // Meta / General
    "title": "Foundation | Handbook de Estatística, Python e IA",
    "description": "Foundation é um handbook interativo em português sobre Estatística, Python e Inteligência Artificial, do básico ao avançado, com foco em clareza e aplicação prática.",
    // Sidebar
    "sidebar.tagline": "Enciclopédia · Terminus",
    "sidebar.nav.inicio": "Início",
    "sidebar.nav.estatistica": "Estatística",
    "sidebar.nav.python": "Python",
    "sidebar.nav.ia": "Inteligência Artificial",
    "sidebar.nav.sobre": "Sobre mim",
    "sidebar.quote": "«O conhecimento preservado hoje ilumina as eras de amanhã.»",
    "sidebar.credit": "Inspirado em Isaac Asimov",
    // Topbar
    "topbar.search_placeholder": "Consultar a enciclopédia...",
    // Hero
    "hero.badge": "Handbook Interativo · Seldon Archives",
    "hero.title": "Bem-vindo à",
    "hero.subtitle": "Como a <strong>Enciclopédia Galáctica</strong> de Asimov, este handbook preserva e organiza o conhecimento em Estatística, Python e Inteligência Artificial — do fundamental ao avançado, com a clareza de quem explica o complexo como se fosse simples.",
    "hero.epigraph": "Psicohistória dos dados: padrões no caos, previsões no ruído.",
    "hero.btn_primary": "Abrir os arquivos",
    "hero.btn_ghost": "O arquivista",
    // Stats row
    "stats.vol": "Volumes do conhecimento",
    "stats.ramos": "Ramos da IA",
    "stats.ciclos": "Ciclos de aprendizado",
    // Index section
    "index.title": "Índice da Enciclopédia",
    "index.stat.title": "Estatística",
    "index.stat.desc": "Probabilidade, distribuições, inferência e análise exploratória — com intuição antes da fórmula.",
    "index.stat.level": "Básico → Avançado",
    "index.py.title": "Python",
    "index.py.desc": "Sintaxe, estruturas de dados, NumPy, Pandas e boas práticas para ciência de dados.",
    "index.py.level": "Básico → Avançado",
    "index.ia.title": "Inteligência Artificial",
    "index.ia.desc": "Machine Learning, Deep Learning e IA Generativa — conceitos claros e exemplos práticos.",
    "index.ia.level": "ML · DL · GenAI",
    // Topic pages general
    "topic.tabs.basico": "Básico",
    "topic.tabs.intermediario": "Intermediário",
    "topic.tabs.avancado": "Avançado",
    // Estatística page
    "stat.page.title": "Estatística",
    "stat.page.desc": "Fundamentos quantitativos para decisões baseadas em dados.",
    // Python page
    "py.page.title": "Python",
    "py.page.desc": "A linguagem que conecta análise, automação e modelos de IA.",
    // IA page
    "ia.page.title": "Inteligência Artificial",
    "ia.page.desc": "Do aprendizado supervisionado aos modelos generativos de última geração.",
    "ia.subtabs.ml": "Machine Learning",
    "ia.subtabs.dl": "Deep Learning",
    "ia.subtabs.genai": "IA Generativa",
    // Empty state
    "empty_state": "Nenhum tópico neste nível ainda. Em breve!",
    // Sobre page
    "about.badge": "Arquivista da Foundation",
    "about.name": "Gabriel Prado",
    "about.role": "Cientista de Dados · Engenheiro de IA",
    "about.company.years": "5 anos",
    "about.company.at": "na",
    "about.bio": "Curador desta Foundation digital: compartilho o que aprendi em cinco anos na Dataside, transformando conceitos complexos de dados e IA em capítulos claros e progressivos — como entradas de uma enciclopédia feita para sobreviver às eras.",
    "about.certs.title": "Formação & Certificações",
    "about.certs.grad.badge": "Graduação",
    "about.certs.grad.title": "Tecnólogo",
    "about.certs.grad.desc": "Ciência de Dados",
    "about.certs.pos.badge": "Pós-graduação",
    "about.certs.pos.title": "Desenvolvimento de Aplicações",
    "about.certs.pos.desc": "de Inteligência Artificial Generativa",
    "about.skills.title": "Áreas de expertise",
    "about.skills.stat": "Estatística aplicada",
    "about.skills.py": "Python & Pandas",
    "about.skills.ml": "Machine Learning",
    "about.skills.dl": "Deep Learning",
    "about.skills.genai": "LLMs & GenAI",
    "about.skills.cloud": "Azure Cloud",
    "about.skills.mlops": "MLOps",
    "about.skills.viz": "Visualização de dados",
    // Footer
    "footer.text": "© 2026 <strong>Foundation</strong> — Handbook de Dados & IA · <em>Ad astra per data</em>"
  },
  content: {
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
          body: `<h1><strong>Variáveis e Tipos em Python</strong></h1>
          <p>Variáveis e tipos são os blocos de construção fundamentais de qualquer programa. Compreender como armazenar informações e como Python categoriza esses dados é o primeiro passo para dominar a linguagem.</p>

          <div class="level-tabs" role="tablist" style="margin-top: 1.5rem; margin-bottom: 1.5rem;">
            <button class="level-tab active" onclick="this.parentElement.querySelectorAll('.level-tab').forEach(t=>t.classList.remove('active')); this.classList.add('active'); const contents=this.parentElement.parentElement.querySelectorAll('.tab-content'); contents.forEach(c=>c.style.display='none'); this.parentElement.parentElement.querySelector('.tab-definicao').style.display='block';">Definição Simples</button>
            <button class="level-tab" onclick="this.parentElement.querySelectorAll('.level-tab').forEach(t=>t.classList.remove('active')); this.classList.add('active'); const contents=this.parentElement.parentElement.querySelectorAll('.tab-content'); contents.forEach(c=>c.style.display='none'); this.parentElement.parentElement.querySelector('.tab-cotidiano').style.display='block';">Linguagem Cotidiana</button>
            <button class="level-tab" onclick="this.parentElement.querySelectorAll('.level-tab').forEach(t=>t.classList.remove('active')); this.classList.add('active'); const contents=this.parentElement.parentElement.querySelectorAll('.tab-content'); contents.forEach(c=>c.style.display='none'); this.parentElement.parentElement.querySelector('.tab-analogia').style.display='block';">Analogia Real</button>
          </div>

          <div class="tab-content tab-definicao">
            <p><strong>Variáveis</strong> são "caixinhas" virtuais onde guardamos informações na memória do computador para usar depois em um programa.</p>
            <p><strong>Tipos</strong> são as categorias dessas informações, definindo o que podemos ou não fazer com elas.</p>
            <div class="tip-box">
              <strong>💡 Exemplo Intuitivo</strong>
              <ul>
                <li>Um nome é um texto (String).</li>
                <li>Uma idade é um número inteiro (Integer).</li>
                <li>Uma resposta de sim ou não é um valor lógico (Boolean).</li>
              </ul>
            </div>
          </div>

          <div class="tab-content tab-cotidiano" style="display:none;">
            <p>Imagine que você está organizando sua casa e possui gavetas específicas:</p>
            <ul>
              <li>Uma gaveta para roupas.</li>
              <li>Uma gaveta para documentos.</li>
              <li>Uma gaveta para eletrônicos.</li>
            </ul>
            <p>Cada gaveta guarda um tipo específico de objeto para que você os encontre e use corretamente. As variáveis no Python funcionam exatamente assim: elas possuem um <strong>nome</strong> (a etiqueta da gaveta) e um <strong>conteúdo</strong> (o que está guardado dentro).</p>
            <pre class="code-block">nome = "Gabriel"<br>idade = 30</pre>
            <p>Aqui, a gaveta <code>nome</code> guarda um texto e a gaveta <code>idade</code> guarda um número inteiro.</p>
          </div>

          <div class="tab-content tab-analogia" style="display:none;">
            <p>Pense em um armário organizador com etiquetas claras nas caixas:</p>
            <table class="content-table">
              <thead>
                <tr>
                  <th>Etiqueta (Variável)</th>
                  <th>Conteúdo (Valor)</th>
                  <th>Categoria (Tipo)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>nome</code></td>
                  <td>"Gabriel"</td>
                  <td>String (Texto)</td>
                </tr>
                <tr>
                  <td><code>idade</code></td>
                  <td>30</td>
                  <td>Integer (Inteiro)</td>
                </tr>
                <tr>
                  <td><code>cidade</code></td>
                  <td>"São Paulo"</td>
                  <td>String (Texto)</td>
                </tr>
              </tbody>
            </table>
            <p>As etiquetas são as variáveis; os conteúdos são os valores armazenados.</p>
          </div>

          <h2><strong>2. Por que isso existe? Qual problema resolve?</strong></h2>
          <p>Sem variáveis, precisaríamos repetir informações o tempo todo em nosso código. Imagine um sistema de cadastro sem variáveis:</p>
          <pre class="code-block">"Gabriel"<br>"Gabriel"<br>"Gabriel"<br>"Gabriel"</pre>
          <p>Toda vez que o nome do usuário fosse exibido ou verificado, você teria que escrevê-lo manualmente. Com variáveis, criamos um ponto centralizado:</p>
          <pre class="code-block">nome = "Gabriel"<br>print(nome)  # Reutilize quantas vezes quiser!</pre>
          
          <div class="tip-box">
            <strong>⚠️ O que aconteceria sem elas?</strong>
            <p>Os programas seriam gigantescos, extremamente difíceis de manter e atualizar (se o nome mudasse, teríamos que procurar em centenas de linhas de código), muito lentos de desenvolver e altamente propensos a erros de digitação.</p>
          </div>

          <h2><strong>3. Como funciona na prática?</strong></h2>
          <p>O ciclo de vida de uma variável segue cinco passos lógicos essenciais:</p>
          <ol>
            <li><strong>Criar a variável:</strong> Definimos um nome válido (ex: <code>nome = "Gabriel"</code>).</li>
            <li><strong>Armazenar um valor:</strong> O sinal de igual (<code>=</code>) é o operador de atribuição que joga o valor para dentro da variável.</li>
            <li><strong>Utilizar o valor:</strong> Chamamos a variável pelo nome (ex: <code>print(nome)</code> resulta em <code>Gabriel</code>).</li>
            <li><strong>Alterar o valor:</strong> Se atribuirmos um novo valor (ex: <code>idade = 20</code> e depois <code>idade = 21</code>), o valor antigo é substituído na memória.</li>
            <li><strong>Utilizar em cálculos:</strong> Podemos atualizar uma variável baseando-se no seu valor anterior (ex: <code>idade = idade + 1</code>).</li>
          </ol>

          <h2><strong>Principais Tipos em Python</strong></h2>
          <p>Python possui vários tipos de dados embutidos. Veja os mais importantes:</p>

          <div class="llm-summary-grid">
            <div class="llm-summary-card" style="border-left: 3px solid var(--cyan);">
              <span class="llm-summary-kicker">str (String)</span>
              <p>Representa textos de qualquer tamanho. Deve estar sempre entre aspas.</p>
              <code>nome = "Gabriel"</code>
            </div>
            <div class="llm-summary-card" style="border-left: 3px solid var(--blue);">
              <span class="llm-summary-kicker">int (Integer)</span>
              <p>Números inteiros, sem nenhuma casa decimal ou vírgula.</p>
              <code>idade = 30</code>
            </div>
            <div class="llm-summary-card" style="border-left: 3px solid var(--violet);">
              <span class="llm-summary-kicker">float (Decimal)</span>
              <p>Números com casas decimais (usa-se ponto em vez de vírgula).</p>
              <code>altura = 1.75</code>
            </div>
            <div class="llm-summary-card" style="border-left: 3px solid var(--green);">
              <span class="llm-summary-kicker">bool (Boolean)</span>
              <p>Valores lógicos de sim ou não: apenas <code>True</code> ou <code>False</code>.</p>
              <code>ativo = True</code>
            </div>
          </div>

          <div class="tip-box">
            <strong>📦 E as coleções? Exemplo: List (Lista)</strong>
            <p>Uma lista guarda vários valores em uma única variável, ordenados e separados por vírgula dentro de colchetes: <code>frutas = ["Maçã", "Banana", "Laranja"]</code>. É como uma caixa com vários compartimentos catalogados!</p>
          </div>

          <h2><strong>4. Exemplo Prático de Aplicação</strong></h2>
          <p>Imagine que você está criando um <strong>sistema de cadastro de alunos para uma academia</strong>. Precisamos guardar dados consistentes para cada aluno:</p>
          <pre class="code-block"># Declaração dos dados do aluno<br>nome = "Gabriel"<br>idade = 30<br>peso = 82.5<br>matricula_ativa = True</pre>
          <p>Com essas variáveis estruturadas, o sistema pode facilmente exibir um painel personalizado, calcular faixas etárias, gerar relatórios de faturamento e filtrar quem está ativo na academia.</p>

          <h2><strong>5. Visualização Mental e Memória</strong></h2>
          <p>Visualize a memória do seu computador rodando Python como uma grande estante cheia de gavetas com etiquetas magnéticas:</p>
          <pre class="code-block" style="color: var(--cyan); font-family: var(--mono); line-height: 1.2;">
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ nome        │   │ idade       │   │ ativo       │
├─────────────┤   ├─────────────┤   ├─────────────┤
│ Gabriel     │   │ 30          │   │ True        │
└─────────────┘   └─────────────┘   └─────────────┘</pre>
          <p>Quando seu script diz <code>print(nome)</code>, o interpretador Python vai até a gaveta com a etiqueta <code>nome</code>, puxa a gaveta, pega o conteúdo <code>"Gabriel"</code> e o imprime na tela.</p>
          <div class="tip-box" style="border-left-color: var(--violet);">
            <strong>🤔 Pergunta para Reflexão:</strong>
            <p>Se o nome de um cliente mudar em um cadastro, o que é mais fácil: alterar o valor de uma única variável no topo do código ou procurar e substituir o texto do nome em centenas de linhas separadas do sistema?</p>
          </div>

          <h2><strong>6. Comparação Direta com o Mundo Real</strong></h2>
          <table class="content-table">
            <thead>
              <tr>
                <th>Conceito em Python</th>
                <th>Equivalente na Vida Real</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Variável</strong></td>
                <td>Caixa etiquetada onde guardamos um objeto.</td>
              </tr>
              <tr>
                <td><strong>Valor</strong></td>
                <td>O objeto físico guardado dentro da caixa.</td>
              </tr>
              <tr>
                <td><strong>String (Texto)</strong></td>
                <td>Um papel com um texto escrito à mão.</td>
              </tr>
              <tr>
                <td><strong>Integer (Inteiro)</strong></td>
                <td>A contagem exata de maçãs em uma cesta.</td>
              </tr>
              <tr>
                <td><strong>Float (Decimal)</strong></td>
                <td>O peso medido em uma balança de precisão (ex: 82.5 kg).</td>
              </tr>
              <tr>
                <td><strong>Boolean</strong></td>
                <td>Um interruptor de luz (ligado/desligado ou sim/não).</td>
              </tr>
              <tr>
                <td><strong>List (Lista)</strong></td>
                <td>Uma caixa organizadora com várias divisórias internas.</td>
              </tr>
            </tbody>
          </table>

          <h2><strong>7. Erros Mais Comuns e Como Evitá-los</strong></h2>
          
          <div class="accordion-list">
            <div class="accordion-item" style="border: 1px solid var(--border);">
              <div class="accordion-header" onclick="this.parentElement.classList.toggle('open');" style="font-size: 0.9rem; padding: 0.75rem 1rem;">
                <span>❌ Erro 1: Esquecer aspas em textos (Strings)</span>
                <span style="font-size: 0.8rem; color: var(--text-dim);">Clique para expandir</span>
              </div>
              <div class="accordion-body" style="max-height: 500px; padding: 0 1rem 1rem; color: var(--text-muted); font-size: 0.85rem;">
                <p style="color: #ef4444; margin-top: 0.5rem;"><strong>Errado:</strong> <code>nome = Gabriel</code></p>
                <p style="color: var(--green);"><strong>Correto:</strong> <code>nome = "Gabriel"</code></p>
                <p><strong>Por que acontece?</strong> Sem aspas, o Python acha que <code>Gabriel</code> é o nome de outra variável que deveria ter sido criada antes. Se não encontrar, gera um erro de nome (<code>NameError</code>).</p>
              </div>
            </div>

            <div class="accordion-item" style="border: 1px solid var(--border);">
              <div class="accordion-header" onclick="this.parentElement.classList.toggle('open');" style="font-size: 0.9rem; padding: 0.75rem 1rem;">
                <span>❌ Erro 2: Misturar texto e número na concatenação</span>
                <span style="font-size: 0.8rem; color: var(--text-dim);">Clique para expandir</span>
              </div>
              <div class="accordion-body" style="max-height: 500px; padding: 0 1rem 1rem; color: var(--text-muted); font-size: 0.85rem;">
                <p style="color: #ef4444; margin-top: 0.5rem;"><strong>Errado:</strong> <code>print("Idade: " + idade)</code> (causa <code>TypeError</code> se a idade for número)</p>
                <p style="color: var(--green);"><strong>Correto:</strong> <code>print("Idade:", idade)</code> ou usando f-strings: <code>print(f"Idade: {idade}")</code></p>
                <p><strong>Por que acontece?</strong> Python é uma linguagem com tipagem forte; ela não permite somar (concatenar) texto com número diretamente sem converter antes.</p>
              </div>
            </div>

            <div class="accordion-item" style="border: 1px solid var(--border);">
              <div class="accordion-header" onclick="this.parentElement.classList.toggle('open');" style="font-size: 0.9rem; padding: 0.75rem 1rem;">
                <span>❌ Erro 3: Nomes de variáveis ruins ou confusos</span>
                <span style="font-size: 0.8rem; color: var(--text-dim);">Clique para expandir</span>
              </div>
              <div class="accordion-body" style="max-height: 500px; padding: 0 1rem 1rem; color: var(--text-muted); font-size: 0.85rem;">
                <p style="color: #ef4444; margin-top: 0.5rem;"><strong>Ruim:</strong> <code>a = "Gabriel"</code> ou <code>x1 = 30</code></p>
                <p style="color: var(--green);"><strong>Excelente:</strong> <code>nome_cliente = "Gabriel"</code> ou <code>idade_aluno = 30</code></p>
                <p><strong>Dica de ouro:</strong> Use nomes autoexplicativos em minúsculas separados por underline (padrão snake_case no Python) para que qualquer pessoa consiga entender seu código de primeira.</p>
              </div>
            </div>
          </div>

          <div class="stat-demo" data-demo="py-variables-playground"></div>

          <h2><strong>8. Resumo</strong></h2>
          <div class="tip-box">
            <ul>
              <li><strong>Variável</strong> = nome que aponta para um valor na memória.</li>
              <li><strong>Tipo</strong> = categoria do valor (<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>, <code>NoneType</code>).</li>
              <li>Python infere o tipo automaticamente — sem necessidade de declarar.</li>
              <li>Use <code>type()</code> para inspecionar o tipo de qualquer valor.</li>
              <li>Use nomes descritivos em <code>snake_case</code>: <code>nome_cliente</code>, <code>total_vendas</code>.</li>
              <li>Variáveis em Python são referências a objetos — atribuir não copia o valor, aponta para ele.</li>
            </ul>
          </div>`

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
            body: `<h1><strong>O que é IA Generativa?</strong></h1>
          <p>De forma simples, a <strong>Inteligência Artificial Generativa (GenAI)</strong> é uma vertente da IA focada em <strong>criar novos conteúdos originais</strong>, em vez de apenas analisar, classificar ou filtrar dados já existentes.</p>
          <p>Ela é capaz de gerar textos, imagens, músicas, códigos de programação, áudios e vídeos inéditos que se assemelham a criações humanas.</p>
  
          <div class="tip-box">
            <strong>💡 A Grande Diferença: Analisar vs. Criar</strong>
            <p>Enquanto a IA tradicional atua como um <strong>detetive ou classificador</strong> (ex.: identificar se há um gato em uma foto ou prever se o preço de uma ação vai subir), a IA Generativa atua como um <strong>artista ou escritor</strong> (ex.: desenhar um gato astronauta do zero ou escrever um poema inédito).</p>
          </div>
  
          <h2><strong>A Analogia do "Chef de Cozinha"</strong></h2>
          <p>Para entender como a IA Generativa cria coisas inéditas sem simplesmente "copiar e colar" da internet, imagine um <strong>Chef de Cozinha com memória fotográfica</strong>:</p>
          <ul>
            <li>Ele nunca comeu uma feijoada, mas leu 10.000 receitas diferentes de feijoada e analisou fotos de pratos dos melhores restaurantes.</li>
            <li>Com isso, ele não memorizou uma única receita específica. Ele aprendeu os <strong>padrões profundos</strong> da feijoada: sabe quais ingredientes combinam, a proporção ideal de sal, o tempo médio de cozimento e quais acompanhamentos fazem sentido.</li>
            <li>Quando você pede a ele <em>"crie uma feijoada inédita com um toque contemporâneo"</em>, ele combina todos esses padrões aprendidos para criar um prato <strong>completamente novo</strong>.</li>
          </ul>
          <p>A IA Generativa faz a mesma coisa: ela analisa bilhões de exemplos de textos, imagens ou códigos criados por humanos para compreender suas estruturas e regras, permitindo que crie novos conteúdos sob demanda.</p>
  
          <h2><strong>Principais Exemplos e Aplicações no Dia a Dia</strong></h2>
          <div class="llm-summary-grid">
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">✍️ Geração de Texto</span>
              <p>Responder dúvidas complexas, escrever e-mails profissionais, resumir artigos, criar roteiros ou traduzir idiomas respeitando o contexto. Exemplo: <strong>ChatGPT, Claude, Gemini</strong>.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">🎨 Geração de Imagens</span>
              <p>Criar ilustrações digitais, designs de produtos ou fotos ultrarrealistas a partir de descrições textuais (prompts). Exemplo: <strong>Midjourney, DALL-E 3, Stable Diffusion</strong>.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">💻 Escrita de Código</span>
              <p>Ajudar programadores escrevendo trechos de código inteiros, identificando erros de sintaxe ou explicando o funcionamento de sistemas complexos. Exemplo: <strong>GitHub Copilot</strong>.</p>
            </div>
          </div>
  
          <h2><strong>Como ela consegue parecer tão "criativa"?</strong></h2>
          <p>A base da IA Generativa moderna são os modelos de Deep Learning (como redes neurais Transformer). O processo funciona assim:</p>
          <ol>
            <li><strong>Treinamento Massivo:</strong> O modelo "lê" volumes monumentais de dados públicos (livros, artigos, códigos, imagens).</li>
            <li><strong>Cálculo de Probabilidades:</strong> Ao gerar texto, por exemplo, o modelo não está "pensando" como nós. Ele analisa o que você escreveu e calcula, palavra por palavra, qual é o próximo termo estatisticamente mais provável de continuar a sua ideia com coerência.</li>
            <li><strong>Refinamento Humano:</strong> Para evitar respostas perigosas ou sem sentido, especialistas humanos guiam o modelo ensinando o que são respostas úteis, seguras e educadas.</li>
          </ol>
  
          <div class="tip-box">
            <strong>⚠️ Importante: O Estagiário Brilhante (e Confiante)</strong>
            <p>Trate a IA Generativa como um <strong>estagiário incrivelmente inteligente e rápido, mas que às vezes é excessivamente confiante</strong>. Como ela trabalha prevendo o que parece mais plausível e coerente (e não necessariamente o que é a verdade factual absoluta), ela pode inventar fatos, referências ou dados com total convicção. Esse fenômeno é chamado de <strong>alucinação</strong>. Sempre revise informações importantes!</p>
          </div>`
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
          <p>Isso gera a sensação de entendimento profundo, mesmo que o mecanismo interno continue sendo estatístico.</p>
  
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
  }
};
