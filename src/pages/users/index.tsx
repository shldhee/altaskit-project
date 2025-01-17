import useUsersQuery from "@/services/user/useUsersQuery";
import React, { Fragment } from "react";

const UserList = () => {
  const { data } = useUsersQuery();

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data?.map((user) => (
          <Fragment key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
