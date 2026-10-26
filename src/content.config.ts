import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live in content/blog/<locale>/<file>.md. The folder is read at build time only;
// nothing under content/ is copied into dist.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    topic: z.string(),
    locale: z.enum(['fr', 'en']),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    key: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
