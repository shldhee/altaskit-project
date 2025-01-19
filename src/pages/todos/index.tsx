import { Icon } from "@/components/ui/\bIcon";
import { Spinner } from "@/components/ui/Spinner";
import { Table } from "@/components/ui/Table";
import { useTodosQuery } from "@/services/todo/useTodosQuery";
import { Todo } from "@/types/todo";
import SectionMessage from "@atlaskit/section-message";
import React from "react";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useTodosQuery();

  const tableItems = data?.map((todo) => ({
    id: String(todo.id),
    content: {
      id: todo.id,
      userId: todo.userId,
      title: todo.title,
      completed: todo.completed,
    },
    hasChildren: false,
  }));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto mt-10">
        <SectionMessage title={t("Error")} appearance="error">
          <p>{t("Failed-to-fetch")}</p>
        </SectionMessage>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{t("Todo-List")}</h2>
      <Table
        items={tableItems}
        columns={[
          (content: Todo) => <span>{content.id}</span>,
          (content: Todo) => <span>{content.userId}</span>,
          (content: Todo) => <span>{content.title}</span>,
          (content: Todo) => (
            <span>
              {content.completed ? (
                <Icon type="check" label={t("todo.completed")} />
              ) : (
                <Icon type="unCheck" label={t("todo.incomplete")} />
              )}
            </span>
          ),
        ]}
        headers={[
          t("todo.id"),
          t("todo.userId"),
          t("todo.title"),
          t("todo.completed"),
        ]}
        columnWidths={["100px", "150px", "300px", "130px"]}
      />
    </div>
  );
};

export default TodoList;
