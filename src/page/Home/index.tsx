import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useHome } from "./useHome";
import * as S from "./styles";

export const Home = () => {
  const { color, isInitialValue, title, lotteryNumbers, generateNewNumbers } =
    useHome();

  return (
    <S.HomeWrapper>
      <S.HomeContainer>
        <S.LeftContent color={color}>
          <S.InputContainer>
            <InputSelect />
          </S.InputContainer>

          <S.Title>{title}</S.Title>
        </S.LeftContent>

        <S.RightContent>
          <S.EmptySpace />

          <S.ResultContent>
            {isInitialValue ? (
              <S.RightTitle>
                Selecione um sorteio para gerar os números sorteados
              </S.RightTitle>
            ) : (
              lotteryNumbers.map((item, index) => (
                <S.ResultNumberWrapper key={index}>
                  <S.ResultNumber>{item}</S.ResultNumber>
                </S.ResultNumberWrapper>
              ))
            )}
          </S.ResultContent>

          <S.ButtonContainer onClick={generateNewNumbers}>
            {!isInitialValue && (
              <Button styleType={color}>Sortear novamente</Button>
            )}

            <S.Message>
              Este sorteio é meramente ilustrativo e não possui nenhuma ligação
              com a CAIXA.
            </S.Message>
          </S.ButtonContainer>
        </S.RightContent>
      </S.HomeContainer>
    </S.HomeWrapper>
  );
};
