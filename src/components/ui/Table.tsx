import React from "react";
import TableTree, { TableTreeProps } from "@atlaskit/table-tree";

const Table = <T extends { id: string }>({ ...props }: TableTreeProps<T>) => {
  return <TableTree {...props} />;
};

export { Table };
