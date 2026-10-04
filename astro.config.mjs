import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nodina.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
