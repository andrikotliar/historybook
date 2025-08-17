import { PageId } from '../enums/page-id';

export type PageCategoryConfig = {
  key: string;
  filter: string;
  pageTitle: string;
  linkTitle: string;
};

export type PageCategoryWithRootId = PageCategoryConfig & {
  rootId: PageId;
};

export type PageConfig = {
  id: PageId;
  title: string;
  description: string;
  emoji: string;
  shortTitle: string;
  navigationTitles: {
    prev: string;
    next: string;
  };
  coverImage: string;
  categories: PageCategoryConfig[];
  shouldShowDate?: boolean;
  defaultLimit: number;
};

type PagesConfigMap = {
  [key in PageId]: PageConfig;
};

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
  defaultLimit: 14,
};

const figures: PageConfig = {
  id: PageId.FIGURES,
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
  defaultLimit: 8,
};

const stories: PageConfig = {
  id: PageId.STORIES,
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
  defaultLimit: 10,
};

export const pagesMap: PagesConfigMap = {
  lessons,
  figures,
  stories,
};

export const pagesList = Object.values(pagesMap);

export const pageCategories = pagesList.reduce<PageCategoryWithRootId[]>(
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
