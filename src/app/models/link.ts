import { Pageable } from './pageable';
import { Sort } from './sort';
import { User } from './user';

export interface LinkPageable {
  content: Link[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Link {
  id: number;
  title: string;
  description: string;
  createdBy: User;
  createdIn: Date;
  updatedBy: User;
  updatedIn: Date;
}
