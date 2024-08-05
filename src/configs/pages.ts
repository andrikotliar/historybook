import { PageId } from '../common/enums/page-id';
import type { CategoryData } from '../common/types/category-data';
import type { PageConfig } from '../common/types/page-config';

const lessons: PageConfig = {
  id: PageId.LESSONS,
  title: 'Цікаві форми проведення уроків історії в школі',
  description: 'Цікаві форми проведення уроків історії в школі',
  emoji: '📚',
  shortTitle: 'уроки',
  navigationTitles: {
    prev: 'Попередній урок',
    next: 'Наступний урок',
  },
  coverImage: '/images/covers/lessons.webp',
  categories: [
    {
      key: '5-grade',
      filter: '5 клас',
      pageTitle: 'Уроки для 5-го класу',
      linkTitle: '5-й клас',
    },
    {
      key: '7-grade',
      filter: '7 клас',
      pageTitle: 'Уроки для 7-го класу',
      linkTitle: '7-й клас',
    },
    {
      key: '8-grade',
      filter: '8 клас',
      pageTitle: 'Уроки для 8-го класу',
      linkTitle: '8-й клас',
    },
    {
      key: 'rebuses',
      filter: 'ребус',
      pageTitle: 'Ребуси',
      linkTitle: 'Ребуси',
    },
  ],
};

const figures: PageConfig = {
  id: 'figures',
  title: 'Історичні постаті на уроках історії',
  description: 'Історичні постаті на уроках історії',
  emoji: '📔',
  shortTitle: 'історичні постаті',
  navigationTitles: {
    prev: 'Попередня стаття',
    next: 'Наступна стаття',
  },
  coverImage: '/images/covers/figures.webp',
  categories: [],
};

const news: PageConfig = {
  id: 'news',
  title: 'Актуальні події освіти',
  description: 'Актуальні новини та події в освіті України',
  emoji: '📰',
  shortTitle: 'новини',
  navigationTitles: {
    prev: 'Попередня новина',
    next: 'Наступна новина',
  },
  coverImage: '/images/covers/news.webp',
  shouldShowDate: true,
  categories: [],
};

const stories: PageConfig = {
  id: 'stories',
  title: 'Розповіді',
  description: 'Повісті власного авторства',
  emoji: '📖',
  shortTitle: 'розповіді',
  navigationTitles: {
    prev: 'Попередня розповідь',
    next: 'Наступна розповідь',
  },
  coverImage: '/images/covers/stories.webp',
  categories: [
    {
      key: 'sun-over-river',
      filter: 'сонце над річкою',
      pageTitle: 'Сонце над річкою',
      linkTitle: 'Сонце над річкою',
    },
    {
      key: 'survive',
      filter: 'завдання - вижити',
      pageTitle: 'Завдання - вижити',
      linkTitle: 'Завдання - вижити',
    },
  ],
};

const pagesMap = {
  lessons,
  figures,
  news,
  stories,
};

const pagesList = Object.values(pagesMap);

const pageCategories = pagesList.reduce<CategoryData[]>(
  (categories, currentPage) => {
    if (currentPage.categories) {
      const mappedCategories = currentPage.categories.map((category) => ({
        ...category,
        rootId: currentPage.id,
      }));

      return [...categories, ...mappedCategories];
    }

    return categories;
  },
  [],
);

export { pagesList, pagesMap, pageCategories };
