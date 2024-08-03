import { defineCollection, z } from 'astro:content';
import { PageId } from '../common/enums/page-id';

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.any(),
});

const lessonsCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const storiesCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const figuresCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const newsCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const collections = {
  [PageId.LESSONS]: lessonsCollection,
  [PageId.STORIES]: storiesCollection,
  [PageId.FIGURES]: figuresCollection,
  [PageId.NEWS]: newsCollection,
};

export { collections };
