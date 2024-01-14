import { PageId } from '@/common';
import { limitArray } from '@/helpers';
import { SortDirection } from './enums';
import type {
  FindManyArticlesOptions,
  FindManyArticlesResponse,
} from './types';
import { sortMapper } from '@/services/articles/utils';
import { getCollection } from 'astro:content';

const findManyArticles = async (
  pageId: PageId,
  { limit, sort = SortDirection.DESC, filter }: FindManyArticlesOptions = {},
): Promise<FindManyArticlesResponse> => {
  const collectionData = await getCollection(pageId, filter);

  const sortedArticles = collectionData.sort(sortMapper[sort]);

  if (limit) {
    const limitedArticles = limitArray(sortedArticles, limit);

    return {
      articles: limitedArticles,
      fullLength: sortedArticles.length,
    };
  }

  return {
    articles: sortedArticles,
    fullLength: sortedArticles.length,
  };
};

const ArticlesService = {
  findManyArticles,
};

export { ArticlesService };
