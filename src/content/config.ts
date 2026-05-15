import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      // Identité éditoriale
      title: z.string().max(70, 'Title trop long pour le SERP (>70)'),
      description: z
        .string()
        .min(120, 'Meta description trop courte (<120)')
        .max(165, 'Meta description trop longue (>165)'),
      tldr: z.string().max(280).optional(),
      // Dates
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Taxonomie
      tags: z.array(z.string()).min(2).max(8),
      category: z.string().optional(),
      tier: z.enum(['pilier', 'approfondi', 'standard']).default('standard'),
      // Visuels
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      // SEO/GEO
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
      // Workflow
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
