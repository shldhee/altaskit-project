/* eslint-disable @atlaskit/design-system/no-html-button */
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Table } from "@/components/ui/Table";
import { useUsersQuery } from "@/services/user/useUsersQuery";
import React, { useEffect, useMemo, useState } from "react";
import { Cell, Header, Headers, Row, Rows } from "@atlaskit/table-tree";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface UserSearchFilterOption {
  label: string;
  value: (typeof UserSearchFilterValues)[keyof typeof UserSearchFilterValues];
}

const UserSearchFilterValues = {
  NAME: "name",
  EMAIL: "email",
} as const;

const UserList = () => {
  const { t } = useTranslation();
  const { data } = useUsersQuery();
  const tableItems = useMemo(() => {
    return data?.map((user) => ({
      id: String(user.id),
      name: user.name,
      email: user.email,
    }));
  }, [data]);

  const translatedOptions = useMemo(
    () => [
      { label: t("name"), value: UserSearchFilterValues.NAME },
      { label: t("email"), value: UserSearchFilterValues.EMAIL },
    ],
    [t]
  );

  const [searchFilter, setSearchFilter] = useState<UserSearchFilterOption>(
    translatedOptions[0]
  );
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(tableItems || []);

  const handleAutoComplete = (value: string) => {
    if (value === "") return resetAutoComplete();

    const suggestions = getFilteredKeywords({
      value,
      filterKey: searchFilter.value,
    });
    setSuggestions(suggestions || []);
  };

  const resetAutoComplete = () => setSuggestions([]);

  const getFilteredKeywords = ({
    value,
    filterKey,
  }: {
    value: string;
    filterKey: (typeof UserSearchFilterValues)[keyof typeof UserSearchFilterValues];
  }) =>
    data
      ?.filter((user) => user[filterKey].includes(value))
      .map((user) => user[filterKey]);

  const handleClickSearch = () => {
    const filteredData = getFilteredData({
      data: tableItems,
      filterKey: searchFilter.value,
      keyword: searchKeyword,
    });
    setFilteredData(filteredData || []);
  };

  useEffect(() => {
    setFilteredData(tableItems || []);
  }, [tableItems]);

  const getFilteredData = ({
    data,
    filterKey,
    keyword,
  }: {
    data: typeof tableItems;
    filterKey: (typeof UserSearchFilterValues)[keyof typeof UserSearchFilterValues];
    keyword: string;
  }) => data?.filter((item) => item[filterKey].includes(keyword));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{t("User-List")}</h2>
      <div className="w-full flex gap-2">
        <Select
          className="w-32"
          id="user-search-filter"
          options={translatedOptions}
          value={searchFilter}
          onChange={(e) => {
            if (e) {
              setSearchFilter(e);
            }
          }}
        />
        <div className="relative w-72">
          <Input
            placeholder={t("Please-enter-a-search-term")}
            value={searchKeyword}
            onChange={(e) => {
              const value = e.currentTarget.value;
              setSearchKeyword(value);
              handleAutoComplete(value); // debounce 적용
            }}
          />
          {suggestions.length > 0 && (
            <ul className="absolute  bg-white py-1 w-full z-10">
              {suggestions.map((keyword, index) => (
                <li key={index} className="">
                  <button
                    className="px-2 py-1 w-full text-left hover:bg-gray-200"
                    onClick={() => {
                      setSearchKeyword(keyword);
                      setSuggestions([]);
                    }}
                  >
                    {keyword}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="my-4">
        <Button onClick={handleClickSearch} appearance="primary">
          {t("search")}
        </Button>
      </div>
      <Table>
        <Headers>
          <Header width={100}>{t("user.id")}</Header>
          <Header width={120}>{t("user.name")}</Header>
          <Header width={500}>{t("user.email")}</Header>
        </Headers>
        <Rows
          items={filteredData}
          render={({ id, name, email, children = [] }) => (
            <Link to={`/users/${id}`}>
              <Row
                itemId={id}
                items={children}
                hasChildren={children.length > 0}
              >
                <Cell>{id}</Cell>
                <Cell>{name}</Cell>
                <Cell>{email}</Cell>
              </Row>
            </Link>
          )}
        />
      </Table>
    </div>
  );
};

export default UserList;
