import request from "@/plugins/http";
import { User } from "@/types/user";

const fetchUsers = async (): Promise<User[]> => {
  const response = await request.get<User[]>("/users");
  return response.data;
};

export { fetchUsers };
