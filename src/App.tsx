import Home from "@/pages";
import UserList from "@/pages/users";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <h1>My React and TypeScript App!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
};

export default App;
