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
  const defaults = [10, 12, 14, 18];
  const labels = ['Valor A', 'Valor B', 'Valor C', 'Valor D', 'Outlier'];

  wrap.innerHTML = `
    <div class="demo-panel">
      <div class="demo-controls" id="media-controls"></div>
      <div class="demo-viz">
        <div class="demo-chart demo-chart--mean" id="media-chart"></div>
        <div class="demo-mean-line-wrap" id="media-mean-line"></div>
      </div>
      <div class="demo-formula" id="media-formula"></div>
      <p class="demo-hint">Arraste os sliders. Adicione um valor extremo e veja a média ser "puxada" para cima ou para baixo.</p>
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
        <span>Incluir outlier (${labels[4]})</span>
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
          <span class="demo-bar-label">${isOutlier ? 'outlier' : labels[i] || i + 1}</span>
        </div>
      `;
    }).join('');

    meanLineEl.innerHTML = `
      <div class="demo-mean-line" style="bottom: calc(${(mean / max) * 100}% + 2.5rem)">
        <span class="demo-mean-badge">Média = ${formatNum(mean)}</span>
      </div>
    `;

    const terms = data.join(' + ');
    formulaEl.innerHTML = `
      <div class="demo-formula-box">
        <p><strong>Soma:</strong> ${terms} = <em>${sum}</em></p>
        <p><strong>Quantidade (n):</strong> ${data.length}</p>
        <p class="demo-formula-highlight"><strong>Média = Soma ÷ n = ${sum} ÷ ${data.length} = ${formatNum(mean)}</strong></p>
      </div>
    `;
  }

  renderControls();
  render();
}

/* —— MEDIANA —— */
function initMedianaDemo(wrap) {
  wrap.innerHTML = `
    <div class="demo-panel">
      <div class="demo-controls" id="mediana-controls"></div>
      <p class="demo-step-label" id="mediana-step">Passo 1: valores originais</p>
      <div class="demo-viz demo-viz--numberline" id="mediana-viz"></div>
      <div class="demo-formula" id="mediana-formula"></div>
      <div class="demo-btn-row">
        <button type="button" class="btn btn-ghost btn-sm" id="mediana-sort-btn">Ordenar valores →</button>
        <button type="button" class="btn btn-ghost btn-sm" id="mediana-reset-btn">Resetar</button>
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
        <span class="demo-slider-label">Valor ${i + 1}</span>
        <input type="range" min="0" max="50" step="1" value="${v}" data-idx="${i}" ${state.sorted ? 'disabled' : ''}>
        <output>${v}</output>
      </label>
    `).join('') + `
      <button type="button" class="btn btn-ghost btn-sm" id="mediana-add-btn" ${state.values.length >= 7 ? 'disabled' : ''}>+ Adicionar valor</button>
      ${state.values.length > 3 ? '<button type="button" class="btn btn-ghost btn-sm" id="mediana-remove-btn">− Remover último</button>' : ''}
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
              ${isMed ? '<span class="demo-dot-tag">mediana</span>' : ''}
            </div>
          `;
        }).join('')}
        <div class="demo-median-marker" style="left:${((median - min) / range) * 85 + 5}%"></div>
      </div>
    `;

    stepEl.textContent = state.sorted
      ? 'Passo 2: ordenado — o centro é a mediana'
      : 'Passo 1: valores embaralhados — ordene para achar o centro';

    if (n % 2 === 1) {
      formulaEl.innerHTML = `
        <div class="demo-formula-box">
          <p><em>n = ${n}</em> (ímpar) → mediana = valor do <strong>meio</strong> = posição ${Math.floor(n / 2) + 1}</p>
          <p class="demo-formula-highlight"><strong>Mediana = ${formatNum(median)}</strong></p>
        </div>
      `;
    } else {
      formulaEl.innerHTML = `
        <div class="demo-formula-box">
          <p><em>n = ${n}</em> (par) → média dos dois valores centrais: (${sorted[n / 2 - 1]} + ${sorted[n / 2]}) ÷ 2</p>
          <p class="demo-formula-highlight"><strong>Mediana = ${formatNum(median)}</strong></p>
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
  wrap.innerHTML = `
    <div class="demo-panel">
      <div class="demo-controls" id="moda-controls"></div>
      <div class="demo-viz">
        <div class="demo-chart demo-chart--freq" id="moda-chart"></div>
      </div>
      <div class="demo-formula" id="moda-formula"></div>
      <p class="demo-hint">Ajuste os valores: quando dois ou mais empatarem na contagem, você pode ter mais de uma moda — ou nenhuma, se todos aparecerem igualmente.</p>
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
          <span class="demo-slider-label">Valor ${i + 1}</span>
          <input type="range" min="1" max="30" step="1" value="${b.value}" data-bucket="${i}" data-field="value">
          <output>${b.value}</output>
        </label>
        <label class="demo-slider-row demo-slider-row--count">
          <span class="demo-slider-label">Repetições</span>
          <input type="range" min="0" max="8" step="1" value="${b.count}" data-bucket="${i}" data-field="count">
          <output>${b.count}</output>
        </label>
      </div>
    `).join('') + `
      <button type="button" class="btn btn-ghost btn-sm" id="moda-preset-btn">Exemplo: notas de prova</button>
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
          ${isMode ? '<span class="demo-mode-star">moda</span>' : ''}
        </div>
      `;
    }).join('');

    const expanded = active.flatMap(b => Array(b.count).fill(b.value));
    const freqText = active.map(b => `${b.value} aparece ${b.count}×`).join(' · ') || 'nenhum valor';

    let modeText;
    if (active.length === 0) {
      modeText = 'Defina pelo menos um valor com repetições &gt; 0.';
    } else if (active.length > 1 && active.every(b => b.count === maxCount)) {
      modeText = '<strong>Sem moda única</strong> — todos os valores ativos empatam na frequência.';
    } else if (modes.length === 1) {
      modeText = `<strong>Moda = ${modes[0]}</strong> (maior frequência: ${maxCount})`;
    } else {
      modeText = `<strong>Distribuição multimodal:</strong> modas = ${modes.join(', ')}`;
    }

    formulaEl.innerHTML = `
      <div class="demo-formula-box">
        <p><strong>Conjunto expandido:</strong> [${expanded.join(', ') || '—'}]</p>
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
  const sample = 'Inteligência Artificial aprende padrões em textos, códigos e conversas.';

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>Tokenizer Playground</h3>
        <p>Digite uma frase e veja como um texto longo pode ser quebrado em partes menores.</p>
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
      <p><strong>Tokens gerados:</strong> ${tokens.length}</p>
      <p><strong>Ideia principal:</strong> o modelo lê pedaços de texto, não necessariamente palavras completas.</p>
    `;
  }

  input.addEventListener('input', render);
  render();
}

function initLlmNextTokenDemo(wrap) {
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
        <h3>Predict Next Token</h3>
        <p>Escolha um contexto e veja como o modelo distribui probabilidade entre possíveis continuações.</p>
      </div>
      <div class="demo-btn-row llm-preset-row"></div>
      <div class="llm-next-context"></div>
      <div class="llm-prob-list"></div>
      <div class="demo-btn-row">
        <button type="button" class="btn btn-ghost btn-sm llm-generate-btn">Gerar próximo token</button>
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
    contextEl.innerHTML = `<p><strong>Contexto:</strong> ${currentKey}<span class="llm-cursor">|</span></p>`;
    probList.innerHTML = presets[currentKey].map(item => `
      <div class="llm-prob-row">
        <div class="llm-prob-meta">
          <span>${item.token}</span>
          <strong>${Math.round(item.p * 100)}%</strong>
        </div>
        <div class="llm-prob-track"><div class="llm-prob-fill" style="width:${item.p * 100}%"></div></div>
      </div>
    `).join('');
    resultEl.innerHTML = '<p>Clique em <strong>Gerar próximo token</strong> para simular a escolha.</p>';

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
      <p><strong>Token escolhido:</strong> ${picked.token}</p>
      <p>O modelo não recupera uma resposta pronta: ele escolhe uma continuação plausível e continua o processo a partir dela.</p>
    `;
  });

  render();
}

function initLlmEmbeddingsDemo(wrap) {
  const groups = {
    rei: ['rainha', 'príncipe', 'monarca', 'trono'],
    gato: ['cachorro', 'felino', 'animal', 'pet'],
    código: ['Python', 'função', 'algoritmo', 'debug'],
    hospital: ['médico', 'paciente', 'cirurgia', 'clínica']
  };

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>Embeddings Visualizer</h3>
        <p>Escolha um conceito e veja vizinhos semânticos próximos no espaço vetorial.</p>
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
      <p><strong>Leitura intuitiva:</strong> embeddings aproximam tokens que aparecem em contextos parecidos.</p>
      <p><strong>Importante:</strong> proximidade vetorial não é “entendimento humano”, mas ajuda o modelo a generalizar relações.</p>
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
        <h3>Attention Visualizer</h3>
        <p>Clique em uma palavra para ver quais outras partes da frase recebem mais atenção.</p>
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
      <p><strong>Leitura:</strong> attention não é magia; é um jeito matemático de medir relevância entre partes da sequência.</p>
      <p><strong>Exemplo:</strong> o pronome <code>${current}</code> depende de outras palavras para ser interpretado.</p>
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
  const baseMessages = [
    'Sistema: responda de forma didática.',
    'Usuário: explique transformers.',
    'Assistente: transformer usa attention para relacionar tokens.',
    'Usuário: agora compare com RNNs.',
    'Assistente: RNNs processam sequências de modo mais serial.'
  ];

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>Context Window Simulator</h3>
        <p>Adicione texto e observe a janela de contexto encher. Quando ela passa do limite, as partes mais antigas perdem espaço.</p>
      </div>
      <textarea class="llm-textarea" rows="4" placeholder="Digite mais contexto para a conversa..."></textarea>
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

  function render() {
    const extra = input.value.trim();
    const messages = extra ? [...baseMessages, `Usuário: ${extra}`] : [...baseMessages];
    const fullText = messages.join(' ');
    const used = Math.min(fullText.length, limit);
    const pct = Math.min((used / limit) * 100, 100);
    bar.style.width = `${pct}%`;
    bar.classList.toggle('llm-context-fill--warn', pct > 80);

    meta.innerHTML = `
      <p><strong>Uso da janela:</strong> ${used}/${limit} caracteres simulados</p>
      <p>${pct < 100 ? 'Ainda há espaço para contexto recente.' : 'Limite atingido: mensagens mais antigas precisam ser resumidas ou descartadas.'}</p>
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
  const base = [
    { token: 'clara', p: 0.42 },
    { token: 'útil', p: 0.25 },
    { token: 'criativa', p: 0.18 },
    { token: 'surpreendente', p: 0.15 }
  ];

  wrap.innerHTML = `
    <div class="demo-panel llm-demo-panel">
      <div class="llm-demo-head">
        <h3>Temperature Demo</h3>
        <p>Arraste o slider para ver como a distribuição de probabilidade fica mais concentrada ou mais espalhada.</p>
      </div>
      <label class="demo-slider-row">
        <span class="demo-slider-label">Temperatura</span>
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
      ? '<p><strong>Leitura:</strong> temperatura baixa concentra probabilidade nos candidatos mais fortes.</p>'
      : temp > 1.2
        ? '<p><strong>Leitura:</strong> temperatura alta espalha a distribuição e aumenta a chance de saídas inesperadas.</p>'
        : '<p><strong>Leitura:</strong> temperaturas intermediárias equilibram previsibilidade e variedade.</p>';
  }

  slider.addEventListener('input', render);
  render();
}
