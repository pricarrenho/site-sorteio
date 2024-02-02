import styled, { DefaultTheme, css } from "styled-components";
import { LotteryColors } from "../../types/lottery";

type ButtonWrapperProps = {
  $styleType: LotteryColors;
};

const ButtonWrapperModifier = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.neutral[300]};
  `,
  green: (theme: DefaultTheme) => css`
    background: ${theme.colors.green[100]};
  `,
  purple: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple};
  `,
  pink: (theme: DefaultTheme) => css`
    background: ${theme.colors.pink};
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.orange};
  `,
  darkGreen: (theme: DefaultTheme) => css`
    background: ${theme.colors.green[200]};
  `,
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${({ theme, $styleType }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: filter 0.2s;

    color: ${theme.colors.neutral[100]};

    &:hover {
      filter: brightness(1.1);
      color: ${theme.colors.white};
    }

    ${$styleType && ButtonWrapperModifier[$styleType](theme)}
  `}
`;
