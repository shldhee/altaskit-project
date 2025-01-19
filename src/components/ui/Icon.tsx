import React from "react";
import CheckboxUncheckedIcon from "@atlaskit/icon/core/checkbox-unchecked";
import CheckboxCheckedIcon from "@atlaskit/icon/core/checkbox-checked";
import { IconProps as AtlaskitIconProps } from "@atlaskit/icon";
import { IconType } from "@/types/icon";

interface IconProps extends AtlaskitIconProps {
  type: IconType;
}

const Icon = ({ type, ...props }: IconProps) => {
  const icons = {
    check: CheckboxCheckedIcon,
    unCheck: CheckboxUncheckedIcon,
  };

  const SelectedIcon = icons[type];

  return <SelectedIcon {...props} />;
};

export { Icon };
