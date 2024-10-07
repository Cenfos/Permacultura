import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(), // Campo obligatorio para generar la URL
    description: z.string().optional(),
    date: z.string(),
    body: z.string(),
  }),
});

export const collections = {
  posts,
};
