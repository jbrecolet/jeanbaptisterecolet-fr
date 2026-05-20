import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70, 'Title trop long pour le SERP (>70)'),
      description: z
        .string()
        .min(120, 'Meta description trop courte (<120)')
        .max(165, 'Meta description trop longue (>165)'),
      excerpt: z.string().optional(),
      tldr: z.string().max(280).optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).min(2).max(8),
      category: z.string().optional(),
      tier: z.enum(['pilier', 'approfondi', 'standard']).default('standard'),
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      canonical: z.string().url().optional(),
      keywords: z.array(z.string()).optional(),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
