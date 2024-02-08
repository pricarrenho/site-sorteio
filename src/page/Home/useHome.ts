import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useLotteryNumber } from "../../hooks/useLotteryNumber";

export const useHome = () => {
  const { selectedLottery } = useGlobalContext();
  const { lotteryNumbers, color, generateNewNumbers, name, logo } =
    useLotteryNumber(selectedLottery);

  const title = name !== "initialValue" && name;
  const isInitialValue = name === "initialValue";

  return {
    color,
    title,
    isInitialValue,
    lotteryNumbers,
    generateNewNumbers,
    logo,
  };
};
