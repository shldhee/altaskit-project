import request from "@/plugins/http";
import { Post } from "@/types/post";

const fetchPost = async (id: number): Promise<Post> => {
  const response = await request.get<Post>(`/posts/${id}`);
  return response.data;
};

const fetchPosts = async (): Promise<Post[]> => {
  const response = await request.get<Post[]>("/posts");
  return response.data;
};

export { fetchPost, fetchPosts };
