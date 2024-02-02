import { ReactElement } from "react";
import { LotteryTypes } from "../types/lottery";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  selectedLottery: LotteryTypes;
  handleChosenDraw: (value: LotteryTypes) => void;
};
