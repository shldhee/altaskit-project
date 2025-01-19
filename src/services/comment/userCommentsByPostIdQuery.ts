import { fetchCommentByPostId } from "@/api/comment";
import { useQuery } from "@tanstack/react-query";

const useCommentsByPostIdQuery = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["comments", "posts", id],
    queryFn: () => fetchCommentByPostId(id),
    onError: (error) => {
      console.log({ error });
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export { useCommentsByPostIdQuery };
