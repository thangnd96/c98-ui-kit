import { createContext, useContext } from "react";

import type { ISelectContext } from './types'

const SelectContext = createContext<ISelectContext>({
  selectedOption: null,
  changeSelectedOption: () => null
});

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export { useSelectContext, SelectContext };
