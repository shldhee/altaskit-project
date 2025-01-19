import { fetchPosts } from "@/api/post";
import { useQuery } from "@tanstack/react-query";
const usePostsQuery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export { usePostsQuery };
