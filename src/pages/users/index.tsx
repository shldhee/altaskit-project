import { Select } from "@/components/ui/Select";
import useUsersQuery from "@/services/user/useUsersQuery";
import { OptionType } from "@atlaskit/select";
import React, { Fragment, useState } from "react";

const UserSearchFilterOptions: OptionType[] = [
  { label: "이름", value: "name" },
  { label: "이메일", value: "email" },
];

const UserList = () => {
  const [searchFilter, setSearchFilter] = useState<OptionType>(
    UserSearchFilterOptions[0]
  );
  const { data } = useUsersQuery();

  return (
    <div>
      <h1>User List</h1>
      <div className="w-40">
        <Select
          id="user-search-filter"
          options={UserSearchFilterOptions}
          value={searchFilter}
          onChange={(e) => {
            if (e) {
              setSearchFilter(e);
            }
          }}
        />
      </div>
      <div>현재 선택된 searchFilter: {searchFilter.value}</div>
      <ul>
        {data?.map((user) => (
          <Fragment key={user.id}>
            <li className="">
              <span>{user.name}</span>
              <span>{user.email}</span>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
