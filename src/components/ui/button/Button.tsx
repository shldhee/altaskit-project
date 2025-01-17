import React from "react";
import AtlaskitButton, { ButtonProps } from "@atlaskit/button/new";

const Button = ({ children, ...rest }: ButtonProps) => {
  return <AtlaskitButton {...rest}>{children}</AtlaskitButton>;
};

export { Button };
