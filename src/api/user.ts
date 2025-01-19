import request from "@/plugins/http";
import { User, UpdatableUser } from "@/types/user";

const fetchUser = async (id: number): Promise<User> => {
  const response = await request.get<User>(`/users/${id}`);
  return response.data;
};

const fetchUsers = async (): Promise<User[]> => {
  const response = await request.get<User[]>("/users");
  return response.data;
};

const updateUser = async ({
  id,
  user,
}: {
  id: number;
  user: UpdatableUser;
}): Promise<User> => {
  const response = await request.put<User>(`/users/${id}`, user);
  return response.data;
};

export { fetchUser, fetchUsers, updateUser };
