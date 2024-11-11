import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { metadataConfig } from './src/configs/metadata';

export default defineConfig({
  site: metadataConfig.url,
  integrations: [sitemap()],
});
