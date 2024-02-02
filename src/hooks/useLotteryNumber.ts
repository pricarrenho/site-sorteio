import { useCallback, useEffect, useState } from "react";
import { LotteryColors, LotteryTypes } from "../types/lottery";

type UseLotteryNumberProps = LotteryTypes;

type LotteryLibrary = {
  [key in LotteryTypes]: {
    color: LotteryColors;
    totalNumbers: number;
    numbersDrawn: number;
  };
};

const lotteryLibrary: LotteryLibrary = {
  initialValue: {
    color: "default",
    totalNumbers: 0,
    numbersDrawn: 0,
  },
  "mega-sena": {
    color: "green",
    totalNumbers: 60,
    numbersDrawn: 6,
  },
  quina: {
    color: "purple",
    totalNumbers: 80,
    numbersDrawn: 15,
  },
  lotofacil: {
    color: "pink",
    totalNumbers: 25,
    numbersDrawn: 20,
  },
  lotomania: {
    color: "orange",
    totalNumbers: 50,
    numbersDrawn: 19,
  },
  timemania: {
    color: "darkGreen",
    totalNumbers: 80,
    numbersDrawn: 10,
  },
};

export const useLotteryNumber = (lottery: UseLotteryNumberProps) => {
  const [lotteryNumbers, setLotteryNumbers] = useState<string[]>([]);

  const generateRandomNumbers = (
    totalNumbers: number,
    numbersDrawn: number
  ) => {
    const numbers: string[] = [];

    //Sorteia números não repetidos
    while (numbers.length < numbersDrawn) {
      const randomNumber = Math.floor(Math.random() * totalNumbers) + 1;
      const normalizedValue = `0${randomNumber}`.slice(-2);
      if (!numbers.includes(normalizedValue)) {
        numbers.push(normalizedValue);
      }
    }

    //Ordena os números por ordem crescente
    numbers.sort();

    setLotteryNumbers(numbers);
  };

  const currentLottery = lotteryLibrary[lottery];

  const generateNewNumbers = useCallback(() => {
    generateRandomNumbers(
      currentLottery.totalNumbers,
      currentLottery.numbersDrawn
    );
  }, [currentLottery]);

  useEffect(() => {
    generateNewNumbers();
  }, [lottery, generateNewNumbers]);

  return {
    lotteryNumbers,
    name: lottery,
    color: currentLottery.color,
    generateNewNumbers,
  };
};
