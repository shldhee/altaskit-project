/* eslint-disable @atlaskit/design-system/no-html-button */
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/Input";
import { Table } from "@/components/ui/Table";
import { PER_PAGE } from "@/constants/constants";
import { usePagination } from "@/hooks/usePagination";
import { usePostsQuery } from "@/services/post/usePostsQuery";
import { Post } from "@/types/post";
import { formatISODate } from "@/utils/date";
import { Label } from "@atlaskit/form";
import Pagination from "@atlaskit/pagination";
import SectionMessage from "@atlaskit/section-message";
import Spinner from "@atlaskit/spinner";
import { Cell, Header, Headers, Row, Rows } from "@atlaskit/table-tree";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const convertPaginatedData = (data: Post[]) =>
  data.map((post) => ({
    id: String(post.id),
    userId: post.userId,
    title: post.title,
    createdAt: post.createdAt,
    content: post.content,
  }));

const PostList = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = usePostsQuery();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState(data || []);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  const { setCurrentPage, paginatedData, totalPages } = usePagination({
    data: filteredData || [],
    itemsPerPage: PER_PAGE,
  });

  const handleSearch = () => {
    const filteredByKeyword = applyKeywordFilter(data || []);
    const filteredByDate = applyDateFilter(filteredByKeyword);
    setFilteredData(filteredByDate);
    setSuggestions([]);
    setCurrentPage(1);
  };

  const applyKeywordFilter = (data: Post[]) =>
    searchKeyword.trim() === ""
      ? data
      : data.filter((post) =>
          post.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );

  const applyDateFilter = (data: Post[]) => {
    if (!startDate || !endDate) return data;

    if (new Date(startDate) > new Date(endDate)) {
      alert(t("startDateGreaterThanEndDate"));
      return data;
    }

    return data.filter((post) => {
      const postDate = new Date(post.createdAt);
      return (
        postDate >= new Date(startDate as string) &&
        postDate <= new Date(endDate as string)
      );
    });
  };

  const handleSuggestions = (value: string) => {
    setSuggestions(value === "" ? [] : getMatchedSuggestions(value));
  };

  const getMatchedSuggestions = (value: string) =>
    (data || [])
      .filter((post) => post.title.toLowerCase().includes(value.toLowerCase()))
      .map((post) => post.title)
      .slice(0, 5);

  useEffect(() => {
    setFilteredData(data || []);
  }, [data]);

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

      <div className="w-4/5 max-w-80 mb-4 relative">
        <Label htmlFor={"title"}>{t("post.title")}</Label>
        <Input
          id="title"
          placeholder={t("post.search-by-title")}
          value={searchKeyword}
          onChange={(e) => {
            const value = e.currentTarget.value;
            setSearchKeyword(value);
            handleSuggestions(value);
          }}
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 w-full z-10 max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  className="px-4 py-2 hover:bg-gray-100 w-full cursor-pointer text-left"
                  onClick={() => {
                    setSearchKeyword(suggestion);
                    setSuggestions([]);
                  }}
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-4/5 max-w-80">
        <DatePicker
          label={t("startDate")}
          id="start-date-picker"
          clearControlLabel="Clear start date"
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="w-4/5 max-w-80 mb-4">
        <DatePicker
          label={t("endDate")}
          id="end-date-picker"
          clearControlLabel="Clear end date"
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <Button appearance="primary" onClick={handleSearch}>
        {t("search")}
      </Button>

      <Table>
        <Headers>
          <Header width={100}>{t("post.id")}</Header>
          <Header width={120}>{t("post.userId")}</Header>
          <Header width={500}>{t("post.title")}</Header>
          <Header width={200}>{t("post.createdAt")}</Header>
        </Headers>
        <Rows
          items={convertPaginatedData(paginatedData)}
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
      </Table>
      <div className="my-4 flex justify-center">
        <Pagination
          nextLabel="Next"
          label="Page"
          pageLabel="Page"
          pages={totalPages}
          previousLabel="Previous"
          onChange={(_, page: number) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default PostList;
