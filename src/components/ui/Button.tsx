import React from "react";
import AtlaskitButton, {
  ButtonProps as AtlaskitButtonProps,
} from "@atlaskit/button/new";

interface ButtonProps extends AtlaskitButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <AtlaskitButton {...props}>{children}</AtlaskitButton>;
};

export { Button };
