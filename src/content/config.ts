import { PageId } from '@/common';
import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().or(z.date()),
});

const lessons = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const figures = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const news = defineCollection({
  type: 'content',
  schema: articleSchema,
});
const stories = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const pages = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const collections = {
  [PageId.LESSONS]: lessons,
  [PageId.FIGURES]: figures,
  [PageId.NEWS]: news,
  [PageId.STORIES]: stories,
  [PageId.PAGES]: pages,
};

export { collections };
