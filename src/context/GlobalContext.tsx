import { createContext, useState } from "react";
import { GlobalContextType, GlobalProviderProps } from "./types";
import { LotteryTypes } from "../types/lottery";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [selectedLottery, setSelectedLottery] =
    useState<LotteryTypes>("initialValue");

  const handleChosenDraw = (value: LotteryTypes) => {
    setSelectedLottery(value);
  };

  return (
    <GlobalContext.Provider value={{ selectedLottery, handleChosenDraw }}>
      {children}
    </GlobalContext.Provider>
  );
};
