import type { CategoryKey } from '../enums/category-key';
import { PageId } from '../enums/page-id';

type PageCategory = {
  key: (typeof CategoryKey)[keyof typeof CategoryKey];
  filter: string;
  pageTitle: string;
  linkTitle: string;
};

type PageConfig = {
  id: (typeof PageId)[keyof typeof PageId];
  title: string;
  description: string;
  emoji: string;
  shortTitle: string;
  navigationTitles: {
    prev: string;
    next: string;
  };
  coverImage: string;
  categories: PageCategory[];
  shouldShowDate?: boolean;
};

export type { PageConfig, PageCategory };
