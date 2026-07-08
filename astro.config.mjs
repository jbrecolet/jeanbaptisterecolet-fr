// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://www.jeanbaptisterecolet.fr',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
      filter: (page) => !page.includes('/mentions-legales'),
    }),
    mdx(),
  ],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
  prefetch: {
    defaultStrategy: 'viewport',
  },
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  experimental: {
    contentIntellisense: true,
  },
});
