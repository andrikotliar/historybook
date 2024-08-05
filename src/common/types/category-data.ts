import type { PageCategory } from './page-config';
import type { RootId } from './root-id';

type CategoryData = {
  rootId: RootId;
} & PageCategory;

export type { CategoryData };
