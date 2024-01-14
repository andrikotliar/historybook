import type { ArticleData } from '@/common';
import { SortDirection } from '@/services/articles/enums';
import type { CollectionEntry, CollectionKey } from 'astro:content';

type FindManyArticlesOptions = {
  limit?: number;
  sort?: SortDirection;
  filter?: (article: CollectionEntry<CollectionKey>) => boolean;
};

type FindManyArticlesResponse = {
  articles: ArticleData[];
  fullLength: number;
};

type FindOneArticleOptions = {
  slug: string;
  pageId: string;
};

type FindOneArticleResponse = {
  data: ArticleData[];
  content: string;
};

export type {
  FindManyArticlesOptions,
  FindManyArticlesResponse,
  FindOneArticleOptions,
  FindOneArticleResponse,
};
