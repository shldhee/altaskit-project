import Home from "@/pages";
import UserList from "@/pages/users";
import UserDetail from "@/pages/users/detail";
import UserEdit from "@/pages/users/detail/edit";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<UserList />} />
    <Route path="/users/:userId" element={<UserDetail />} />
    <Route path="/users/:userId/edit" element={<UserEdit />} />
  </Routes>
);

export { AppRoutes };
