import React from "react";

import AtlassianSelect, {
  SelectProps as AtlassianSelectProps,
} from "@atlaskit/select";

type SelectProps<
  Option,
  IsMulti extends boolean = false
> = AtlassianSelectProps<Option, IsMulti>;

const Select = <Option, IsMulti extends boolean = false>({
  ...props
}: SelectProps<Option, IsMulti>) => {
  return <AtlassianSelect<Option, IsMulti> {...props} />;
};

export { Select };
