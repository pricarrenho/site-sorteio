import { InputSelect } from "../../components/InputSelect";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeWrapper>
      <S.LeftContent>
        <InputSelect />

        <S.Title>Nome do sorteio</S.Title>

        <div style={{ height: "18px" }}></div>
      </S.LeftContent>

      <S.RightContent>
        <div style={{ height: "37px" }}></div>

        <S.ResultContent>
          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>

          <S.ResultNumberWrapper>
            <S.ResultNumber>06</S.ResultNumber>
          </S.ResultNumberWrapper>
        </S.ResultContent>

        <p>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </S.RightContent>
    </S.HomeWrapper>
  );
};
