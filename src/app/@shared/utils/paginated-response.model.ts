export interface Pagination {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export interface EntityPagination<T> {
  current_page?: number;
  data: T[];
  from?: number;
  last_page?: number;
  first_page_url?: string;
  last_page_url?: string;
  next_page_url?: string;
  prev_page_url?: string;
  path?: string;
  per_page?: number;
  to?: number;
  total?: number;
}

export interface PaginatedResponse {
  pagination?: Pagination;
}
