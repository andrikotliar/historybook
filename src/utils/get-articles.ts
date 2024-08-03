import { getCollection, type CollectionEntry } from 'astro:content';
import type { RootId } from '../common/types/root-id';

type Options = {
  id: RootId;
  filter?: (entry: CollectionEntry<RootId>) => CollectionEntry<RootId>;
  limit?: number;
};

const getArticles = async ({ id, filter, limit }: Options) => {
  const articles = await getCollection(id, filter);

  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  if (limit) {
    return sortedArticles.slice(0, limit);
  }

  return sortedArticles;
};

export { getArticles };
