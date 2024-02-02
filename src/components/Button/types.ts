import { ButtonHTMLAttributes } from "react";
import { LotteryColors } from "../../types/lottery";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: string | number;
  styleType: LotteryColors;
  as?: React.ElementType;
} & ButtonType;
