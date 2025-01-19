import { Button } from "@/components/ui/Button";
import { useCommentsByPostIdQuery } from "@/services/comment/userCommentsByPostIdQuery";
import { usePostQuery } from "@/services/post/usePostQuery";
import { LinkButton } from "@atlaskit/button/new";
import Avatar from "@atlaskit/avatar";
import Comment, {
  CommentAction,
  CommentAuthor,
  CommentTime,
} from "@atlaskit/comment";
import React from "react";
import { useParams } from "react-router-dom";

const sampleAvatar =
  "https://atlassian.design/static/avatar_400x400-195488bbd7e40cd1cb62e71967651b8eaa635560579094f7cde2fd986e152947.jpg";
import SectionMessage from "@atlaskit/section-message";
import { useTranslation } from "react-i18next";
import { formatISODate } from "@/utils/date";

const PostDetail = () => {
  const { postId } = useParams();
  const { data: post } = usePostQuery(Number(postId));
  const { data: comments } = useCommentsByPostIdQuery(Number(postId));
  const { t } = useTranslation();

  return (
    <>
      <div className="max-w-3xl mx-auto p-5">
        <h2 className="mb-4 text-2xl font-bold">{post?.title}</h2>
        <p className="mb-4 text-gray-500">{formatISODate(post?.createdAt)}</p>
        <p className="mb-8">{post?.content}</p>

        <div className="mb-8 flex gap-2">
          <Button
            appearance="primary"
            onClick={() => {
              console.log("edit post");
            }}
          >
            {t("post.edit-post")}
          </Button>
          <Button
            appearance="danger"
            onClick={() => {
              console.log("delete post");
            }}
          >
            {t("post.delete-post")}
          </Button>
        </div>

        <h3 className="mb-4 text-xl font-semibold">{t("post.comments")}</h3>
        <div className="mb-4">
          {comments && comments.length > 0 ? (
            comments.map((comment) => (
              <Comment
                avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
                key={comment.id}
                author={
                  <CommentAuthor>{t("post.comment-author")}</CommentAuthor>
                }
                time={
                  <CommentTime>{formatISODate(comment.createdAt)}</CommentTime>
                }
                content={<p>{comment.content}</p>}
                actions={[
                  <CommentAction
                    key="edit"
                    onClick={() => {
                      console.log("edit comment");
                    }}
                  >
                    {t("Edit")}
                  </CommentAction>,
                  <CommentAction
                    key="delete"
                    onClick={() => {
                      console.log("delete comment");
                    }}
                  >
                    {t("Delete")}
                  </CommentAction>,
                ]}
              />
            ))
          ) : (
            <SectionMessage title={`${t("post.no-comments-yet")}`}>
              <p>{t("post.no-comments-yet-placeholder")}</p>
            </SectionMessage>
          )}
        </div>
        <LinkButton appearance="primary" href={`/posts`}>
          {t("post.back-to-list")}
        </LinkButton>
      </div>
    </>
  );
};

export default PostDetail;
