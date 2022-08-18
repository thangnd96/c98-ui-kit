import React, { useState, useRef, PropsWithChildren } from "react";
import { useOnClickOutside } from "../../hooks";
import { SelectContext } from "./SelectContext";

import { mergeClass } from "../../utils";

import type { ISelectProps, IOption } from './types'

export const Select: React.FC<PropsWithChildren<ISelectProps>> = ({ children, defaultValue, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<IOption>(defaultValue || null);
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: IOption) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className="select-container" ref={selectContainerRef}>
        <div
          className={showDropdown ? "selected-text active" : "selected-text"}
          onClick={showDropdownHandler}
        >
          {selectedOption ? selectedOption.label : selectPlaceholder}
        </div>
        <ul
          className={
            showDropdown
              ? "select-options show-dropdown-options"
              : "select-options hide-dropdown-options"
          }
        >
          {children}
        </ul>
      </div>
    </SelectContext.Provider>
  );
};
