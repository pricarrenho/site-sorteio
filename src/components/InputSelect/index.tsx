import { useGlobalContext } from "../../hooks/useGlobalContext";
import { LotteryTypes } from "../../types/lottery";
import * as S from "./styles";

export const InputSelect = () => {
  const { handleChosenDraw, selectedLottery } = useGlobalContext();

  const handleInputChange = (inputValue: LotteryTypes) => {
    handleChosenDraw(inputValue);
  };

  return (
    <S.InputSelectWrapper>
      <S.Label htmlFor="select">
        Qual sorteio você deseja gerar os números?
      </S.Label>

      <S.Select
        name="select"
        value={selectedLottery}
        onChange={(event) =>
          handleInputChange(event.target.value as LotteryTypes)
        }
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
