import { ARTICLES_PER_PAGE } from '@/common';

const getPagesCount = (articlesLength: number) => {
  return Math.round(articlesLength / ARTICLES_PER_PAGE);
};

export { getPagesCount };
