import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Jean-Baptiste Recolet — SEO et GEO en français',
    description:
      "Articles de fond et veille sur le SEO, le GEO et la transition entre les deux. Méthodes pour Content Managers en 2026.",
    site: context.site ?? 'https://jeanbaptisterecolet.fr',
    customData: '<language>fr-FR</language>',
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      author: 'contact@jeanbaptisterecolet.fr (Jean-Baptiste Recolet)',
    })),
  });
}
