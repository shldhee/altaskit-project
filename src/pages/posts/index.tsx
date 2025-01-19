import { usePostsQuery } from "@/services/post/usePostsQuery";
import { formatISODate } from "@/utils/date";
import SectionMessage from "@atlaskit/section-message";
import Spinner from "@atlaskit/spinner";
import TableTree, {
  Cell,
  Header,
  Headers,
  Row,
  Rows,
} from "@atlaskit/table-tree";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PostList = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = usePostsQuery();

  const tableItems = data?.map((post) => ({
    id: String(post.id),
    userId: post.userId,
    title: post.title,
    createdAt: post.createdAt,
    content: post.content,
  }));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto mt-10">
        <SectionMessage title={t("Error")} appearance="error">
          <p>{t("Failed-to-fetch")}</p>
        </SectionMessage>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{t("Post-List")}</h2>
      <TableTree>
        <Headers>
          <Header width={100}>{t("post.id")}</Header>
          <Header width={120}>{t("post.userId")}</Header>
          <Header width={500}>{t("post.title")}</Header>
          <Header width={200}>{t("post.createdAt")}</Header>
        </Headers>
        <Rows
          items={tableItems}
          render={({ id, userId, title, createdAt, children = [] }) => (
            <Link to={`/posts/${id}`}>
              <Row
                itemId={id}
                items={children}
                hasChildren={children.length > 0}
              >
                <Cell>{id}</Cell>
                <Cell>{userId}</Cell>
                <Cell singleLine>{title}</Cell>
                <Cell>{formatISODate(createdAt)}</Cell>
              </Row>
            </Link>
          )}
        />
      </TableTree>
    </div>
  );
};

export default PostList;
