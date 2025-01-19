interface User {
  id: number;
  name: string;
  email: string;
}

type UpdatableUser = Omit<User, "id">;

export { User, UpdatableUser };
