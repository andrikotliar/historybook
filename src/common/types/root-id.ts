import { PageId } from '../enums/page-id';

type RootId = (typeof PageId)[keyof typeof PageId];

export type { RootId };
