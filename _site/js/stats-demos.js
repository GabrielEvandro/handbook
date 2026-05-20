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
