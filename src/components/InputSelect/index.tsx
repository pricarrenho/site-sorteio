import * as S from "./styles";

export const InputSelect = () => {
  return (
    <S.InputSelectWrapper>
      <S.Label htmlFor="select">
        Qual sorteio você deseja ver os resultados?
      </S.Label>

      <S.Select name="select">
        <option value="valor1" disabled>
          Escolha um sorteio
        </option>
        <option value="valor1">MEGA-SENA</option>
        <option value="valor2">QUINA</option>
        <option value="valor3">LOTOFACIL</option>
        <option value="valor3">LOTOMANIA</option>
        <option value="valor3">TIMEMANIA</option>
      </S.Select>
    </S.InputSelectWrapper>
  );
};
