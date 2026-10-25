import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gabrielctorres.github.io',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});
