import { useMemo, useState } from "react";

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage: number;
}

const usePagination = <T>({ data, itemsPerPage }: UsePaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const totalPagesCount = useMemo(() => {
    return data ? Math.ceil(data.length / itemsPerPage) : 0;
  }, [data, itemsPerPage]);

  const totalPages = useMemo(() => {
    return Array.from({ length: totalPagesCount }, (_, index) => index + 1);
  }, [totalPagesCount]);

  return {
    setCurrentPage,
    paginatedData,
    totalPages,
  };
};

export { usePagination };
