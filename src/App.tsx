import { Sidebar } from "@/components/layouts/Sidebar";
import { AppRoutes } from "@/routes/AppRoutes";
import { Content, LeftSidebar, Main, PageLayout } from "@atlaskit/page-layout";
import React from "react";

const App = () => {
  return (
    <PageLayout>
      <Content>
        <LeftSidebar width={250} testId="left-sidebar">
          <Sidebar />
        </LeftSidebar>
        <Main>
          <section className="p-8">
            <AppRoutes />
          </section>
        </Main>
      </Content>
    </PageLayout>
  );
};

export default App;
