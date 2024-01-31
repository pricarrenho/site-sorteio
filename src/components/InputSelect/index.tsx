import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export const InputSelect = () => {
  const { handleChosenDraw } = useGlobalContext();

  return (
    <S.InputSelectWrapper>
      <S.Label htmlFor="select">
        Qual sorteio você deseja ver o resultado?
      </S.Label>

      <S.Select
        name="select"
        defaultValue="initialValue"
        onChange={(event) => handleChosenDraw(event.target.value)}
      >
        <option value="initialValue" disabled>
          Escolha um sorteio
        </option>
        <option value="mega-sena">MEGA-SENA</option>
        <option value="quina">QUINA</option>
        <option value="lotofacil">LOTOFACIL</option>
        <option value="lotomania">LOTOMANIA</option>
        <option value="timemania">TIMEMANIA</option>
      </S.Select>
    </S.InputSelectWrapper>
  );
};
