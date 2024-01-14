import type { ArticleData } from '@/common';
import { SortDirection } from '@/services/articles/enums';
import type { CollectionEntry, CollectionKey } from 'astro:content';

const sortAsc = (a: ArticleData, b: ArticleData) =>
  new Date(a.data.date).getTime() - new Date(b.data.date).getTime();

const sortDesc = (a: ArticleData, b: ArticleData) =>
  new Date(b.data.date).getTime() - new Date(a.data.date).getTime();

const sortMapper = {
  [SortDirection.ASC]: sortAsc,
  [SortDirection.DESC]: sortDesc,
};

export { sortMapper };
