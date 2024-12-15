
export interface Pagination<T> {
    items: T[];
    total: number;
    currentPage: number;
    totalPages: number;
  }
  
  
export type SortOrder = 'asc' | 'desc';
  