window.i18nData = window.i18nData || {};

window.i18nData['es'] = {
  ui: {
    // Meta / General
    "title": "Foundation | Handbook de Estadística, Python e IA",
    "description": "Foundation es un handbook interactivo sobre Estadística, Python e Inteligencia Artificial, desde lo básico hasta lo avanzado, centrado en la claridad y la aplicación práctica.",
    // Sidebar
    "sidebar.tagline": "Enciclopedia · Terminus",
    "sidebar.nav.inicio": "Inicio",
    "sidebar.nav.estatistica": "Estadística",
    "sidebar.nav.python": "Python",
    "sidebar.nav.ia": "Inteligencia Artificial",
    "sidebar.nav.sobre": "Sobre mí",
    "sidebar.quote": "«El conocimiento preservado hoy ilumina las eras del mañana.»",
    "sidebar.credit": "Inspirado en Isaac Asimov",
    // Topbar
    "topbar.search_placeholder": "Consultar la enciclopedia...",
    // Hero
    "hero.badge": "Handbook Interactivo · Seldon Archives",
    "hero.title": "Bienvenido a",
    "hero.subtitle": "Como la <strong>Enciclopedia Galáctica</strong> de Asimov, este handbook preserva y organiza el conocimiento en Estadística, Python e Inteligencia Artificial — de lo fundamental a lo avanzado, con la claridad de quien explica lo complejo como si fuera simple.",
    "hero.epigraph": "Psicohistoria de datos: patrones en el caos, previsiones en el ruido.",
    "hero.btn_primary": "Abrir los archivos",
    "hero.btn_ghost": "El archivista",
    // Stats row
    "stats.vol": "Volúmenes del conocimiento",
    "stats.ramos": "Ramas de la IA",
    "stats.ciclos": "Ciclos de aprendizaje",
    // Index section
    "index.title": "Índice de la Enciclopedia",
    "index.stat.title": "Estadística",
    "index.stat.desc": "Probabilidad, distribuciones, inferencia y análisis exploratorio — con intuición antes que la fórmula.",
    "index.stat.level": "Básico → Avanzado",
    "index.py.title": "Python",
    "index.py.desc": "Sintaxis, estructuras de datos, NumPy, Pandas y mejores prácticas para ciencia de datos.",
    "index.py.level": "Básico → Avanzado",
    "index.ia.title": "Inteligencia Artificial",
    "index.ia.desc": "Machine Learning, Deep Learning e IA Generativa — conceptos claros y ejemplos prácticos.",
    "index.ia.level": "ML · DL · GenAI",
    // Topic pages general
    "topic.tabs.basico": "Básico",
    "topic.tabs.intermediario": "Intermedio",
    "topic.tabs.avancado": "Avanzado",
    // Estatística page
    "stat.page.title": "Estadística",
    "stat.page.desc": "Fundamentos cuantitativos para decisiones basadas en datos.",
    // Python page
    "py.page.title": "Python",
    "py.page.desc": "El lenguaje que conecta análisis, automatización y modelos de IA.",
    // IA page
    "ia.page.title": "Inteligencia Artificial",
    "ia.page.desc": "Del aprendizaje supervisado a los modelos generativos de última generación.",
    "ia.subtabs.ml": "Machine Learning",
    "ia.subtabs.dl": "Deep Learning",
    "ia.subtabs.genai": "IA Generativa",
    // Empty state
    "empty_state": "¡Aún no hay temas en este nivel. Próximamente!",
    // Sobre page
    "about.badge": "Archivista de la Foundation",
    "about.name": "Gabriel Prado",
    "about.role": "Científico de Datos · Ingeniero de IA",
    "about.company.years": "5 años",
    "about.company.at": "en",
    "about.bio": "Curador de esta Foundation digital: comparto lo que aprendí en cinco años en Dataside, transformando conceptos complejos de datos e IA en capítulos claros y progresivos — como entradas de una enciclopedia hecha para sobrevivir a las eras.",
    "about.certs.title": "Educación y Certificaciones",
    "about.certs.grad.badge": "Graduación",
    "about.certs.grad.title": "Tecnólogo",
    "about.certs.grad.desc": "Ciencia de Datos",
    "about.certs.pos.badge": "Posgrado",
    "about.certs.pos.title": "Desarrollo de Aplicaciones",
    "about.certs.pos.desc": "de Inteligencia Artificial Generativa",
    "about.skills.title": "Áreas de experiencia",
    "about.skills.stat": "Estadística aplicada",
    "about.skills.py": "Python & Pandas",
    "about.skills.ml": "Machine Learning",
    "about.skills.dl": "Deep Learning",
    "about.skills.genai": "LLMs & GenAI",
    "about.skills.cloud": "Azure Cloud",
    "about.skills.mlops": "MLOps",
    "about.skills.viz": "Visualización de datos",
    // Footer
    "footer.text": "© 2026 <strong>Foundation</strong> — Handbook de Datos e IA · <em>Ad astra per data</em>"
  },
  content: {
    estatistica: {
      basico: [
        {
          title: '¿Qué es la Estadística?',
          body: `<p>La estadística es la ciencia de <strong>recopilar, organizar, analizar e interpretar datos</strong> para tomar decisiones con menos incertidumbre.</p>
          <p>Piénsalo como un GPS para las decisiones: los datos muestran dónde estás; la estadística ayuda a predecir a dónde puedes ir.</p>
          <div class="tip-box"><strong>💡 Intuición</strong> Antes de cualquier fórmula, pregúntate: "¿Qué quiero descubrir con estos datos?"</div>`
        },
        {
          title: 'Media Aritmética',
          body: `<p>La <strong>media</strong> responde: "si dividimos el total en partes iguales, ¿cuánto recibiría cada uno?" Sumas todos los valores y los divides por la cantidad.</p>
          <p>Imagina el salario de 4 colegas: $10k, $12k, $14k y $18k. La media es $13.5k — el "centro de gravedad" del grupo. Pero si un CEO gana $100k en el mismo cálculo, la media se dispara a $34k, aunque la mayoría gane mucho menos.</p>
          <p>Por eso la media es <strong>sensible a los valores atípicos (outliers)</strong> (valores muy alejados del resto).</p>
          <div class="stat-demo" data-demo="media"></div>
          <div class="tip-box"><strong>Cuándo usar</strong> Datos simétricos, sin extremos absurdos — ej.: altura de una clase, temperatura media de la semana.</div>`
        },
        {
          title: 'Mediana',
          body: `<p>La <strong>mediana</strong> es el valor que queda en el medio después de ordenar los datos. La mitad está por debajo, la otra mitad por encima — es el "centro" al que no le importa cuán exagerado sea el valor más alto.</p>
          <p>En el ejemplo [10, 12, 14, 100]: al ordenar, el centro está entre 12 y 14 → mediana = <strong>13</strong>. El 100 apenas la afectó. Mientras que la media sería 34.</p>
          <p>Con una cantidad <strong>impar</strong>, tomamos el valor del medio. Con una cantidad <strong>par</strong>, tomamos la media de los dos centrales.</p>
          <div class="stat-demo" data-demo="mediana"></div>
          <div class="tip-box"><strong>Cuándo usar</strong> Salarios, precios de inmuebles, evaluaciones — distribuciones con valores atípicos o asimetría.</div>`
        },
        {
          title: 'Moda',
          body: `<p>La <strong>moda</strong> es el valor que más aparece en el conjunto — el "campeón de frecuencia". No requiere sumar: solo contar repeticiones.</p>
          <p>En un examen, si aparecen las notas 7, 7, 7, 8, 9, la moda es <strong>7</strong>. En una encuesta de color favorito, la moda es el color más votado (datos categóricos).</p>
          <p>Puede haber <strong>más de una moda</strong> (bimodal) o <strong>ninguna</strong>, si todos los valores se repiten por igual.</p>
          <div class="stat-demo" data-demo="moda"></div>
          <div class="tip-box"><strong>Cuándo usar</strong> Moda de ventas, talla más solicitada, categoría más común — especialmente en datos nominales o discretos.</div>`
        },
        {
          title: 'Variabilidad: Desviación Estándar',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        }
      ],
      intermediario: [
        {
          title: 'Distribución Normal',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Correlación vs Causalidad',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Prueba t y valor p',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        }
      ],
      avancado: [
        {
          title: 'Regresión Lineal Múltiple',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'ANOVA',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Bayesiana — Introducción',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        }
      ]
    },
    python: {
      basico: [
        {
          title: '¿Por qué Python para Datos?',
          body: `<p>Python es legible, tiene un ecosistema gigante (Pandas, NumPy, scikit-learn) y es el lenguaje estándar en ciencia de datos e IA.</p>`
        },
        {
          title: 'Variables y Tipos',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Estructuras de Control',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Funciones',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        }
      ],
      intermediario: [
        {
          title: 'List Comprehensions',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'NumPy — Arrays Vectorizados',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Pandas — DataFrames',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        }
      ],
      avancado: [
        {
          title: 'OOP para Pipelines',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Decoradores y Context Managers',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        },
        {
          title: 'Rendimiento: Numba y Polars',
          body: `<p>EN CONSTRUCCIÓN 🚧</p>`
        }
      ]
    },
    ia: {
      ml: {
        basico: [
          {
            title: '¿Qué es Machine Learning?',
            body: `<p>El ML es la rama de la IA donde los algoritmos <strong>aprenden patrones a partir de datos</strong> sin ser programados explícitamente para cada regla.</p>
          <p>Tres paradigmas: supervisado (etiquetas), no supervisado (sin etiquetas) y por refuerzo (recompensas).</p>`
          },
          {
            title: 'Overfitting vs Underfitting',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Regresión Logística',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ],
        intermediario: [
          {
            title: 'Random Forest',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Métricas: Precision, Recall, F1',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Validación Cruzada k-Fold',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ],
        avancado: [
          {
            title: 'Gradient Boosting (XGBoost, LightGBM)',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'SHAP — Interpretabilidad',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ]
      },
      dl: {
        basico: [
          {
            title: 'Redes Neuronales — Concepto',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Funciones de Activación',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Funciones de Pérdida (Loss Functions)',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ],
        intermediario: [
          {
            title: 'CNNs para Imágenes',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Dropout y Batch Normalization',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Transfer Learning',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ],
        avancado: [
          {
            title: 'Transformers — Arquitectura',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Fine-tuning y LoRA',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ]
      },
      genai: {
        basico: [
          {
            title: '¿Qué es la IA Generativa?',
            body: `<h1><strong>¿Qué es la IA Generativa?</strong></h1>
          <p>De forma sencilla, la <strong>Inteligencia Artificial Generativa (GenAI)</strong> es una rama de la IA enfocada en <strong>crear contenido nuevo y original</strong>, en lugar de solo analizar, clasificar o filtrar datos existentes.</p>
          <p>Es capaz de generar textos, imágenes, música, códigos de programación, audios y videos inéditos que se asemejan a creaciones humanas.</p>
  
          <div class="tip-box">
            <strong>💡 La Gran Diferencia: Analizar vs. Crear</strong>
            <p>Mientras que la IA tradicional actúa como un <strong>detective o clasificador</strong> (ej.: identificar si hay un gato en una foto o predecir si el precio de una acción subirá), la IA Generativa actúa como un <strong>artista o escritor</strong> (ej.: dibujar un gato astronauta desde cero o escribir un poema inédito).</p>
          </div>
  
          <h2><strong>La Analogía del "Chef de Cocina"</strong></h2>
          <p>Para entender cómo la IA Generativa crea cosas inéditas sin simplemente "copiar y pegar" de internet, imagina a un <strong>Chef de Cocina con memoria fotográfica</strong>:</p>
          <ul>
            <li>Nunca ha comido una feijoada, pero ha leído 10,000 recetas diferentes y analizado fotos de platos de los mejores restaurantes.</li>
            <li>Con esto, no memorizó una receta específica. Aprendió los <strong>patrones profundos</strong> del plato: sabe qué ingredientes combinan, la proporción ideal de sal, el tiempo medio de cocción y qué acompañamientos tienen sentido.</li>
            <li>Cuando le pides <em>"crea una feijoada inédita con un toque contemporáneo"</em>, combina todos estos patrones aprendidos para crear un plato <strong>completamente nuevo</strong>.</li>
          </ul>
          <p>La IA Generativa hace lo mismo: analiza miles de millones de ejemplos de textos, imágenes o códigos creados por humanos para comprender sus estructuras y reglas, permitiéndole crear nuevo contenido a pedido.</p>
  
          <h2><strong>Principales Ejemplos y Aplicaciones en el Día a Día</strong></h2>
          <div class="llm-summary-grid">
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">✍️ Generación de Texto</span>
              <p>Responder dudas complejas, escribir correos profesionales, resumir artículos, crear guiones o traducir idiomas respetando el contexto. Ejemplo: <strong>ChatGPT, Claude, Gemini</strong>.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">🎨 Generación de Imágenes</span>
              <p>Crear ilustraciones digitales, diseños de productos o fotos ultrarrealistas a partir de descripciones textuales (prompts). Ejemplo: <strong>Midjourney, DALL-E 3, Stable Diffusion</strong>.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">💻 Escritura de Código</span>
              <p>Ayudar a los programadores escribiendo fragmentos de código enteros, identificando errores de sintaxis o explicando cómo funcionan sistemas complejos. Ejemplo: <strong>GitHub Copilot</strong>.</p>
            </div>
          </div>
  
          <h2><strong>¿Cómo logra parecer tan "creativa"?</strong></h2>
          <p>La base de la IA Generativa moderna son los modelos de Deep Learning (como redes neuronales Transformer). El proceso funciona así:</p>
          <ol>
            <li><strong>Entrenamiento Masivo:</strong> El modelo "lee" volúmenes monumentales de datos públicos (libros, artículos, códigos, imágenes).</li>
            <li><strong>Cálculo de Probabilidades:</strong> Al generar texto, por ejemplo, el modelo no está "pensando" como nosotros. Analiza lo que escribiste y calcula, palabra por palabra, cuál es el término estadísticamente más probable para continuar lógicamente tu idea.</li>
            <li><strong>Refinamiento Humano:</strong> Para evitar respuestas peligrosas o sin sentido, expertos humanos guían al modelo, enseñándole qué constituyen respuestas útiles, seguras y educadas.</li>
          </ol>
  
          <div class="tip-box">
            <strong>⚠️ Importante: El Pasante Brillante (y Exceso de Confianza)</strong>
            <p>Trata a la IA Generativa como a un <strong>pasante increíblemente inteligente y rápido, pero que a veces tiene exceso de confianza</strong>. Debido a que funciona prediciendo lo que parece más plausible y coherente (y no necesariamente lo que es la verdad fáctica absoluta), puede inventar hechos, referencias o datos con total convicción. Este fenómeno se llama <strong>alucinación</strong>. ¡Revisa siempre la información importante!</p>
          </div>`
          },
          {
            title: 'Cómo funcionan los LLMs',
            body: `<h1><strong>Cómo funcionan los LLMs</strong></h1>
          <p>LLM significa <strong>Large Language Model (Modelo de Lenguaje Grande)</strong>. En la práctica, es una IA entrenada para transformar el lenguaje en matemáticas y, a partir de eso, <strong>predecir qué token viene a continuación</strong>.</p>
          <div class="llm-summary-grid">
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">Idea central</span>
              <p>Leer contexto, calcular probabilidades y generar la siguiente parte de la respuesta.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">Materia prima</span>
              <p>Miles de millones de tokens de libros, artículos, código, diálogos y documentos.</p>
            </div>
            <div class="llm-summary-card">
              <span class="llm-summary-kicker">Estructura</span>
              <p>Redes neuronales del tipo <strong>Transformer</strong>, con un mecanismo de atención.</p>
            </div>
          </div>
  
          <h2><strong>1. La idea principal: predecir el próximo token</strong></h2>
          <p>Cuando escribes <code>"El cielo es..."</code>, el modelo no busca una oración memorizada. Compara este contexto con los patrones que aprendió y calcula algo como:</p>
          <ul>
            <li><strong>azul</strong> → alta probabilidad</li>
            <li>hermoso → probabilidad media</li>
            <li>infinito → probabilidad menor</li>
          </ul>
          <p>Luego elige un candidato y repite el proceso. La respuesta nace <strong>token por token</strong>.</p>
  
          <div class="llm-demo" data-demo="llm-next-token"></div>
  
          <h2><strong>2. ¿Qué es un token?</strong></h2>
          <p>Los LLMs no ven las palabras exactamente como nosotros. Dividen el texto en partes más pequeñas llamadas <strong>tokens</strong>. Un token puede ser una palabra entera, parte de una palabra, puntuación o incluso un espacio.</p>
          <p>Ejemplo:</p>
          <pre class="code-block">"Inteligencia Artificial" → ["Intelig", "encia", " Artificial"]</pre>
          <p>Es con los tokens que el modelo lee, piensa matemáticamente y responde.</p>
  
          <div class="llm-demo" data-demo="llm-tokenizer"></div>
  
          <h2><strong>3. ¿Cómo aprende el modelo?</strong></h2>
          <p>El entrenamiento principal se llama <strong>pre-entrenamiento</strong>. El ejercicio es sencillo de describir y enorme de ejecutar:</p>
          <div class="tip-box"><strong>Objetivo de entrenamiento</strong>Intentar predecir el próximo token millones y miles de millones de veces, ajustando los pesos internos siempre que se equivoca.</div>
          <p>Después de repetir esto a escala masiva, el modelo aprende:</p>
          <ul>
            <li>gramática y estilo</li>
            <li>relaciones entre conceptos</li>
            <li>estructura de textos y código</li>
            <li>patrones de preguntas y respuestas</li>
            <li>regularidades que parecen razonamiento textual</li>
          </ul>
  
          <h2><strong>4. ¿Dónde se almacena este aprendizaje?</strong></h2>
          <p>Se reparte en <strong>parámetros</strong>, que son números ajustables dentro de la red neuronal. Piensa en ellos como botones matemáticos que definen el comportamiento del modelo.</p>
          <table class="content-table">
            <thead>
              <tr>
                <th>Escala</th>
                <th>Orden de magnitud</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pequeño</td>
                <td>millones de parámetros</td>
              </tr>
              <tr>
                <td>Medio</td>
                <td>miles de millones de parámetros</td>
              </tr>
              <tr>
                <td>Grande</td>
                <td>decenas o cientos de miles de millones</td>
              </tr>
            </tbody>
          </table>
          <p>Más parámetros generalmente significan <strong>más capacidad para representar matices</strong>, pero también más costo computacional.</p>
  
          <h2><strong>5. Embeddings: cómo las palabras se convierten en números</strong></h2>
          <p>Antes de razonar sobre el texto, el modelo convierte los tokens en vectores numéricos llamados <strong>embeddings</strong>. En esta representación, los términos similares tienden a estar cerca.</p>
          <p>Por eso el modelo puede captar relaciones como:</p>
          <ul>
            <li><code>rey</code> cerca de <code>reina</code></li>
            <li><code>gato</code> cerca de <code>perro</code></li>
            <li><code>Python</code> cerca de <code>código</code></li>
          </ul>
  
          <div class="llm-demo" data-demo="llm-embeddings"></div>
  
          <h2><strong>6. ¿Qué hace que los LLMs modernos sean tan potentes?</strong></h2>
          <p>El salto se produjo con la arquitectura <strong>Transformer</strong>, introducida por Google en 2017 en el artículo <em>Attention Is All You Need</em>. Su punto central es el mecanismo de <strong>atención</strong>.</p>
  
          <h2><strong>7. ¿Qué es la atención (attention)?</strong></h2>
          <p>La atención permite al modelo medir <strong>qué partes del contexto importan más para entender cada token</strong>.</p>
          <p>En la oración <code>"Juan guardó el libro en la mochila porque estaba pesada."</code>, el modelo necesita inferir a qué se refiere <code>estaba pesada</code>. La atención ayuda a conectar pronombres, sujetos, objetos y relaciones semánticas.</p>
          <p>Una buena analogía es imaginar a un lector con un resaltador: destaca partes relevantes del texto antes de continuar.</p>
  
          <div class="llm-demo" data-demo="llm-attention"></div>
  
          <h2><strong>8. Cómo se genera la respuesta</strong></h2>
          <ol>
            <li>Tu texto entra en el prompt.</li>
            <li>El texto se divide en tokens.</li>
            <li>Cada token se convierte en embedding.</li>
            <li>El Transformer calcula la atención entre los tokens.</li>
            <li>El modelo produce probabilidades para el próximo token.</li>
            <li>Se elige un token.</li>
            <li>Este token vuelve a la secuencia y el ciclo se repite.</li>
          </ol>
          <p>Todo esto sucede muy rápido, varias veces por segundo.</p>
  
          <h2><strong>9. ¿El modelo "recuerda" la conversación?</strong></h2>
          <p>No como los humanos. Lo que hace es recibir un bloque de contexto con la conversación reciente, instrucciones y documentos adjuntos. Este bloque cabe dentro de una <strong>ventana de contexto</strong>.</p>
          <p>Cuando la ventana se llena, el sistema debe resumir, cortar o descartar las partes más antiguas.</p>
  
          <div class="llm-demo" data-demo="llm-context"></div>
  
          <h2><strong>10. ¿Qué es la temperatura?</strong></h2>
          <p>La <strong>Temperatura</strong> controla qué tan conservadora o creativa será la elección del próximo token.</p>
          <ul>
            <li>temperatura baja → respuestas más predecibles</li>
            <li>temperatura alta → respuestas más variadas</li>
          </ul>
          <p>No cambia el conocimiento del modelo. Cambia <strong>cómo elige el modelo entre las posibilidades</strong>.</p>
  
          <div class="llm-demo" data-demo="llm-temperature"></div>
  
          <h2><strong>11. El pre-entrenamiento no es el final</strong></h2>
          <p>Después del pre-entrenamiento, muchos modelos pasan por pasos adicionales:</p>
          <ul>
            <li><strong>instruction tuning</strong>: aprender a seguir instrucciones</li>
            <li><strong>alignment</strong>: reducir respuestas peligrosas o inútiles</li>
            <li><strong>RLHF o técnicas similares</strong>: ajustar respuestas basadas en preferencias humanas</li>
            <li><strong>fine-tuning</strong>: especializar el modelo en un dominio</li>
          </ul>
          <p>Esto es lo que ayuda a un LLM bruto a convertirse en un asistente conversacional útil.</p>
  
          <h2><strong>12. ¿Por qué parecen inteligentes?</strong></h2>
          <p>Porque el lenguaje humano lleva mucho conocimiento. Al aprender patrones de lenguaje, el modelo termina absorbiendo relaciones sobre ciencia, historia, matemáticas, programación y comportamiento textual.</p>
          <p>Esto genera la sensación de una comprensión profunda, incluso si el mecanismo interno sigue siendo esencialmente estadístico.</p>
  
          <h2><strong>13. Lo que hacen muy bien</strong></h2>
          <ul>
            <li>reconocer patrones</li>
            <li>mantener la coherencia local</li>
            <li>resumir y reescribir</li>
            <li>traducir y clasificar</li>
            <li>generar texto, código y explicaciones</li>
          </ul>
  
          <h2><strong>14. Lo que NO hacen como humanos</strong></h2>
          <ul>
            <li>no poseen conciencia</li>
            <li>no entienden el mundo exactamente como las personas</li>
            <li>no tienen su propia memoria biográfica</li>
            <li>no garantizan la verdad factual en todas sus respuestas</li>
          </ul>
  
          <h2><strong>15. ¿Por qué suceden las alucinaciones?</strong></h2>
          <p>El modelo está entrenado para generar <strong>continuaciones plausibles</strong>, no para garantizar la verdad absoluta. Si el contexto es débil, ambiguo o incompleto, puede producir algo convincente pero incorrecto.</p>
          <div class="tip-box"><strong>Regla general</strong>Cuanto mayor sea la demanda de precisión, más importante es usar un contexto confiable, validación externa, RAG, herramientas y revisión humana.</div>
  
          <h2><strong>16. ¿Y la multimodalidad?</strong></h2>
          <p>Los modelos modernos también pueden procesar imágenes, audio, video y documentos. El principio es similar: convertir estas entradas en representaciones numéricas compatibles con el modelo para que pueda encontrar patrones y responder sobre ellas.</p>
  
          <h2><strong>17. Resumen en una línea</strong></h2>
          <p>Un LLM es una máquina gigante de patrones que <strong>transforma el lenguaje en números, usa atención para interpretar el contexto y genera una respuesta prediciendo el próximo token</strong>.</p>`
          },
          {
            title: 'Tokens y Context Window',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Prompt Engineering Básico',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ],
        intermediario: [
          {
            title: 'RAG — Retrieval Augmented Generation',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Embeddings y Similitud',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Azure OpenAI — Visión General',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ],
        avancado: [
          {
            title: 'Agents y uso de Herramientas',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Fine-tuning de LLMs',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          },
          {
            title: 'Seguridad e IA Responsable',
            body: `<p>EN CONSTRUCCIÓN 🚧</p>`
          }
        ]
      }
    }
  }
};
