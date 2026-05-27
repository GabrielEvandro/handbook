window.i18nData = window.i18nData || {};

window.i18nData['en'] = {
  ui: {
    // Meta / General
    "title": "Foundation | Statistics, Python & AI Handbook",
    "description": "Foundation is an interactive handbook on Statistics, Python, and Artificial Intelligence, from basic to advanced, focusing on clarity and practical application.",
    // Sidebar
    "sidebar.tagline": "Encyclopedia · Terminus",
    "sidebar.nav.inicio": "Home",
    "sidebar.nav.estatistica": "Statistics",
    "sidebar.nav.python": "Python",
    "sidebar.nav.ia": "Artificial Intelligence",
    "sidebar.nav.sobre": "About me",
    "sidebar.quote": "«The knowledge preserved today illuminates the eras of tomorrow.»",
    "sidebar.credit": "Inspired by Isaac Asimov",
    // Topbar
    "topbar.search_placeholder": "Search the encyclopedia...",
    // Hero
    "hero.badge": "Interactive Handbook · Seldon Archives",
    "hero.title": "Welcome to",
    "hero.subtitle": "Like Asimov's <strong>Encyclopedia Galactica</strong>, this handbook preserves and organizes knowledge in Statistics, Python, and Artificial Intelligence — from fundamentals to advanced, with the clarity of someone explaining the complex as if it were simple.",
    "hero.epigraph": "Psychohistory of data: patterns in chaos, forecasts in noise.",
    "hero.btn_primary": "Open the archives",
    "hero.btn_ghost": "The archivist",
    // Stats row
    "stats.vol": "Volumes of knowledge",
    "stats.ramos": "Branches of AI",
    "stats.ciclos": "Learning cycles",
    // Index section
    "index.title": "Encyclopedia Index",
    "index.stat.title": "Statistics",
    "index.stat.desc": "Probability, distributions, inference, and exploratory analysis — with intuition before the formula.",
    "index.stat.level": "Basic → Advanced",
    "index.py.title": "Python",
    "index.py.desc": "Syntax, data structures, NumPy, Pandas, and best practices for data science.",
    "index.py.level": "Basic → Advanced",
    "index.ia.title": "Artificial Intelligence",
    "index.ia.desc": "Machine Learning, Deep Learning, and Generative AI — clear concepts and practical examples.",
    "index.ia.level": "ML · DL · GenAI",
    // Topic pages general
    "topic.tabs.basico": "Basic",
    "topic.tabs.intermediario": "Intermediate",
    "topic.tabs.avancado": "Advanced",
    // Estatística page
    "stat.page.title": "Statistics",
    "stat.page.desc": "Quantitative foundations for data-driven decisions.",
    // Python page
    "py.page.title": "Python",
    "py.page.desc": "The language that connects analysis, automation, and AI models.",
    // IA page
    "ia.page.title": "Artificial Intelligence",
    "ia.page.desc": "From supervised learning to state-of-the-art generative models.",
    "ia.subtabs.ml": "Machine Learning",
    "ia.subtabs.dl": "Deep Learning",
    "ia.subtabs.genai": "Generative AI",
    // Empty state
    "empty_state": "No topics in this level yet. Coming soon!",
    // Sobre page
    "about.badge": "Archivist of the Foundation",
    "about.name": "Gabriel Prado",
    "about.role": "Data Scientist · AI Engineer",
    "about.company.years": "5 years",
    "about.company.at": "at",
    "about.bio": "Curator of this digital Foundation: I share what I've learned in five years at Dataside, transforming complex concepts of data and AI into clear and progressive chapters — like entries of an encyclopedia meant to survive the eras.",
    "about.certs.title": "Education & Certifications",
    "about.certs.grad.badge": "Undergraduate",
    "about.certs.grad.title": "Technologist",
    "about.certs.grad.desc": "Data Science",
    "about.certs.pos.badge": "Postgraduate",
    "about.certs.pos.title": "Application Development",
    "about.certs.pos.desc": "of Generative Artificial Intelligence",
    "about.skills.title": "Areas of expertise",
    "about.skills.stat": "Applied Statistics",
    "about.skills.py": "Python & Pandas",
    "about.skills.ml": "Machine Learning",
    "about.skills.dl": "Deep Learning",
    "about.skills.genai": "LLMs & GenAI",
    "about.skills.cloud": "Azure Cloud",
    "about.skills.mlops": "MLOps",
    "about.skills.viz": "Data Visualization",
    // Footer
    "footer.text": "© 2026 <strong>Foundation</strong> — Data & AI Handbook · <em>Ad astra per data</em>"
  },
  content: {
    estatistica: {
      basico: [
        {
          title: 'What is Statistics?',
          body: `<p>Statistics is the science of <strong>collecting, organizing, analyzing, and interpreting data</strong> to make decisions with less uncertainty.</p>
          <p>Think of it as a GPS for decisions: data shows where you are; statistics helps predict where you can go.</p>
          <div class="tip-box"><strong>💡 Intuition</strong> Before any formula, ask: "What do I want to discover with this data?"</div>`
        },
        {
          title: 'Arithmetic Mean',
          body: `<p>The <strong>mean</strong> answers: "if we divide the total equally, how much would each get?" You add all values and divide by the quantity.</p>
          <p>Imagine the salary of 4 colleagues: $10k, $12k, $14k, and $18k. The mean is $13.5k — the "center of gravity" of the group. But if a CEO earns $100k in the same calculation, the mean shoots up to $34k, even though most earn much less.</p>
          <p>This is why the mean is <strong>sensitive to outliers</strong> (values very far from the rest).</p>
          <div class="stat-demo" data-demo="media"></div>
          <div class="tip-box"><strong>When to use</strong> Symmetrical data, without absurd extremes — e.g., height of a class, average temperature of the week.</div>`
        },
        {
          title: 'Median',
          body: `<p>The <strong>median</strong> is the value that falls in the middle after sorting the data. Half is below, half is above — it's the "center" that doesn't care how exaggerated the highest value is.</p>
          <p>In the example [10, 12, 14, 100]: sorting, the center is between 12 and 14 → median = <strong>13</strong>. The 100 barely affected it. While the mean would be 34.</p>
          <p>With an <strong>odd</strong> quantity, we take the middle value. With an <strong>even</strong> quantity, we take the mean of the two central ones.</p>
          <div class="stat-demo" data-demo="mediana"></div>
          <div class="tip-box"><strong>When to use</strong> Salaries, real estate prices, evaluations — distributions with outliers or asymmetry.</div>`
        },
        {
          title: 'Mode',
          body: `<p>The <strong>mode</strong> is the value that appears most often in the set — the "frequency champion". It doesn't require addition: just counting repetitions.</p>
          <p>In a test, if the grades 7, 7, 7, 8, 9 appear, the mode is <strong>7</strong>. In a favorite color survey, the mode is the most voted color (categorical data).</p>
          <p>There can be <strong>more than one mode</strong> (bimodal) or <strong>none</strong>, if all values repeat equally.</p>
          <div class="stat-demo" data-demo="moda"></div>
          <div class="tip-box"><strong>When to use</strong> Mode of sales, most requested size, most common category — especially in nominal or discrete data.</div>`
        },
        {
          title: 'Variability: Standard Deviation',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        }
      ],
      intermediario: [
        {
          title: 'Normal Distribution',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'Correlation vs Causation',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 't-Test and p-value',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        }
      ],
      avancado: [
        {
          title: 'Multiple Linear Regression',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'ANOVA',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'Bayesian — Introduction',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        }
      ]
    },
    python: {
      basico: [
        {
          title: 'Why Python for Data?',
          body: `<p>Python is readable, has a giant ecosystem (Pandas, NumPy, scikit-learn), and is the standard language in data science and AI.</p>`
        },
        {
          title: 'Variables and Types',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'Control Structures',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'Functions',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        }
      ],
      intermediario: [
        {
          title: 'List Comprehensions',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'NumPy — Vectorized Arrays',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'Pandas — DataFrames',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        }
      ],
      avancado: [
        {
          title: 'OOP for Pipelines',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'Decorators and Context Managers',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        },
        {
          title: 'Performance: Numba and Polars',
          body: `<p>UNDER CONSTRUCTION 🚧</p>`
        }
      ]
    },
    ia: {
      ml: {
        basico: [
          {
            title: 'What is Machine Learning?',
            body: `<p>ML is the branch of AI where algorithms <strong>learn patterns from data</strong> without being explicitly programmed for each rule.</p>
          <p>Three paradigms: supervised (labels), unsupervised (no labels), and reinforcement (rewards).</p>`
          },
          {
            title: 'Overfitting vs Underfitting',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Logistic Regression',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ],
        intermediario: [
          {
            title: 'Random Forest',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Metrics: Precision, Recall, F1',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'k-Fold Cross Validation',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ],
        avancado: [
          {
            title: 'Gradient Boosting (XGBoost, LightGBM)',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'SHAP — Interpretability',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ]
      },
      dl: {
        basico: [
          {
            title: 'Neural Networks — Concept',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Activation Functions',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Loss Functions',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ],
        intermediario: [
          {
            title: 'CNNs for Images',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Dropout and Batch Normalization',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Transfer Learning',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ],
        avancado: [
          {
            title: 'Transformers — Architecture',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Fine-tuning and LoRA',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ]
      },
      genai: {
        basico: [
          {
            title: 'What is Generative AI?',
            body: `<h1><strong>What is Generative AI?</strong></h1>
          <p>Simply put, <strong>Generative Artificial Intelligence (GenAI)</strong> is a branch of AI focused on <strong>creating new, original content</strong>, rather than just analyzing, classifying, or filtering existing data.</p>
          <p>It is capable of generating unprecedented texts, images, music, programming codes, audio, and videos that resemble human creations.</p>
  
          <div class="tip-box">
            <strong>💡 The Big Difference: Analyzing vs. Creating</strong>
            <p>While traditional AI acts as a <strong>detective or classifier</strong> (e.g., identifying if there is a cat in a photo or predicting if a stock price will rise), Generative AI acts as an <strong>artist or writer</strong> (e.g., drawing an astronaut cat from scratch or writing an unpublished poem).</p>
          </div>
  
          <h2><strong>The "Chef" Analogy</strong></h2>
          <p>To understand how Generative AI creates novel things without simply "copying and pasting" from the internet, imagine a <strong>Chef with a photographic memory</strong>:</p>
          <ul>
            <li>They have never eaten a feijoada, but have read 10,000 different feijoada recipes and analyzed photos of dishes from the best restaurants.</li>
            <li>With this, they haven't memorized a single specific recipe. They learned the <strong>deep patterns</strong> of feijoada: knowing which ingredients combine, the ideal salt ratio, the average cooking time, and which side dishes make sense.</li>
            <li>When you ask them <em>"create an unprecedented feijoada with a contemporary touch"</em>, they combine all these learned patterns to create a <strong>completely new</strong> dish.</li>
          </ul>
          <p>Generative AI does the same thing: it analyzes billions of examples of texts, images, or codes created by humans to understand their structures and rules, allowing it to create new content on demand.</p>
  
          <h2><strong>Main Examples and Everyday Applications</strong></h2>
          <div class="llm-summary-grid">
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">✍️ Text Generation</span>
              <p>Answering complex questions, writing professional emails, summarizing articles, creating scripts, or translating languages while respecting the context. Example: <strong>ChatGPT, Claude, Gemini</strong>.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">🎨 Image Generation</span>
              <p>Creating digital illustrations, product designs, or ultra-realistic photos from textual descriptions (prompts). Example: <strong>Midjourney, DALL-E 3, Stable Diffusion</strong>.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">💻 Code Writing</span>
              <p>Helping programmers by writing entire code snippets, identifying syntax errors, or explaining how complex systems work. Example: <strong>GitHub Copilot</strong>.</p>
            </div>
          </div>
  
          <h2><strong>How can it seem so "creative"?</strong></h2>
          <p>The foundation of modern Generative AI is Deep Learning models (like Transformer neural networks). The process works like this:</p>
          <ol>
            <li><strong>Massive Training:</strong> The model "reads" monumental volumes of public data (books, articles, codes, images).</li>
            <li><strong>Probability Calculation:</strong> When generating text, for example, the model isn't "thinking" like us. It analyzes what you wrote and calculates, word by word, what is statistically the most likely next term to logically continue your idea.</li>
            <li><strong>Human Refinement:</strong> To avoid dangerous or nonsensical answers, human experts guide the model, teaching it what constitutes useful, safe, and polite responses.</li>
          </ol>
  
          <div class="tip-box">
            <strong>⚠️ Important: The Brilliant (and Overconfident) Intern</strong>
            <p>Treat Generative AI like an <strong>incredibly smart and fast intern, but one who is sometimes overly confident</strong>. Because it works by predicting what seems most plausible and coherent (and not necessarily what is the absolute factual truth), it can invent facts, references, or data with total conviction. This phenomenon is called <strong>hallucination</strong>. Always verify important information!</p>
          </div>`
          },
          {
            title: 'How LLMs work',
            body: `<h1><strong>How LLMs Work</strong></h1>
          <p>LLM stands for <strong>Large Language Model</strong>. In practice, it's an AI trained to transform language into math and, from that, <strong>predict what token comes next</strong>.</p>
          <div class="llm-summary-grid">
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">Core idea</span>
              <p>Read context, calculate probabilities, and generate the next part of the answer.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">Raw material</span>
              <p>Billions of tokens from books, articles, code, dialogues, and documents.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">Structure</span>
              <p>Neural networks of the <strong>Transformer</strong> type, with an attention mechanism.</p>
            </div>
          </div>
  
          <h2><strong>1. The main idea: predict the next token</strong></h2>
          <p>When you type <code>"The sky is..."</code>, the model doesn't look for a memorized sentence. It compares this context with patterns it learned and calculates something like:</p>
          <ul>
            <li><strong>blue</strong> → high probability</li>
            <li>beautiful → medium probability</li>
            <li>infinite → lower probability</li>
          </ul>
          <p>Then it chooses a candidate and repeats the process. The answer is born <strong>token by token</strong>.</p>
  
          <div class="llm-demo" data-demo="llm-next-token"></div>
  
          <h2><strong>2. What is a token?</strong></h2>
          <p>LLMs don't see words exactly like we do. They break text into smaller pieces called <strong>tokens</strong>. A token can be a whole word, a piece of a word, punctuation, or even a space.</p>
          <p>Example:</p>
          <pre class="code-block">"Artificial Intelligence" → ["Artific", "ial", " Intelligence"]</pre>
          <p>It's with tokens that the model reads, thinks mathematically, and answers.</p>
  
          <div class="llm-demo" data-demo="llm-tokenizer"></div>
  
          <h2><strong>3. How does the model learn?</strong></h2>
          <p>The main training is called <strong>pre-training</strong>. The exercise is simple to describe and huge to execute:</p>
          <div class="tip-box"><strong>Training objective</strong>Try to predict the next token millions and billions of times, adjusting internal weights whenever it makes a mistake.</div>
          <p>After repeating this on a massive scale, the model learns:</p>
          <ul>
            <li>grammar and style</li>
            <li>relationships between concepts</li>
            <li>text and code structure</li>
            <li>question and answer patterns</li>
            <li>regularities that look like textual reasoning</li>
          </ul>
  
          <h2><strong>4. Where is this learning stored?</strong></h2>
          <p>It's spread out in <strong>parameters</strong>, which are adjustable numbers inside the neural network. Think of them as mathematical knobs that define the model's behavior.</p>
          <table class="content-table">
            <thead>
              <tr>
                <th>Scale</th>
                <th>Order of magnitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>millions of parameters</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>billions of parameters</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>tens or hundreds of billions</td>
              </tr>
            </tbody>
          </table>
          <p>More parameters generally mean <strong>more capacity to represent nuances</strong>, but also more computational cost.</p>
  
          <h2><strong>5. Embeddings: how words become numbers</strong></h2>
          <p>Before reasoning about text, the model converts tokens into numerical vectors called <strong>embeddings</strong>. In this representation, similar terms tend to be close.</p>
          <p>This is why the model can capture relationships like:</p>
          <ul>
            <li><code>king</code> close to <code>queen</code></li>
            <li><code>cat</code> close to <code>dog</code></li>
            <li><code>Python</code> close to <code>code</code></li>
          </ul>
  
          <div class="llm-demo" data-demo="llm-embeddings"></div>
  
          <h2><strong>6. What makes modern LLMs so powerful?</strong></h2>
          <p>The leap came with the <strong>Transformer</strong> architecture, introduced by Google in 2017 in the paper <em>Attention Is All You Need</em>. The central point of it is the <strong>attention</strong> mechanism.</p>
  
          <h2><strong>7. What is attention?</strong></h2>
          <p>Attention allows the model to measure <strong>which parts of the context matter most for understanding each token</strong>.</p>
          <p>In the sentence <code>"John put the book in the backpack because it was heavy."</code>, the model needs to infer what <code>it</code> refers to. Attention helps connect pronouns, subjects, objects, and semantic relationships.</p>
          <p>A good analogy is imagining a reader with a highlighter: they highlight relevant parts of the text before continuing.</p>
  
          <div class="llm-demo" data-demo="llm-attention"></div>
  
          <h2><strong>8. How the answer is generated</strong></h2>
          <ol>
            <li>Your text enters the prompt.</li>
            <li>The text is broken into tokens.</li>
            <li>Each token becomes an embedding.</li>
            <li>The Transformer calculates attention between the tokens.</li>
            <li>The model produces probabilities for the next token.</li>
            <li>A token is chosen.</li>
            <li>This token goes back into the sequence and the cycle repeats.</li>
          </ol>
          <p>All of this happens very fast, multiple times per second.</p>
  
          <h2><strong>9. Does the model "remember" the conversation?</strong></h2>
          <p>Not like humans do. What it does is receive a context block with the recent conversation, instructions, and attached documents. This block fits inside a <strong>context window</strong>.</p>
          <p>When the window fills up, the system must summarize, cut, or discard older parts.</p>
  
          <div class="llm-demo" data-demo="llm-context"></div>
  
          <h2><strong>10. What is temperature?</strong></h2>
          <p><strong>Temperature</strong> controls how conservative or creative the choice of the next token will be.</p>
          <ul>
            <li>low temperature → more predictable answers</li>
            <li>high temperature → more varied answers</li>
          </ul>
          <p>It doesn't change the model's knowledge. It changes <strong>how the model chooses among possibilities</strong>.</p>
  
          <div class="llm-demo" data-demo="llm-temperature"></div>
  
          <h2><strong>11. Pre-training is not the end</strong></h2>
          <p>After pre-training, many models go through additional steps:</p>
          <ul>
            <li><strong>instruction tuning</strong>: learning to follow instructions</li>
            <li><strong>alignment</strong>: reducing dangerous or useless answers</li>
            <li><strong>RLHF or similar techniques</strong>: adjusting answers based on human preferences</li>
            <li><strong>fine-tuning</strong>: specializing the model in a domain</li>
          </ul>
          <p>This is what helps a raw LLM become a useful conversational assistant.</p>
  
          <h2><strong>12. Why do they seem intelligent?</strong></h2>
          <p>Because human language carries a lot of knowledge. By learning language patterns, the model ends up absorbing relationships about science, history, math, programming, and textual behavior.</p>
          <p>This generates the feeling of deep understanding, even if the internal mechanism continues to be essentially statistical.</p>
  
          <h2><strong>13. What they do very well</strong></h2>
          <ul>
            <li>recognize patterns</li>
            <li>maintain local coherence</li>
            <li>summarize and rewrite</li>
            <li>translate and classify</li>
            <li>generate text, code, and explanations</li>
          </ul>
  
          <h2><strong>14. What they do NOT do like humans</strong></h2>
          <ul>
            <li>do not possess consciousness</li>
            <li>do not understand the world exactly like people</li>
            <li>do not have their own biographical memory</li>
            <li>do not guarantee factual truth in every answer</li>
          </ul>
  
          <h2><strong>15. Why do hallucinations happen?</strong></h2>
          <p>The model is trained to generate <strong>plausible continuations</strong>, not to guarantee absolute truth. If the context is weak, ambiguous, or incomplete, it can produce something convincing and wrong.</p>
          <div class="tip-box"><strong>Rule of thumb</strong>The greater the demand for accuracy, the more important it is to use reliable context, external validation, RAG, tools, and human checking.</div>
  
          <h2><strong>16. What about multimodality?</strong></h2>
          <p>Modern models can also process images, audio, video, and documents. The principle is similar: convert these inputs into numerical representations compatible with the model so it can find patterns and answer about them.</p>
  
          <h2><strong>17. Summary in one line</strong></h2>
          <p>An LLM is a giant pattern machine that <strong>transforms language into numbers, uses attention to interpret context, and generates an answer by predicting the next token</strong>.</p>`
          },
          {
            title: 'Tokens and Context Window',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Basic Prompt Engineering',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ],
        intermediario: [
          {
            title: 'RAG — Retrieval Augmented Generation',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Embeddings and Similarity',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Azure OpenAI — Overview',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ],
        avancado: [
          {
            title: 'Agents and Tool Use',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Fine-tuning of LLMs',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          },
          {
            title: 'Security and Responsible AI',
            body: `<p>UNDER CONSTRUCTION 🚧</p>`
          }
        ]
      }
    }
  }
};
