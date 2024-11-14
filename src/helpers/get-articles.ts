import { getCollection, type CollectionEntry } from 'astro:content';
import type { Collections } from '../types/collections';

type Options = {
  collectionName: Collections;
  filter?: (
    data: CollectionEntry<Collections>,
  ) => Promise<CollectionEntry<Collections>>;
  limit?: number;
};

const getArticles = async ({ collectionName, filter, limit }: Options) => {
  const entries = await getCollection(collectionName, filter);

  const sortedArticles = entries.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  if (limit) {
    return {
      articles: sortedArticles.slice(0, limit),
      total: entries.length,
    };
  }

  return {
    articles: sortedArticles,
    total: entries.length,
  };
};

export { getArticles };
