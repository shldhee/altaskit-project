import React from "react";

import AtlaskitSpinner, { SpinnerProps } from "@atlaskit/spinner";

const Spinner = ({ ...props }: SpinnerProps) => {
  return <AtlaskitSpinner {...props} />;
};

export { Spinner };
