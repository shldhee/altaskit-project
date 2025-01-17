import { fetchUsers } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

const useUsersQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    onError: (error) => {
      console.log({ error });
    },
  });
  return {
    data,
    isLoading,
  };
};

export default useUsersQuery;
