import { fetchPost } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

const usePostQuery = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
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

export { usePostQuery };
