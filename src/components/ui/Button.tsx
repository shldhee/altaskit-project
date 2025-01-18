import React from "react";
import AtlaskitButton, { ButtonProps } from "@atlaskit/button/new";

const Button = ({ children, ...props }: ButtonProps) => {
  return <AtlaskitButton {...props}>{children}</AtlaskitButton>;
};

export { Button };
