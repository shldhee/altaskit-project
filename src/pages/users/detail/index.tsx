import { useUserQuery } from "@/services/user/useUserQuery";
import React from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();

  const { data } = useUserQuery(Number(userId));

  return (
    <div>
      <h1>User Detail</h1>
      <p>User ID: {userId}</p>
      {data &&
        Object.entries(data).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      {/* 수정 페이지로 이동하는 링크 */}
      <Link to={`/users/${userId}/edit`}>Edit User</Link>
    </div>
  );
};

export default UserDetail;
