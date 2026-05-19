/**
 * worker.js — Cloudflare Worker
 * Foundation · Handbook Interativo
 *
 * Rotas:
 *   GET /api/stats → proxy para GoatCounter API (token seguro via secret)
 *   *              → serve assets estáticos normalmente
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/config') {
      return handleConfig(env);
    }

    if (url.pathname === '/api/stats') {
      return handleStats(env);
    }

    // Passa tudo mais para os assets estáticos
    return env.ASSETS.fetch(request);
  },
};

function handleConfig(env) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=300',
  };

  const goatcounterConfigured = Boolean(
    env.GOATCOUNTER_SITE && env.GOATCOUNTER_SITE !== 'YOUR_CODE'
  );

  return new Response(JSON.stringify({
    goatcounterConfigured,
    goatcounterSite: goatcounterConfigured ? env.GOATCOUNTER_SITE : null,
  }), { status: 200, headers });
}

async function handleStats(env) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if (!env.GOATCOUNTER_SITE || env.GOATCOUNTER_SITE === 'YOUR_CODE') {
    return new Response(JSON.stringify({
      configured: false,
      reason: 'missing_site',
    }), { status: 200, headers });
  }

  if (!env.GOATCOUNTER_TOKEN) {
    return new Response(JSON.stringify({
      configured: false,
      reason: 'missing_token',
    }), { status: 200, headers });
  }

  try {
    const today = new Date().toISOString().split('T')[0];
    const start = '2026-05-15'; // data de lançamento do site
    const apiUrl =
      `https://${env.GOATCOUNTER_SITE}.goatcounter.com/api/v0/stats/hits` +
      `?start=${start}&end=${today}&limit=50`;

    const resp = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${env.GOATCOUNTER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!resp.ok) {
      throw new Error(`GoatCounter retornou ${resp.status}`);
    }

    const data = await resp.json();
    const hits = data.hits || [];

    // Total de pageviews
    const total = hits.reduce((sum, h) => sum + (h.count || 0), 0);

    // Mapeamento de path → nome legível da seção
    const sectionNames = {
      '/':             'Início',
      '/estatistica':  'Estatística',
      '/python':       'Python',
      '/ia':           'Inteligência Artificial',
      '/sobre':        'Sobre mim',
    };

    // Tópico mais acessado = path com mais hits (excluindo raiz)
    const ranked = [...hits]
      .filter((h) => h.path !== '/')
      .sort((a, b) => b.count - a.count);

    const topPath = ranked[0];
    const topTopic = topPath
      ? sectionNames[topPath.path] || topPath.title || topPath.path
      : null;

    return new Response(JSON.stringify({ configured: true, total, topTopic }), {
      headers: {
        ...headers,
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ configured: false, reason: 'fetch_failed', error: err.message }),
      { status: 200, headers }
    );
  }
}
