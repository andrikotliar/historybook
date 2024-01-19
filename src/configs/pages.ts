import { PageId } from '@/common';

type Category = {
  key: string;
  filter: string;
  pageTitle: string;
  linkTitle: string;
};

type PageData = {
  id: PageId;
  title: string;
  description: string;
  emoji: string;
  shortTitle: string;
  coverImage: string;
  categories?: Category[];
};

type Mapper = {
  [key in PageId]: PageData;
};

const lessons = {
  id: PageId.LESSONS,
  title: 'Цікаві форми проведення уроків історії в школі',
  description: 'Цікаві форми проведення уроків історії в школі',
  emoji: '📚',
  shortTitle: 'уроки',
  coverImage: '/images/covers/lessons.jpg',
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

const figures = {
  id: PageId.FIGURES,
  title: 'Історичні постаті на уроках історії',
  description: 'Історичні постаті на уроках історії',
  emoji: '📔',
  shortTitle: 'історичні постаті',
  coverImage: '/images/covers/figures.jpg',
};

const news = {
  id: PageId.NEWS,
  title: 'Актуальні події освіти',
  description: 'Актуальні новини та події в освіті України',
  emoji: '📰',
  shortTitle: 'новини',
  coverImage: '/images/covers/news.jpg',
};

const stories = {
  id: PageId.STORIES,
  title: 'Розповіді',
  description: 'Повісті власного авторства',
  emoji: '📖',
  shortTitle: 'розповіді',
  coverImage: '/images/covers/stories.jpg',
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

const pagesMapper: Mapper = {
  [PageId.LESSONS]: lessons,
  [PageId.FIGURES]: figures,
  [PageId.NEWS]: news,
  [PageId.STORIES]: stories,
};

const pagesArray: PageData[] = Object.values(pagesMapper);

export { pagesArray, pagesMapper };
export type { PageData, Category };
