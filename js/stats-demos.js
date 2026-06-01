
const T_DEMOS = {
  'pt-br': {
    mediaHint: 'Arraste os sliders. Adicione um valor extremo e veja a média ser "puxada" para cima ou para baixo.',
    valorA: 'Valor A', valorB: 'Valor B', valorC: 'Valor C', valorD: 'Valor D',
    outlier: 'Outlier', incluirOutlier: 'Incluir outlier', soma: 'Soma',
    qtd: 'Quantidade (n)', media: 'Média',
    passo1: 'Passo 1: valores embaralhados — ordene para achar o centro',
    passo2: 'Passo 2: ordenado — o centro é a mediana',
    ordenarVal: 'Ordenar valores →', resetar: 'Resetar',
    valorX: 'Valor ', addValor: '+ Adicionar valor', remValor: '− Remover último',
    mediana: 'Mediana', impar: 'ímpar', par: 'par', meio: 'meio',
    posicao: 'posição', mediaCentrais: 'média dos dois valores centrais',
    repeticoes: 'Repetições', exProvas: 'Exemplo: notas de prova',
    aparece: 'aparece', vezes: '×', nenhumVal: 'nenhum valor',
    definaPeloMenos: 'Defina pelo menos um valor com repetições > 0.',
    semModa: 'Sem moda única', empatam: 'todos os valores ativos empatam na frequência.',
    moda: 'Moda', maiorFreq: 'maior frequência',
    multimodal: 'Distribuição multimodal: modas =', conjExp: 'Conjunto expandido',
    modaHint: 'Ajuste os valores: quando dois ou mais empatarem na contagem, você pode ter mais de uma moda — ou nenhuma, se todos aparecerem igualmente.',
    llmTokenizerH: 'Tokenizer Playground',
    llmTokenizerP: 'Digite uma frase e veja como um texto longo pode ser quebrado em partes menores.',
    llmTokGen: 'Tokens gerados',
    llmTokIdea: 'Ideia principal: o modelo lê pedaços de texto, não necessariamente palavras completas.',
    llmNextH: 'Predict Next Token',
    llmNextP: 'Escolha um contexto e veja como o modelo distribui probabilidade entre possíveis continuações.',
    llmNextBtn: 'Gerar próximo token',
    llmNextClick: 'Clique em <strong>Gerar próximo token</strong> para simular a escolha.',
    contexto: 'Contexto',
    tokenEsc: 'Token escolhido',
    llmNextDesc: 'O modelo não recupera uma resposta pronta: ele escolhe uma continuação plausível e continua o processo a partir dela.',
    llmEmbH: 'Embeddings Visualizer',
    llmEmbP: 'Escolha um concepto e veja vizinhos semânticos próximos no espaço vetorial.',
    llmEmbL1: 'Leitura intuitiva: embeddings aproximam tokens que aparecem em contextos parecidos.',
    llmEmbL2: 'Importante: proximidade vetorial não é “entendimento humano”, mas ajuda o modelo a generalizar relações.',
    llmAttH: 'Attention Visualizer',
    llmAttP: 'Clique em uma palavra para ver quais outras partes da frase recebem mais atenção.',
    llmAttL1: 'Leitura: attention não é magia; é um jeito matemático de medir relevância entre partes da sequência.',
    llmAttL2: 'Exemplo: o pronome', llmAttL3: 'depende de outras palavras para ser interpretado.',
    llmCtxH: 'Visualizador da janela de contexto',
    llmCtxP: 'Adicione texto e observe a janela de contexto encher. Quando ela passa do limite, as partes mais antigas perdem espaço.',
    llmCtxUso: 'Uso da janela', llmCtxChar: 'caracteres simulados',
    llmCtxOk: 'Ainda há espaço para contexto recente.',
    llmCtxFull: 'Limite atingido: mensagens mais antigas precisam ser resumidas ou descartadas.',
    llmTempH: 'Temperature Demo',
    llmTempP: 'Arraste o slider para ver como a distribuição de probabilidade fica mais concentrada ou mais espalhada.',
    temperatura: 'Temperatura',
    llmTempL: 'Leitura: temperatura baixa concentra probabilidade nos candidatos mais fortes.',
    llmTempM: 'Leitura: temperaturas intermediárias equilibram previsibilidade e variedade.',
    llmTempHgh: 'Leitura: temperatura alta espalha a distribuição e aumenta a chance de saídas inesperadas.',
    sysMsg: 'Sistema: responda de forma didática.',
    usrMsg1: 'Usuário: explique transformers.',
    astMsg1: 'Assistente: transformer usa attention para relacionar tokens.',
    usrMsg2: 'Usuário: agora compare com RNNs.',
    astMsg2: 'Assistente: RNNs processam sequências de modo mais serial.',
    usrPre: 'Usuário: ',
    pyVarTitle: 'Playground: Variáveis e Tipos',
    pyVarHint: 'Digite um valor e veja o tipo detectado pelo Python.',
    pyVarName: 'Nome da variável',
    pyVarValue: 'Valor',
    pyVarAssign: 'Atribuir →',
    pyVarReset: 'Limpar',
    pyVarMemory: 'Memória',
    pyVarOutput: 'Saída',
    pyVarType: 'Tipo',
    pyVarTip: '💡 Dica: Python infere o tipo automaticamente — não é necessário declarar.',
    pyVarErrName: 'Nome inválido (use apenas letras, números e _)',
    pyVarErrEmpty: 'Digite um valor para a variável.'
  },
  'en': {
    mediaHint: 'Drag the sliders. Add an extreme value and see the mean be "pulled" up or down.',
    valorA: 'Value A', valorB: 'Value B', valorC: 'Value C', valorD: 'Value D',
    outlier: 'Outlier', incluirOutlier: 'Include outlier', soma: 'Sum',
    qtd: 'Count (n)', media: 'Mean',
    passo1: 'Step 1: shuffled values — sort to find the center',
    passo2: 'Step 2: sorted — the center is the median',
    ordenarVal: 'Sort values →', resetar: 'Reset',
    valorX: 'Value ', addValor: '+ Add value', remValor: '− Remove last',
    mediana: 'Median', impar: 'odd', par: 'even', meio: 'middle',
    posicao: 'position', mediaCentrais: 'mean of the two central values',
    repeticoes: 'Repetitions', exProvas: 'Example: exam scores',
    aparece: 'appears', vezes: '×', nenhumVal: 'no value',
    definaPeloMenos: 'Define at least one value with repetitions > 0.',
    semModa: 'No unique mode', empatam: 'all active values tie in frequency.',
    moda: 'Mode', maiorFreq: 'highest frequency',
    multimodal: 'Multimodal distribution: modes =', conjExp: 'Expanded set',
    modaHint: 'Adjust the values: when two or more tie in count, you can have more than one mode — or none, if all appear equally.',
    llmTokenizerH: 'Tokenizer Playground',
    llmTokenizerP: 'Type a sentence and see how long text can be broken down into smaller pieces.',
    llmTokGen: 'Generated tokens',
    llmTokIdea: 'Main idea: the model reads pieces of text, not necessarily full words.',
    llmNextH: 'Predict Next Token',
    llmNextP: 'Choose a context and see how the model distributes probability among possible continuations.',
    llmNextBtn: 'Generate next token',
    llmNextClick: 'Click <strong>Generate next token</strong> to simulate the choice.',
    contexto: 'Context',
    tokenEsc: 'Chosen token',
    llmNextDesc: 'The model doesn\'t retrieve a ready response: it chooses a plausible continuation and continues the process from there.',
    llmEmbH: 'Embeddings Visualizer',
    llmEmbP: 'Choose a concept and see nearby semantic neighbors in vector space.',
    llmEmbL1: 'Intuitive reading: embeddings bring together tokens that appear in similar contexts.',
    llmEmbL2: 'Important: vector proximity is not "human understanding", but helps the model generalize relations.',
    llmAttH: 'Attention Visualizer',
    llmAttP: 'Click a word to see which other parts of the sentence receive more attention.',
    llmAttL1: 'Reading: attention is not magic; it\'s a mathematical way to measure relevance between parts of the sequence.',
    llmAttL2: 'Example: the pronoun', llmAttL3: 'depends on other words to be interpreted.',
    llmCtxH: 'Context Window Visualizer',
    llmCtxP: 'Add text and watch the context window fill up. When it passes the limit, older parts lose space.',
    llmCtxUso: 'Window usage', llmCtxChar: 'simulated characters',
    llmCtxOk: 'There is still room for recent context.',
    llmCtxFull: 'Limit reached: older messages need to be summarized or discarded.',
    llmTempH: 'Temperature Demo',
    llmTempP: 'Drag the slider to see how the probability distribution becomes more concentrated or more spread out.',
    temperatura: 'Temperature',
    llmTempL: 'Reading: low temperature concentrates probability on the strongest candidates.',
    llmTempM: 'Reading: intermediate temperatures balance predictability and variety.',
    llmTempHgh: 'Reading: high temperature spreads the distribution and increases the chance of unexpected outputs.',
    sysMsg: 'System: respond didactically.',
    usrMsg1: 'User: explain transformers.',
    astMsg1: 'Assistant: transformer uses attention to relate tokens.',
    usrMsg2: 'User: now compare with RNNs.',
    astMsg2: 'Assistant: RNNs process sequences more serially.',
    usrPre: 'User: ',
    pyVarTitle: 'Playground: Variables and Types',
    pyVarHint: 'Type a value and see the type detected by Python.',
    pyVarName: 'Variable name',
    pyVarValue: 'Value',
    pyVarAssign: 'Assign →',
    pyVarReset: 'Clear',
    pyVarMemory: 'Memory',
    pyVarOutput: 'Output',
    pyVarType: 'Type',
    pyVarTip: '💡 Tip: Python infers the type automatically — no need to declare it.',
    pyVarErrName: 'Invalid name (use only letters, numbers and _)',
    pyVarErrEmpty: 'Enter a value for the variable.'
  },
  'es': {
    mediaHint: 'Arrastra los deslizadores. Añade un valor extremo y mira cómo la media es "jalada" hacia arriba o hacia abajo.',
    valorA: 'Valor A', valorB: 'Valor B', valorC: 'Valor C', valorD: 'Valor D',
    outlier: 'Atípico', incluirOutlier: 'Incluir atípico', soma: 'Suma',
    qtd: 'Cantidad (n)', media: 'Media',
    passo1: 'Paso 1: valores desordenados — ordene para hallar el centro',
    passo2: 'Paso 2: ordenado — el centro es la mediana',
    ordenarVal: 'Ordenar valores →', resetar: 'Resetear',
    valorX: 'Valor ', addValor: '+ Añadir valor', remValor: '− Eliminar último',
    mediana: 'Mediana', impar: 'impar', par: 'par', meio: 'medio',
    posicao: 'posición', mediaCentrais: 'media de los dos valores centrales',
    repeticoes: 'Repeticiones', exProvas: 'Ejemplo: notas de examen',
    aparece: 'aparece', vezes: '×', nenhumVal: 'ningún valor',
    definaPeloMenos: 'Defina al menos un valor con repeticiones > 0.',
    semModa: 'Sin moda única', empatam: 'todos los valores activos empatan en frecuencia.',
    moda: 'Moda', maiorFreq: 'mayor frecuencia',
    multimodal: 'Distribución multimodal: modas =', conjExp: 'Conjunto expandido',
    modaHint: 'Ajuste los valores: cuando dos o más empatan en cuenta, puede tener más de una moda — o ninguna, si todos aparecen por igual.',
    llmTokenizerH: 'Tokenizer Playground',
    llmTokenizerP: 'Escribe una frase y mira cómo un texto largo puede dividirse en partes más pequeñas.',
    llmTokGen: 'Tokens generados',
    llmTokIdea: 'Idea principal: el modelo lee pedazos de texto, no necesariamente palabras completas.',
    llmNextH: 'Predict Next Token',
    llmNextP: 'Elige un contexto y mira cómo el modelo distribuye probabilidad entre posibles continuaciones.',
    llmNextBtn: 'Generar próximo token',
    llmNextClick: 'Haz clic en <strong>Generar próximo token</strong> para simular la elección.',
    contexto: 'Contexto',
    tokenEsc: 'Token elegido',
    llmNextDesc: 'El modelo no recupera una respuesta lista: elige una continuación plausible y continúa el proceso desde allí.',
    llmEmbH: 'Embeddings Visualizer',
    llmEmbP: 'Elige un concepto y ve vecinos semánticos cercanos en el espacio vectorial.',
    llmEmbL1: 'Lectura intuitiva: embeddings acercan tokens que aparecen en contextos similares.',
    llmEmbL2: 'Importante: la proximidad vectorial no es "comprensión humana", pero ayuda al modelo a generalizar relaciones.',
    llmAttH: 'Attention Visualizer',
    llmAttP: 'Haz clic en una palabra para ver qué otras partes de la frase reciben más atención.',
    llmAttL1: 'Lectura: attention no es magia; es una forma matemática de medir relevancia entre partes de la secuencia.',
    llmAttL2: 'Ejemplo: el pronombre', llmAttL3: 'depende de otras palabras para ser interpretado.',
    llmCtxH: 'Visualizador de la ventana de contexto',
    llmCtxP: 'Agrega texto y observa cómo se llena la ventana de contexto. Cuando pasa el límite, las partes más antiguas pierden espacio.',
    llmCtxUso: 'Uso de la ventana', llmCtxChar: 'caracteres simulados',
    llmCtxOk: 'Aún hay espacio para contexto reciente.',
    llmCtxFull: 'Límite alcanzado: los mensajes más antiguos deben resumirse o descartarse.',
    llmTempH: 'Temperature Demo',
    llmTempP: 'Arrastra el deslizador para ver cómo la distribución de probabilidad se concentra o se dispersa más.',
    temperatura: 'Temperatura',
    llmTempL: 'Lectura: temperatura baja concentra probabilidad en los candidatos más fuertes.',
    llmTempM: 'Lectura: temperaturas intermedias equilibran previsibilidad y variedad.',
    llmTempHgh: 'Lectura: temperatura alta dispersa la distribución y aumenta la posibilidad de salidas inesperadas.',
    sysMsg: 'Sistema: responde didácticamente.',
    usrMsg1: 'Usuario: explica transformers.',
    astMsg1: 'Asistente: transformer usa attention para relacionar tokens.',
    usrMsg2: 'Usuario: ahora compara con RNNs.',
    astMsg2: 'Asistente: RNNs procesan secuencias más en serie.',
    usrPre: 'Usuario: ',
    pyVarTitle: 'Playground: Variables y Tipos',
    pyVarHint: 'Escribe un valor y ve el tipo detectado por Python.',
    pyVarName: 'Nombre de variable',
    pyVarValue: 'Valor',
    pyVarAssign: 'Asignar →',
    pyVarReset: 'Limpiar',
    pyVarMemory: 'Memoria',
    pyVarOutput: 'Salida',
    pyVarType: 'Tipo',
    pyVarTip: '💡 Consejo: Python infiere el tipo automáticamente — no es necesario declararlo.',
    pyVarErrName: 'Nombre inválido (use solo letras, números y _)',
    pyVarErrEmpty: 'Ingresa un valor para la variable.'
  }
};
function getT(key) {
  const lang = window.i18n ? window.i18n.getCurrentLang() : 'pt-br';
  return T_DEMOS[lang]?.[key] || T_DEMOS['pt-br'][key];
}

/**
 * Demos interativos — Média, Mediana e Moda
 */

function formatNum(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function initStatsDemos(root = document) {
  root.querySelectorAll('[data-demo="media"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initMediaDemo(el);
  });
  root.querySelectorAll('[data-demo="mediana"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initMedianaDemo(el);
  });
  root.querySelectorAll('[data-demo="moda"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initModaDemo(el);
  });
  root.querySelectorAll('[data-demo="py-variables-playground"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initPyVariablesDemo(el);
  });
}

function initLLMDemos(root = document) {
  root.querySelectorAll('[data-demo="llm-next-token"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initLlmNextTokenDemo(el);
  });
  root.querySelectorAll('[data-demo="llm-tokenizer"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initLlmTokenizerDemo(el);
  });
  root.querySelectorAll('[data-demo="llm-embeddings"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initLlmEmbeddingsDemo(el);
  });
  root.querySelectorAll('[data-demo="llm-attention"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initLlmAttentionDemo(el);
  });
  root.querySelectorAll('[data-demo="llm-context"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initLlmContextDemo(el);
  });
  root.querySelectorAll('[data-demo="llm-temperature"]').forEach(el => {
    if (!el.querySelector('.demo-panel')) initLlmTemperatureDemo(el);
  });
}

/* —— MÉDIA —— */
function initMediaDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { labels = [getT("valorA"), getT("valorB"), getT("valorC"), getT("valorD"), getT("outlier")]; renderControls(); render(); });
  const defaults = [10, 12, 14, 18];
  let labels = [getT('valorA'), getT('valorB'), getT('valorC'), getT('valorD'), getT('outlier')];

  wrap.innerHTML = `
    <div class="demo-panel">
      <div class="demo-controls" id="media-controls"></div>
      <div class="demo-viz">
        <div class="demo-chart demo-chart--mean" id="media-chart"></div>
        <div class="demo-mean-line-wrap" id="media-mean-line"></div>
      </div>
      <div class="demo-formula" id="media-formula"></div>
      <p class="demo-hint">${getT('mediaHint')}</p>
    </div>
  `;

  const controlsEl = wrap.querySelector('#media-controls');
  const chartEl = wrap.querySelector('#media-chart');
  const meanLineEl = wrap.querySelector('#media-mean-line');
  const formulaEl = wrap.querySelector('#media-formula');

  const state = {
    values: [...defaults],
    outlierOn: false,
    outlier: 100
  };

  function renderControls() {
    controlsEl.innerHTML = state.values.map((v, i) => `
      <label class="demo-slider-row">
        <span class="demo-slider-label">${labels[i]}</span>
        <input type="range" min="0" max="50" step="1" value="${v}" data-idx="${i}" aria-label="${labels[i]}">
        <output>${v}</output>
      </label>
    `).join('') + `
      <label class="demo-toggle-row">
        <input type="checkbox" id="media-outlier-toggle" ${state.outlierOn ? 'checked' : ''}>
        <span>${getT('incluirOutlier')} (${labels[4]})</span>
      </label>
      <label class="demo-slider-row demo-slider-row--outlier" style="display:${state.outlierOn ? 'flex' : 'none'}">
        <span class="demo-slider-label">${labels[4]}</span>
        <input type="range" min="0" max="120" step="1" value="${state.outlier}" id="media-outlier-range" aria-label="Outlier">
        <output id="media-outlier-out">${state.outlier}</output>
      </label>
    `;

    controlsEl.querySelectorAll('input[type="range"][data-idx]').forEach(sl => {
      sl.addEventListener('input', () => {
        state.values[+sl.dataset.idx] = +sl.value;
        sl.nextElementSibling.textContent = sl.value;
        render();
      });
    });

    const toggle = controlsEl.querySelector('#media-outlier-toggle');
    const outlierRow = controlsEl.querySelector('.demo-slider-row--outlier');
    toggle.addEventListener('change', () => {
      state.outlierOn = toggle.checked;
      outlierRow.style.display = state.outlierOn ? 'flex' : 'none';
      render();
    });

    const outlierSl = controlsEl.querySelector('#media-outlier-range');
    if (outlierSl) {
      outlierSl.addEventListener('input', () => {
        state.outlier = +outlierSl.value;
        controlsEl.querySelector('#media-outlier-out').textContent = outlierSl.value;
        render();
      });
    }
  }

  function getData() {
    return state.outlierOn ? [...state.values, state.outlier] : [...state.values];
  }

  function render() {
    const data = getData();
    const sum = data.reduce((a, b) => a + b, 0);
    const mean = sum / data.length;
    const max = Math.max(...data, 1);

    chartEl.innerHTML = data.map((v, i) => {
      const h = (v / max) * 100;
      const isOutlier = state.outlierOn && i === data.length - 1;
      return `
        <div class="demo-bar-col">
          <span class="demo-bar-value">${v}</span>
          <div class="demo-bar ${isOutlier ? 'demo-bar--outlier' : ''}" style="height:${h}%"></div>
          <span class="demo-bar-label">${isOutlier ? getT('outlier') : labels[i] || i + 1}</span>
        </div>
      `;
    }).join('');

    meanLineEl.innerHTML = `
      <div class="demo-mean-line" style="bottom: calc(${(mean / max) * 100}% + 2.5rem)">
        <span class="demo-mean-badge">${getT('media')} = ${formatNum(mean)}</span>
      </div>
    `;

    const terms = data.join(' + ');
    formulaEl.innerHTML = `
      <div class="demo-formula-box">
        <p><strong>${getT('soma')}:</strong> ${terms} = <em>${sum}</em></p>
        <p><strong>${getT('qtd')}:</strong> ${data.length}</p>
        <p class="demo-formula-highlight"><strong>${getT('media')} = ${getT('soma')} ÷ n = ${sum} ÷ ${data.length} = ${formatNum(mean)}</strong></p>
      </div>
    `;
  }

  renderControls();
  render();
}

/* —— MEDIANA —— */
function initMedianaDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { renderControls(); render(); });
  wrap.innerHTML = `
    <div class="demo-panel">
      <div class="demo-controls" id="mediana-controls"></div>
      <p class="demo-step-label" id="mediana-step">${getT('passo1')}</p>
      <div class="demo-viz demo-viz--numberline" id="mediana-viz"></div>
      <div class="demo-formula" id="mediana-formula"></div>
      <div class="demo-btn-row">
        <button type="button" class="btn btn-ghost btn-sm" id="mediana-sort-btn">${getT('ordenarVal')}</button>
        <button type="button" class="btn btn-ghost btn-sm" id="mediana-reset-btn">${getT('resetar')}</button>
      </div>
    </div>
  `;

  const defaults = [10, 12, 14, 18];
  const state = { values: [...defaults], sorted: false };

  const controlsEl = wrap.querySelector('#mediana-controls');
  const vizEl = wrap.querySelector('#mediana-viz');
  const formulaEl = wrap.querySelector('#mediana-formula');
  const stepEl = wrap.querySelector('#mediana-step');

  function renderControls() {
    controlsEl.innerHTML = state.values.map((v, i) => `
      <label class="demo-slider-row">
        <span class="demo-slider-label">${getT('valorX')} ${i + 1}</span>
        <input type="range" min="0" max="50" step="1" value="${v}" data-idx="${i}" ${state.sorted ? 'disabled' : ''}>
        <output>${v}</output>
      </label>
    `).join('') + `
      <button type="button" class="btn btn-ghost btn-sm" id="mediana-add-btn" ${state.values.length >= 7 ? 'disabled' : ''}>${getT('addValor')}</button>
      ${state.values.length > 3 ? `<button type="button" class="btn btn-ghost btn-sm" id="mediana-remove-btn">${getT('remValor')}</button>` : ''}
    `;

    controlsEl.querySelectorAll('input[data-idx]').forEach(sl => {
      sl.addEventListener('input', () => {
        state.values[+sl.dataset.idx] = +sl.value;
        sl.nextElementSibling.textContent = sl.value;
        render();
      });
    });

    controlsEl.querySelector('#mediana-add-btn')?.addEventListener('click', () => {
      state.values.push(20);
      state.sorted = false;
      renderControls();
      render();
    });

    controlsEl.querySelector('#mediana-remove-btn')?.addEventListener('click', () => {
      state.values.pop();
      state.sorted = false;
      renderControls();
      render();
    });
  }

  function calcMedian(arr) {
    const s = [...arr].sort((a, b) => a - b);
    const n = s.length;
    if (n % 2 === 1) return s[(n - 1) / 2];
    return (s[n / 2 - 1] + s[n / 2]) / 2;
  }

  function render() {
    const display = state.sorted ? [...state.values].sort((a, b) => a - b) : [...state.values];
    const median = calcMedian(state.values);
    const min = Math.min(...display, 0);
    const max = Math.max(...display, 1);
    const range = max - min || 1;

    const sorted = [...state.values].sort((a, b) => a - b);
    const n = sorted.length;

    vizEl.innerHTML = `
      <div class="demo-numberline">
        <div class="demo-numberline-track"></div>
        ${display.map((v, i) => {
          const pct = ((v - min) / range) * 85 + 5;
          let isMed = false;
          if (state.sorted) {
            if (n % 2 === 1 && i === Math.floor(n / 2)) isMed = true;
            if (n % 2 === 0 && (i === n / 2 - 1 || i === n / 2)) isMed = true;
          }
          return `
            <div class="demo-dot-wrap" style="left:${pct}%">
              <div class="demo-dot ${isMed ? 'demo-dot--median' : ''}">${v}</div>
              ${isMed ? '<span class="demo-dot-tag">' + getT('mediana') + '</span>' : ''}
            </div>
          `;
        }).join('')}
        <div class="demo-median-marker" style="left:${((median - min) / range) * 85 + 5}%"></div>
      </div>
    `;

    stepEl.textContent = state.sorted
      ? getT('passo2')
      : getT('passo1');

    if (n % 2 === 1) {
      formulaEl.innerHTML = `
        <div class="demo-formula-box">
          <p><em>n = ${n}</em> (${getT('impar')}) → ${getT('mediana').toLowerCase()} = ${getT('valorX').toLowerCase()} do <strong>${getT('meio')}</strong> = ${getT('posicao')} ${Math.floor(n / 2) + 1}</p>
          <p class="demo-formula-highlight"><strong>${getT('mediana')} = ${formatNum(median)}</strong></p>
        </div>
      `;
    } else {
      formulaEl.innerHTML = `
        <div class="demo-formula-box">
          <p><em>n = ${n}</em> (${getT('par')}) → ${getT('mediaCentrais')}: (${sorted[n / 2 - 1]} + ${sorted[n / 2]}) ÷ 2</p>
          <p class="demo-formula-highlight"><strong>${getT('mediana')} = ${formatNum(median)}</strong></p>
        </div>
      `;
    }
  }

  wrap.querySelector('#mediana-sort-btn').addEventListener('click', () => {
    state.sorted = true;
    renderControls();
    render();
  });

  wrap.querySelector('#mediana-reset-btn').addEventListener('click', () => {
    state.values = [...defaults];
    state.sorted = false;
    renderControls();
    render();
  });

  renderControls();
  render();
}

/* —— MODA —— */
function initModaDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { renderControls(); render(); });
  wrap.innerHTML = `
    <div class="demo-panel">
      <div class="demo-controls" id="moda-controls"></div>
      <div class="demo-viz">
        <div class="demo-chart demo-chart--freq" id="moda-chart"></div>
      </div>
      <div class="demo-formula" id="moda-formula"></div>
      <p class="demo-hint">${getT('modaHint')}</p>
    </div>
  `;

  const state = {
    buckets: [
      { label: '5', value: 5, count: 3 },
      { label: '8', value: 8, count: 2 },
      { label: '12', value: 12, count: 1 }
    ]
  };

  const controlsEl = wrap.querySelector('#moda-controls');
  const chartEl = wrap.querySelector('#moda-chart');
  const formulaEl = wrap.querySelector('#moda-formula');

  function renderControls() {
    controlsEl.innerHTML = state.buckets.map((b, i) => `
      <div class="demo-freq-row">
        <label class="demo-slider-row">
          <span class="demo-slider-label">${getT('valorX')} ${i + 1}</span>
          <input type="range" min="1" max="30" step="1" value="${b.value}" data-bucket="${i}" data-field="value">
          <output>${b.value}</output>
        </label>
        <label class="demo-slider-row demo-slider-row--count">
          <span class="demo-slider-label">${getT('repeticoes')}</span>
          <input type="range" min="0" max="8" step="1" value="${b.count}" data-bucket="${i}" data-field="count">
          <output>${b.count}</output>
        </label>
      </div>
    `).join('') + `
      <button type="button" class="btn btn-ghost btn-sm" id="moda-preset-btn">${getT('exProvas')}</button>
    `;

    controlsEl.querySelectorAll('input[data-bucket]').forEach(sl => {
      sl.addEventListener('input', () => {
        const i = +sl.dataset.bucket;
        const field = sl.dataset.field;
        state.buckets[i][field] = +sl.value;
        if (field === 'value') state.buckets[i].label = String(sl.value);
        sl.nextElementSibling.textContent = sl.value;
        render();
      });
    });

    controlsEl.querySelector('#moda-preset-btn').addEventListener('click', () => {
      state.buckets = [
        { label: '6', value: 6, count: 1 },
        { label: '7', value: 7, count: 4 },
        { label: '8', value: 8, count: 2 },
        { label: '9', value: 9, count: 1 }
      ];
      renderControls();
      render();
    });
  }

  function render() {
    const active = state.buckets.filter(b => b.count > 0);
    const maxCount = Math.max(...active.map(b => b.count), 1);
    const modes = active.filter(b => b.count === maxCount && b.count > 0).map(b => b.value);

    chartEl.innerHTML = state.buckets.map(b => {
      const h = b.count > 0 ? (b.count / maxCount) * 100 : 4;
      const isMode = modes.includes(b.value) && b.count > 0;
      return `
        <div class="demo-bar-col">
          <span class="demo-bar-value">${b.count > 0 ? b.count + '×' : '—'}</span>
          <div class="demo-bar demo-bar--freq ${isMode ? 'demo-bar--mode' : ''} ${b.count === 0 ? 'demo-bar--empty' : ''}" style="height:${h}%"></div>
          <span class="demo-bar-label">${b.value}</span>
          ${isMode ? '<span class="demo-mode-star">' + getT('moda') + '</span>' : ''}
        </div>
      `;
    }).join('');

    const expanded = active.flatMap(b => Array(b.count).fill(b.value));
    const freqText = active.map(b => `${b.value} ${getT('aparece')} ${b.count}${getT('vezes')}`).join(' · ') || getT('nenhumVal');

    let modeText;
    if (active.length === 0) {
      modeText = getT('definaPeloMenos');
    } else if (active.length > 1 && active.every(b => b.count === maxCount)) {
      modeText = `<strong>${getT('semModa')}</strong> — ${getT('empatam')}`;
    } else if (modes.length === 1) {
      modeText = `<strong>${getT('moda')} = ${modes[0]}</strong> (${getT('maiorFreq')}: ${maxCount})`;
    } else {
      modeText = `<strong>${getT('multimodal')}</strong> ${modes.join(', ')}`;  
    }

    formulaEl.innerHTML = `
      <div class="demo-formula-box">
        <p><strong>${getT('conjExp')}:</strong> [${expanded.join(', ') || '—'}]</p>
        <p>${freqText}</p>
        <p class="demo-formula-highlight">${modeText}</p>
      </div>
    `;
  }

  renderControls();
  render();
}

/* —— LLM demos —— */

function tokenizeText(text) {
  return text
    .split(/(\s+|[.,!?;:()"\-])/)
    .filter(Boolean)
    .flatMap(part => {
      if (/^\s+$/.test(part) || /^[.,!?;:()"\-]$/.test(part)) return [part];
      if (part.length <= 6) return [part];
      const tokens = [];
      let remaining = part;
      while (remaining.length > 6) {
        const cut = Math.max(3, Math.min(6, Math.ceil(remaining.length / 2)));
        tokens.push(remaining.slice(0, cut));
        remaining = remaining.slice(cut);
      }
      if (remaining) tokens.push(remaining);
      return tokens;
    });
}

function softmaxFromBase(base, temperature) {
  const adjusted = base.map(v => Math.exp(Math.log(v) / temperature));
  const total = adjusted.reduce((sum, v) => sum + v, 0) || 1;
  return adjusted.map(v => (v / total) * 100);
}

function initLlmTokenizerDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { render(); });
  const sample = 'Inteligência Artificial aprende padrões em textos, códigos e conversas.';

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>${getT('llmTokenizerH')}</h3>
        <p>${getT('llmTokenizerP')}</p>
      </div>
      <textarea class="llm-textarea" rows="3">${sample}</textarea>
      <div class="llm-token-strip"></div>
      <div class="demo-formula-box llm-inline-stats"></div>
    </div>
  `;

  const input = wrap.querySelector('.llm-textarea');
  const strip = wrap.querySelector('.llm-token-strip');
  const stats = wrap.querySelector('.llm-inline-stats');

  function render() {
    const tokens = tokenizeText(input.value.trim() || sample);
    strip.innerHTML = tokens.map(token => {
      const printable = token.replace(/ /g, '␠');
      const cls = /^\s+$/.test(token) ? 'llm-token llm-token--space' : 'llm-token';
      return `<span class="${cls}">${printable}</span>`;
    }).join('');
    stats.innerHTML = `
      <p><strong>${getT('llmTokGen')}:</strong> ${tokens.length}</p>
      <p><strong>${getT('llmTokIdea')}</p>
    `;
  }

  input.addEventListener('input', render);
  render();
}

function initLlmNextTokenDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { render(); });
  const presets = {
    'O céu é': [
      { token: 'azul', p: 0.48 },
      { token: 'claro', p: 0.22 },
      { token: 'bonito', p: 0.18 },
      { token: 'infinito', p: 0.12 }
    ],
    'O futuro da IA será': [
      { token: 'transformador', p: 0.36 },
      { token: 'gradual', p: 0.24 },
      { token: 'disputado', p: 0.21 },
      { token: 'imprevisível', p: 0.19 }
    ],
    'Uma boa documentação precisa ser': [
      { token: 'clara', p: 0.42 },
      { token: 'objetiva', p: 0.26 },
      { token: 'útil', p: 0.2 },
      { token: 'curta', p: 0.12 }
    ]
  };

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>${getT('llmNextH')}</h3>
        <p>${getT('llmNextP')}</p>
      </div>
      <div class="demo-btn-row llm-preset-row"></div>
      <div class="llm-next-context"></div>
      <div class="llm-prob-list"></div>
      <div class="demo-btn-row">
        <button type="button" class="btn btn-ghost btn-sm llm-generate-btn">${getT('llmNextBtn')}</button>
      </div>
      <div class="demo-formula-box llm-generation-result"></div>
    </div>
  `;

  const presetRow = wrap.querySelector('.llm-preset-row');
  const contextEl = wrap.querySelector('.llm-next-context');
  const probList = wrap.querySelector('.llm-prob-list');
  const resultEl = wrap.querySelector('.llm-generation-result');
  const button = wrap.querySelector('.llm-generate-btn');

  let currentKey = Object.keys(presets)[0];

  function weightedPick(items) {
    const total = items.reduce((sum, item) => sum + item.p, 0);
    let roll = Math.random() * total;
    for (const item of items) {
      roll -= item.p;
      if (roll <= 0) return item;
    }
    return items[items.length - 1];
  }

  function render() {
    presetRow.innerHTML = Object.keys(presets).map(key => `
      <button type="button" class="btn btn-ghost btn-sm ${key === currentKey ? 'llm-chip-active' : ''}" data-key="${key}">${key}</button>
    `).join('');
    contextEl.innerHTML = `<p><strong>${getT('contexto')}:</strong> ${currentKey}<span class="llm-cursor">|</span></p>`;
    probList.innerHTML = presets[currentKey].map(item => `
      <div class="llm-prob-row">
        <div class="llm-prob-meta">
          <span>${item.token}</span>
          <strong>${Math.round(item.p * 100)}%</strong>
        </div>
        <div class="llm-prob-track"><div class="llm-prob-fill" style="width:${item.p * 100}%"></div></div>
      </div>
    `).join('');
    resultEl.innerHTML = `<p>${getT('llmNextClick')}</p>`;

    presetRow.querySelectorAll('[data-key]').forEach(el => {
      el.addEventListener('click', () => {
        currentKey = el.dataset.key;
        render();
      });
    });
  }

  button.addEventListener('click', () => {
    const picked = weightedPick(presets[currentKey]);
    resultEl.innerHTML = `
      <p><strong>${getT('tokenEsc')}:</strong> ${picked.token}</p>
      <p>${getT('llmNextDesc')}</p>
    `;
  });

  render();
}

function initLlmEmbeddingsDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { render(); });
  const groups = {
    rei: ['rainha', 'príncipe', 'monarca', 'trono'],
    gato: ['cachorro', 'felino', 'animal', 'pet'],
    código: ['Python', 'função', 'algoritmo', 'debug'],
    hospital: ['médico', 'paciente', 'cirurgia', 'clínica']
  };

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>${getT('llmEmbH')}</h3>
        <p>${getT('llmEmbP')}</p>
      </div>
      <div class="demo-btn-row llm-embedding-buttons"></div>
      <div class="llm-embedding-cloud"></div>
      <div class="demo-formula-box llm-inline-stats"></div>
    </div>
  `;

  const buttons = wrap.querySelector('.llm-embedding-buttons');
  const cloud = wrap.querySelector('.llm-embedding-cloud');
  const stats = wrap.querySelector('.llm-inline-stats');
  let current = 'rei';

  function render() {
    buttons.innerHTML = Object.keys(groups).map(key => `
      <button type="button" class="btn btn-ghost btn-sm ${key === current ? 'llm-chip-active' : ''}" data-word="${key}">${key}</button>
    `).join('');

    const related = groups[current];
    cloud.innerHTML = `
      <span class="llm-node llm-node--core">${current}</span>
      ${related.map((word, index) => `
        <span class="llm-node" style="--delay:${index}">${word}</span>
      `).join('')}
    `;
    stats.innerHTML = `
      <p><strong>${getT('llmEmbL1')}</p>
      <p><strong>${getT('llmEmbL2')}</p>
    `;

    buttons.querySelectorAll('[data-word]').forEach(el => {
      el.addEventListener('click', () => {
        current = el.dataset.word;
        render();
      });
    });
  }

  render();
}

function initLlmAttentionDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { render(); });
  const tokens = ['O', 'gato', 'dormiu', 'no', 'sofá', 'porque', 'ele', 'estava', 'cansado'];
  const links = {
    gato: [
      ['dormiu', 0.82],
      ['ele', 0.76],
      ['cansado', 0.44]
    ],
    ele: [
      ['gato', 0.88],
      ['dormiu', 0.53],
      ['cansado', 0.71]
    ],
    cansado: [
      ['ele', 0.79],
      ['gato', 0.61],
      ['dormiu', 0.48]
    ]
  };

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>${getT('llmAttH')}</h3>
        <p>${getT('llmAttP')}</p>
      </div>
      <div class="llm-attention-sentence"></div>
      <div class="llm-attention-links"></div>
      <div class="demo-formula-box llm-inline-stats"></div>
    </div>
  `;

  const sentence = wrap.querySelector('.llm-attention-sentence');
  const linkBox = wrap.querySelector('.llm-attention-links');
  const stats = wrap.querySelector('.llm-inline-stats');
  let current = 'ele';

  function render() {
    sentence.innerHTML = tokens.map(token => {
      const active = token === current ? 'llm-word--active' : '';
      const related = (links[current] || []).some(([word]) => word === token) ? 'llm-word--related' : '';
      return `<button type="button" class="llm-word ${active} ${related}" data-token="${token}">${token}</button>`;
    }).join('');

    const currentLinks = links[current] || [];
    linkBox.innerHTML = currentLinks.map(([token, weight]) => `
      <div class="llm-link-row">
        <span>${current} → ${token}</span>
        <div class="llm-prob-track"><div class="llm-prob-fill" style="width:${weight * 100}%"></div></div>
        <strong>${Math.round(weight * 100)}%</strong>
      </div>
    `).join('');

    stats.innerHTML = `
      <p><strong>${getT('llmAttL1')}</p>
      <p><strong>${getT('llmAttL2')} <code>${current}</code> ${getT('llmAttL3')}</p>
    `;

    sentence.querySelectorAll('[data-token]').forEach(el => {
      el.addEventListener('click', () => {
        if (links[el.dataset.token]) current = el.dataset.token;
        render();
      });
    });
  }

  render();
}

function initLlmContextDemo(wrap) {
  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>${getT('llmCtxH')}</h3>
        <p>${getT('llmCtxP')}</p>
      </div>
      <textarea class="llm-textarea" rows="4" placeholder="..."></textarea>
      <div class="llm-context-bar"><div class="llm-context-fill"></div></div>
      <div class="llm-context-meta"></div>
      <div class="llm-context-list"></div>
    </div>
  `;

  const input = wrap.querySelector('.llm-textarea');
  const bar = wrap.querySelector('.llm-context-fill');
  const meta = wrap.querySelector('.llm-context-meta');
  const list = wrap.querySelector('.llm-context-list');
  const limit = 220;

  function getBaseMessages() {
    return [
      getT('sysMsg'),
      getT('usrMsg1'),
      getT('astMsg1'),
      getT('usrMsg2'),
      getT('astMsg2')
    ];
  }

  document.addEventListener("foundation:language_changed", () => { render(); });

  function render() {
    const extra = input.value.trim();
    const baseMessages = getBaseMessages();
    const messages = extra ? [...baseMessages, `${getT('usrPre')}${extra}`] : [...baseMessages];
    const fullText = messages.join(' ');
    const used = Math.min(fullText.length, limit);
    const pct = Math.min((used / limit) * 100, 100);
    bar.style.width = `${pct}%`;
    bar.classList.toggle('llm-context-fill--warn', pct > 80);

    meta.innerHTML = `
      <p><strong>${getT('llmCtxUso')}:</strong> ${used}/${limit} ${getT('llmCtxChar')}</p>
      <p>${pct < 100 ? getT('llmCtxOk') : getT('llmCtxFull')}</p>
    `;

    const overflow = Math.max(fullText.length - limit, 0);
    let budget = overflow;
    list.innerHTML = messages.map(msg => {
      const faded = budget > 0;
      budget -= msg.length;
      return `<div class="llm-context-item ${faded ? 'llm-context-item--faded' : ''}">${msg}</div>`;
    }).join('');
  }

  input.addEventListener('input', render);
  render();
}

function initLlmTemperatureDemo(wrap) {
  document.addEventListener("foundation:language_changed", () => { render(); });
  const base = [
    { token: 'clara', p: 0.42 },
    { token: 'útil', p: 0.25 },
    { token: 'criativa', p: 0.18 },
    { token: 'surpreendente', p: 0.15 }
  ];

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>${getT('llmTempH')}</h3>
        <p>${getT('llmTempP')}</p>
      </div>
      <label class="demo-slider-row">
        <span class="demo-slider-label">${getT('temperatura')}</span>
        <input type="range" min="0.4" max="1.8" step="0.1" value="0.8">
        <output>0.8</output>
      </label>
      <div class="llm-prob-list"></div>
      <div class="demo-formula-box llm-inline-stats"></div>
    </div>
  `;

  const slider = wrap.querySelector('input[type="range"]');
  const output = wrap.querySelector('output');
  const list = wrap.querySelector('.llm-prob-list');
  const stats = wrap.querySelector('.llm-inline-stats');

  function render() {
    const temp = Number(slider.value);
    output.textContent = temp.toFixed(1);
    const probs = softmaxFromBase(base.map(item => item.p), temp);
    list.innerHTML = base.map((item, index) => `
      <div class="llm-prob-row">
        <div class="llm-prob-meta">
          <span>${item.token}</span>
          <strong>${probs[index].toFixed(1)}%</strong>
        </div>
        <div class="llm-prob-track"><div class="llm-prob-fill" style="width:${probs[index]}%"></div></div>
      </div>
    `).join('');

    stats.innerHTML = temp < 0.8
      ? `<p><strong>${getT('llmTempL')}</p>`
      : temp > 1.2
        ? `<p><strong>${getT('llmTempHgh')}</p>`
        : `<p><strong>${getT('llmTempM')}</p>`;
  }

  slider.addEventListener('input', render);
  render();
}

/* —— PYTHON VARIABLES PLAYGROUND —— */
function initPyVariablesDemo(wrap) {
  const TYPE_COLORS = {
    int:      { bg: '#6366f133', border: '#6366f1', label: '#818cf8' },
    float:    { bg: '#0ea5e933', border: '#0ea5e9', label: '#38bdf8' },
    bool:     { bg: '#f59e0b33', border: '#f59e0b', label: '#fbbf24' },
    str:      { bg: '#10b98133', border: '#10b981', label: '#34d399' },
    NoneType: { bg: '#64748b33', border: '#64748b', label: '#94a3b8' },
  };

  function inferType(raw) {
    const t = raw.trim();
    if (t === 'True' || t === 'False') return { type: 'bool',     display: t };
    if (t === 'None')                   return { type: 'NoneType', display: 'None' };
    if (/^-?\d+$/.test(t))             return { type: 'int',      display: t };
    if (/^-?\d*\.\d+$/.test(t))        return { type: 'float',    display: t };
    const unquoted = t.replace(/^["'](.*)["']$/, '$1');
    return { type: 'str', display: `"${unquoted}"` };
  }

  function badge(type) {
    const c = TYPE_COLORS[type] || TYPE_COLORS['str'];
    return `<span style="background:${c.bg};border:1px solid ${c.border};color:${c.label};border-radius:6px;padding:2px 10px;font-size:0.78rem;font-family:monospace;font-weight:700;">${type}</span>`;
  }

  let variables = {};

  function render() {
    const rows = Object.entries(variables).map(([name, {display, type}]) => `
      <tr>
        <td style="padding:6px 10px;font-family:monospace;color:#e2e8f0;">${name}</td>
        <td style="padding:6px 10px;font-family:monospace;color:#94a3b8;">${display}</td>
        <td style="padding:6px 10px;">${badge(type)}</td>
        <td style="padding:6px 10px;text-align:center;">
          <button class="py-del-btn" data-name="${name}" style="background:none;border:none;cursor:pointer;color:#f87171;font-size:1rem;" aria-label="del ${name}">✕</button>
        </td>
      </tr>`).join('');

    const memTable = rows
      ? `<table style="width:100%;border-collapse:collapse;">
           <thead><tr style="border-bottom:1px solid #1e293b;">
             <th style="padding:6px 10px;text-align:left;color:#64748b;font-size:0.75rem;">var</th>
             <th style="padding:6px 10px;text-align:left;color:#64748b;font-size:0.75rem;">${getT('pyVarValue')}</th>
             <th style="padding:6px 10px;text-align:left;color:#64748b;font-size:0.75rem;">${getT('pyVarType')}</th>
             <th></th>
           </tr></thead>
           <tbody>${rows}</tbody>
         </table>`
      : `<p style="color:#475569;text-align:center;padding:1.2rem 0.5rem;font-size:0.85rem;">${getT('pyVarHint')}</p>`;

    const output = Object.entries(variables).map(([n, {display, type}]) =>
      `<div><span style="color:#6366f1;">&gt;&gt;&gt; </span><span style="color:#e2e8f0;">${n} = ${display}</span><span style="color:#475569;font-size:0.8rem;"> # ${type}</span></div>`
    ).join('') || `<span style="color:#475569;"># ${getT('pyVarHint')}</span>`;

    wrap.querySelector('#py-memory').innerHTML = memTable;
    wrap.querySelector('#py-output').innerHTML  = output;

    wrap.querySelectorAll('.py-del-btn').forEach(btn =>
      btn.addEventListener('click', () => { delete variables[btn.dataset.name]; render(); })
    );
  }

  const saved = { ...variables };

  wrap.innerHTML = `
    <div class="demo-panel" style="display:flex;flex-direction:column;gap:1.1rem;">
      <h3 style="margin:0;font-size:1rem;color:#e2e8f0;">${getT('pyVarTitle')}</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr auto auto;gap:0.6rem;align-items:end;">
        <div>
          <label style="font-size:0.75rem;color:#94a3b8;display:block;margin-bottom:4px;">${getT('pyVarName')}</label>
          <input id="py-var-name" type="text" placeholder="nome" style="width:100%;box-sizing:border-box;background:#0f172a;border:1px solid #334155;border-radius:8px;padding:8px 12px;color:#e2e8f0;font-family:monospace;font-size:0.9rem;outline:none;">
        </div>
        <div>
          <label style="font-size:0.75rem;color:#94a3b8;display:block;margin-bottom:4px;">${getT('pyVarValue')}</label>
          <input id="py-var-value" type="text" placeholder='42 / 3.14 / "texto" / True' style="width:100%;box-sizing:border-box;background:#0f172a;border:1px solid #334155;border-radius:8px;padding:8px 12px;color:#e2e8f0;font-family:monospace;font-size:0.9rem;outline:none;">
        </div>
        <button id="py-assign-btn" style="background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border:none;border-radius:8px;padding:9px 18px;cursor:pointer;font-weight:600;font-size:0.9rem;white-space:nowrap;">${getT('pyVarAssign')}</button>
        <button id="py-reset-btn" style="background:#1e293b;color:#94a3b8;border:1px solid #334155;border-radius:8px;padding:9px 14px;cursor:pointer;font-size:0.85rem;">${getT('pyVarReset')}</button>
      </div>
      <div id="py-error" style="color:#f87171;font-size:0.83rem;min-height:16px;"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
        <div>
          <div style="font-size:0.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;margin-bottom:6px;">${getT('pyVarMemory')}</div>
          <div id="py-memory" style="background:#0f172a;border:1px solid #1e293b;border-radius:10px;min-height:72px;overflow:auto;"></div>
        </div>
        <div>
          <div style="font-size:0.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;margin-bottom:6px;">${getT('pyVarOutput')}</div>
          <div id="py-output" style="background:#0f172a;border:1px solid #1e293b;border-radius:10px;min-height:72px;padding:10px 14px;font-family:monospace;font-size:0.85rem;line-height:1.7;overflow:auto;"></div>
        </div>
      </div>
      <div class="tip-box" style="font-size:0.84rem;">${getT('pyVarTip')}</div>
    </div>`;

  variables = saved;
  render();

  const nameInput  = wrap.querySelector('#py-var-name');
  const valueInput = wrap.querySelector('#py-var-value');
  const errorEl    = wrap.querySelector('#py-error');

  function assign() {
    const name  = nameInput.value.trim();
    const value = valueInput.value.trim();
    errorEl.textContent = '';
    if (!name || !/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
      errorEl.textContent = getT('pyVarErrName'); nameInput.focus(); return;
    }
    if (!value) {
      errorEl.textContent = getT('pyVarErrEmpty'); valueInput.focus(); return;
    }
    variables[name] = inferType(value);
    nameInput.value = ''; valueInput.value = ''; nameInput.focus();
    render();
  }

  wrap.querySelector('#py-assign-btn').addEventListener('click', assign);
  wrap.querySelector('#py-reset-btn').addEventListener('click', () => { variables = {}; render(); });
  [nameInput, valueInput].forEach(inp =>
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') assign(); })
  );

  document.addEventListener('foundation:language_changed', () => {
    const state = { ...variables };
    initPyVariablesDemo(wrap);
    variables = state;
    render();
  }, { once: true });
}
