import { fetchTodos } from "@/api/todo";
import { useQuery } from "@tanstack/react-query";

const useTodosQuery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    onError: (error) => {
      // 에러 처리(센트리 연동, axios 상태코드별 처리 등)
      console.log({ error });
    },
  });
  return {
    data,
    isLoading,
    isError,
  };
};

export { useTodosQuery };
