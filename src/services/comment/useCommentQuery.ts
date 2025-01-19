import { fetchComment } from "@/api/comment";
import { useQuery } from "@tanstack/react-query";
const useCommentQuery = (id: number) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => fetchComment(Number(id)),
    onError: (error) => {
      console.log({ error });
    },
  });

  return {
    data,
    isError,
    isLoading,
  };
};

export { useCommentQuery };
