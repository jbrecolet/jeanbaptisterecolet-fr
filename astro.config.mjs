// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeanbaptisterecolet.fr',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
      filter: (page) => !page.includes('/mentions-legales'),
    }),
    partytown({
      config: { forward: ['dataLayer.push', 'gtag'] },
    }),
    mdx(),
  ],
  prefetch: {
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  experimental: {
    contentIntellisense: true,
  },
});
