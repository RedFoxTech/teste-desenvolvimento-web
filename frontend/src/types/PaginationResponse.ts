export interface PaginationResponse<Data> {
  count: number;
  next: string;
  previous: string;
  results: Data;
}
