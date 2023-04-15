export interface IPagination {
  switchPage: ({ selected }: { selected: number }) => void;
  pageCount: number;
}
