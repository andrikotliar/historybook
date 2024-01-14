import { ARTICLES_PER_PAGE } from '@/common';

const countPages = (articlesLength: number) => {
  return Math.round(articlesLength / ARTICLES_PER_PAGE);
};

export { countPages };
