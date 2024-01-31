import { InputSelect } from "../../components/InputSelect";
import { useGlobalContext } from "../../context/GlobalContext";
import { lotteryLibraryProps } from "./types";
import * as S from "./styles";

export const Home = () => {
  const { inputValue } = useGlobalContext();

  const generateRandomNumbers = (
    totalNumbers: number,
    numbersDrawn: number
  ) => {
    const numbers: number[] = [];

    while (numbers.length < numbersDrawn) {
      const randomNumber = Math.floor(Math.random() * totalNumbers) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  const lotteryLibrary: lotteryLibraryProps[] = [
    {
      name: "initialValue",
      color: "white",
    },
    {
      name: "mega-sena",
      color: "green",
      numbers: generateRandomNumbers(60, 6),
    },
    {
      name: "quina",
      color: "purple",
      numbers: generateRandomNumbers(80, 15),
    },
    {
      name: "lotofacil",
      color: "pink",
      numbers: generateRandomNumbers(25, 20),
    },
    {
      name: "lotomania",
      color: "orange",
      numbers: generateRandomNumbers(50, 19),
    },
    {
      name: "timemania",
      color: "darkGreen",
      numbers: generateRandomNumbers(80, 10),
    },
  ];

  return (
    <S.HomeWrapper>
      {lotteryLibrary
        .filter((item) => item.name === inputValue)
        .map((item) => (
          <S.HomeContainer key={item.name}>
            <S.LeftContent color={item.color}>
              <S.InputContainer>
                <InputSelect />
              </S.InputContainer>

              <S.Title>{item.name === "initialValue" ? "" : item.name}</S.Title>

              <div></div>
            </S.LeftContent>

            <S.RightContent>
              <div></div>

              <S.ResultContent>
                {item.name === "initialValue" ? (
                  <S.RightTitle>
                    Selecione um sorteio para ver o resultado
                  </S.RightTitle>
                ) : (
                  item.numbers?.map((item) =>
                    item >= 10 ? (
                      <S.ResultNumberWrapper>
                        <S.ResultNumber>{item}</S.ResultNumber>
                      </S.ResultNumberWrapper>
                    ) : (
                      <S.ResultNumberWrapper>
                        <S.ResultNumber>0{item}</S.ResultNumber>
                      </S.ResultNumberWrapper>
                    )
                  )
                )}
              </S.ResultContent>

              <S.ButtonContainer>
                <button>Sortear novamente</button>

                <S.Message>
                  Este sorteio é meramente ilustrativo e não possui nenhuma
                  ligação com a CAIXA.
                </S.Message>
              </S.ButtonContainer>
            </S.RightContent>
          </S.HomeContainer>
        ))}
    </S.HomeWrapper>
  );
};
