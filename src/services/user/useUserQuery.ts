import { fetchUser } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

const useUserQuery = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    onError: (error) => {
      console.log({ error });
    },
  });
  return {
    data,
    isLoading,
  };
};

export { useUserQuery };
