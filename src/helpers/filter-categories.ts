import type { ArticleData } from '@/common';

const filterCategories =
  (filterCondition: string) => (article: ArticleData) => {
    return article.data.title.toLowerCase().includes(filterCondition);
  };

export { filterCategories };
