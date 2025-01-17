import { Button } from "@/components/ui/button/Button";
import { LANGUEAGES } from "@/constants/languages";
import Home from "@/pages";
import UserList from "@/pages/users";
import i18n from "@/plugins/i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h1>My React and TypeScript App!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <Button>{t("HOME")}</Button>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <Button>{t("USERS")}</Button>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        {LANGUEAGES.map(({ code, name }) => (
          <Button key={code} onClick={() => i18n.changeLanguage(code)}>
            {name}
          </Button>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
};

export default App;
