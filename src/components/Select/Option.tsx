import React from "react";
import { useSelectContext } from "./SelectContext";

import type { IOptionProps } from "./types";

export const Option: React.FC<IOptionProps> = ({ data }) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li className="select-option" onClick={() => changeSelectedOption(data)}>
      {data?.label}
    </li>
  );
};
