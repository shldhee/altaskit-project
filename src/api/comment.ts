import request from "@/plugins/http";
import { Comment } from "@/types/comment";

const fetchComment = async (id: number): Promise<Comment> => {
  const response = await request.get<Comment>(`/comments/${id}`);
  return response.data;
};
const fetchCommentByPostId = async (id: number): Promise<Comment[]> => {
  const response = await request.get<Comment[]>(`/comments/post/${id}`);
  return response.data;
};

export { fetchComment, fetchCommentByPostId };
