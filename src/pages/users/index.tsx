import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Table } from "@/components/ui/Table";
import { useUsersQuery } from "@/services/user/useUsersQuery";
import { OptionType } from "@atlaskit/select";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Content = { id: number; name: string; email: string };

const UserSearchFilterValues = {
  NAME: "name",
  EMAIL: "email",
} as const;

const UserSearchFilterOptions: OptionType[] = [
  { label: "이름", value: UserSearchFilterValues.NAME },
  { label: "이메일", value: UserSearchFilterValues.EMAIL },
];

const UserList = () => {
  const [searchFilter, setSearchFilter] = useState<OptionType>(
    UserSearchFilterOptions[0]
  );
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [autoCompleteSearchKeyword, setAutoCompleteSearchKeyword] = useState<
    string[]
  >([]);

  const { data } = useUsersQuery();

  const tableItems = data?.map((user) => ({
    id: String(user.id),
    content: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    hasChildren: false,
  }));

  const handleAutocomplete = (value: string) => {
    if (value === "") return setAutoCompleteSearchKeyword([]);
    if (searchFilter.value === UserSearchFilterValues.NAME) {
      const autoCompleteSearchKeyword = data
        ?.filter((user) => {
          return user.name.includes(value);
        })
        .map((user) => user.name);
      setAutoCompleteSearchKeyword(autoCompleteSearchKeyword || []);
    } else if (searchFilter.value === UserSearchFilterValues.EMAIL) {
      const autoCompleteSearchKeyword = data
        ?.filter((user) => {
          return user.email.includes(value);
        })
        .map((user) => user.email);
      setAutoCompleteSearchKeyword(autoCompleteSearchKeyword || []);
    }
  };

  const handleClickSearch = () => {
    if (searchFilter.value === UserSearchFilterValues.NAME) {
      console.log("이름으로 검색", searchKeyword);
    } else if (searchFilter.value === UserSearchFilterValues.EMAIL) {
      console.log("이메일로 검색", searchKeyword);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <div className="w-96 flex gap-2">
        <Select
          className="w-32"
          id="user-search-filter"
          options={UserSearchFilterOptions}
          value={searchFilter}
          onChange={(e) => {
            if (e) {
              setSearchFilter(e);
            }
          }}
        />
        <div className="relative">
          <Input
            width={160}
            placeholder="검색어를 입력하세요"
            value={searchKeyword}
            onChange={(e) => {
              const value = e.currentTarget.value;
              setSearchKeyword(value);

              handleAutocomplete(value); // debounce 적용
            }}
          />
          {autoCompleteSearchKeyword.length > 0 && (
            <ul className="absolute  bg-gray-500 py-1 w-full"></ul>
          )}
        </div>
        <Button onClick={handleClickSearch}>검색</Button>
      </div>
      <div>현재 선택된 searchFilter: {searchFilter.value}</div>
      <Table
        items={tableItems}
        columns={[
          (content: Content) => <span>{content.id}</span>,
          (content: Content) => (
            <Link to={`/users/${content.id}`}>
              <Button>{content.name}</Button>
            </Link>
          ),
          (content: Content) => <span>{content.email}</span>,
        ]}
        headers={["Id", "Name", "Email"]}
        columnWidths={["200px", "300px"]}
        label="User Table"
      />
    </div>
  );
};

export default UserList;
