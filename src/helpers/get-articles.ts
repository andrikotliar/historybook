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
    return sortedArticles.slice(0, limit);
  }

  return sortedArticles;
};

export { getArticles };
