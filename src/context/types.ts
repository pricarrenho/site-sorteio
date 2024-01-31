import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  inputValue: string;
  handleChosenDraw: (value: string) => void;
};
