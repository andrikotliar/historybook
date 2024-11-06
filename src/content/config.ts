import { defineCollection, z } from 'astro:content';
import { PageId } from '../enums/page-id';
import { CollectionId } from '../enums/collection-id';

const articlesSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
});

const pageContentSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const lessonsCollection = defineCollection({
  type: 'content',
  schema: articlesSchema,
});

const figuresCollection = defineCollection({
  type: 'content',
  schema: articlesSchema,
});

const newsCollection = defineCollection({
  type: 'content',
  schema: articlesSchema,
});

const storiesCollection = defineCollection({
  type: 'content',
  schema: articlesSchema,
});

export const collections = {
  [PageId.LESSONS]: lessonsCollection,
  [PageId.FIGURES]: figuresCollection,
  [PageId.STORIES]: storiesCollection,
  [PageId.NEWS]: newsCollection,
  [CollectionId.PAGES]: pageContentSchema,
};
