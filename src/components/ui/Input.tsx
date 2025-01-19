import React from "react";
import Textfield from "@atlaskit/textfield";
import { TextfieldProps } from "@atlaskit/textfield/types";

const Input = ({ ...props }: TextfieldProps) => {
  return <Textfield {...props} />;
};

export { Input };
