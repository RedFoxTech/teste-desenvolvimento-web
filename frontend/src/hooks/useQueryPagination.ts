import { api } from "@/services/axios";
import { PaginationResponse } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

interface useQueryPaginationProps {
  url: string;
  queryKeys: string[];
  pageLimit?: number;
  searchParams: { [key: string]: string | undefined };
}
export const useQueryPagination = <DataType>({
  url,
  queryKeys,
  searchParams,
  pageLimit = 20,
}: useQueryPaginationProps) => {
  const getData = async ({ pageParam = 0 }) => {
    const { data } = await api.get<PaginationResponse<DataType>>(url, {
      params: {
        offset: pageParam,
        limit: pageLimit,
        ...searchParams,
      },
    });
    return data;
  };

  const infiniteQuery = useInfiniteQuery(queryKeys, getData, {
    getNextPageParam: (lastPage, pages) => {
      const nextOffset = pages.length * pageLimit;
      return lastPage.next ? nextOffset : undefined;
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return infiniteQuery;
};
