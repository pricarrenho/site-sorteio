import { createContext, useContext, useState } from "react";
import { GlobalContextType, GlobalProviderProps } from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [inputValue, setInputValue] = useState("initialValue");

  const handleChosenDraw = (value: string) => {
    setInputValue(value);
  };

  return (
    <GlobalContext.Provider value={{ inputValue, handleChosenDraw }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
