import request from "@/plugins/http";
import { Todo } from "@/types/todo";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await request.get<Todo[]>(`/todos`);
  return response.data;
};

export { fetchTodos };
