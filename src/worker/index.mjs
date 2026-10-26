import { rootRedirect } from './language.mjs';
export default {
  async fetch(request, env) {
    return rootRedirect(request) || env.ASSETS.fetch(request);
  },
};
