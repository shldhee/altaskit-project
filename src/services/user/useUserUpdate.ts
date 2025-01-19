import { updateUser } from "@/api/user";
import { UpdatableUser } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

const useUserUpdate = () => {
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: ({ id, user }: { id: number; user: UpdatableUser }) =>
      updateUser({
        id,
        user,
      }),
    onSuccess: () => {
      console.log("update user success");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const updateUserMutation = async ({
    id,
    user,
  }: {
    id: number;
    user: UpdatableUser;
  }) => {
    return await mutateAsync({ id, user });
  };

  return { updateUserMutation, isLoading };
};

export default useUserUpdate;
