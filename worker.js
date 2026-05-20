/**
 * worker.js — Cloudflare Worker
 * Foundation · Handbook Interativo
 *
 * Serve assets estáticos.
 */

export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
