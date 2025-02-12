import { Button } from "@/components/ui/Button";
import { LANGUEAGES } from "@/constants/constants";

import { changeLanguage } from "@/utils/changeLanguage";
import {
  LinkItem,
  NavigationHeader,
  NestableNavigationContent,
  Section,
  SideNavigation,
} from "@atlaskit/side-navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const SIDEBAR_LINKS = [
  { path: "/", label: "HOME" },
  { path: "/users", label: "USERS" },
  { path: "/todos", label: "TODOS" },
  { path: "/posts", label: "POSTS" },
];

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <SideNavigation label="Project navigation" testId="side-navigation">
      <NavigationHeader>
        <div>
          {LANGUEAGES.map(({ code, name }) => (
            <Button key={code} onClick={() => changeLanguage(code)}>
              {t(name)}
            </Button>
          ))}
        </div>
      </NavigationHeader>
      <NestableNavigationContent initialStack={[]}>
        <Section>
          {SIDEBAR_LINKS.map(({ path, label }) => (
            <LinkItem key={path} href={path}>
              {t(label)}
            </LinkItem>
          ))}
        </Section>
      </NestableNavigationContent>
    </SideNavigation>
  );
};

export { Sidebar };
