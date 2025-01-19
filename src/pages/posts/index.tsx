import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PER_PAGE } from "@/constants/constants";
import { usePagination } from "@/hooks/usePagination";
import { usePostsQuery } from "@/services/post/usePostsQuery";
import { formatISODate } from "@/utils/date";
import { Label } from "@atlaskit/form";
import Pagination from "@atlaskit/pagination";
import SectionMessage from "@atlaskit/section-message";
import Spinner from "@atlaskit/spinner";
import TableTree, {
  Cell,
  Header,
  Headers,
  Row,
  Rows,
} from "@atlaskit/table-tree";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PostList = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = usePostsQuery();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState(data || []);

  useEffect(() => {
    setFilteredData(data || []);
  }, [data]);

  const handleSearch = () => {
    setFilteredData(
      searchKeyword.trim() === "" ? getAllData() : getFilteredData()
    );
  };

  const getAllData = () => data || [];

  const getFilteredData = () =>
    (data || []).filter((post) =>
      post.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

  const { setCurrentPage, paginatedData, totalPages } = usePagination({
    data: filteredData || [],
    itemsPerPage: PER_PAGE,
  });

  const convertPaginatedData = paginatedData.map((post) => ({
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

      <div className="w-4/5 max-w-80 mb-4">
        <Label htmlFor={"title"}>제목</Label>
        <Input
          id="title"
          placeholder={t("Search by title")}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.currentTarget.value)}
        />
      </div>
      <Button onClick={handleSearch}>검색</Button>

      <TableTree>
        <Headers>
          <Header width={100}>{t("post.id")}</Header>
          <Header width={120}>{t("post.userId")}</Header>
          <Header width={500}>{t("post.title")}</Header>
          <Header width={200}>{t("post.createdAt")}</Header>
        </Headers>
        <Rows
          items={convertPaginatedData}
          render={({ id, userId, title, createdAt, children = [] }) => (
            <Link to={`/posts/${id}`}>
              <Row
                itemId={id}
                items={children}
                hasChildren={children.length > 0}
              >
                <Cell>{id}</Cell>
                <Cell>{userId}</Cell>
                <Cell>{title}</Cell>
                <Cell>{formatISODate(createdAt)}</Cell>
              </Row>
            </Link>
          )}
        />
      </TableTree>
      <div className="my-4 flex justify-center">
        <Pagination
          nextLabel="Next"
          label="Page"
          pageLabel="Page"
          pages={totalPages}
          previousLabel="Previous"
          onChange={(_, page: number) => {
            console.log({ page });
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default PostList;
