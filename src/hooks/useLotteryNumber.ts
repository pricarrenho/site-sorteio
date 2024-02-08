import { useCallback, useEffect, useState } from "react";
import { LotteryColors, LotteryTypes } from "../types/lottery";

import megasenaLogo from "../assets/logo-mega-sena.png";
import quinaLogo from "../assets/logo-quina.png";
import lotofacilLogo from "../assets/logo-lotofacil.png";
import lotomaniaLogo from "../assets/logo-lotomania.png";
import timemanialogo from "../assets/logo-timemania.png";

type UseLotteryNumberProps = LotteryTypes;

type LotteryLibrary = {
  [key in LotteryTypes]: {
    color: LotteryColors;
    totalNumbers: number;
    numbersDrawn: number;
    logo?: string;
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
    logo: megasenaLogo,
  },
  quina: {
    color: "purple",
    totalNumbers: 80,
    numbersDrawn: 15,
    logo: quinaLogo,
  },
  lotofacil: {
    color: "pink",
    totalNumbers: 25,
    numbersDrawn: 20,
    logo: lotofacilLogo,
  },
  lotomania: {
    color: "orange",
    totalNumbers: 50,
    numbersDrawn: 19,
    logo: lotomaniaLogo,
  },
  timemania: {
    color: "darkGreen",
    totalNumbers: 80,
    numbersDrawn: 10,
    logo: timemanialogo,
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
    logo: currentLottery.logo,
  };
};
