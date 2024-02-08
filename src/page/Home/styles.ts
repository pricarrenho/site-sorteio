import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { Select } from "../../components/InputSelect/styles";
import { LotteryColors } from "../../types/lottery";

export const HomeWrapper = styled.div`
  ${() => css``}
`;

export const HomeContainer = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100dvh;

    @media (min-width: 700px) {
      grid-template-columns: 6fr 8fr;
    }
  `}
`;

type LeftContentProps = {
  color: LotteryColors;
};

const LeftContentModifier = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral[300]};

    @media (min-width: 700px) {
      background: radial-gradient(
        circle at 330%,
        #efefef 73.9%,
        ${theme.colors.neutral[300]} 74%
      );
    }
  `,
  green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green[100]};

    @media (min-width: 700px) {
      background: radial-gradient(
        circle at 330%,
        #efefef 73.9%,
        ${theme.colors.green[100]} 74%
      );
    }
  `,
  purple: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.purple};

    @media (min-width: 700px) {
      background: radial-gradient(
        circle at 330%,
        #efefef 73.9%,
        ${theme.colors.purple} 74%
      );
    }
  `,
  pink: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.pink};

    @media (min-width: 700px) {
      background: radial-gradient(
        circle at 330%,
        #efefef 73.9%,
        ${theme.colors.pink} 74%
      );
    }
  `,
  orange: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange};

    @media (min-width: 700px) {
      background: radial-gradient(
        circle at 330%,
        #efefef 73.9%,
        ${theme.colors.orange} 74%
      );
    }
  `,
  darkGreen: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green[200]};

    @media (min-width: 700px) {
      background: radial-gradient(
        circle at 330%,
        #efefef 73.9%,
        ${theme.colors.green[200]} 74%
      );
    }
  `,
};

export const LeftContent = styled.div<LeftContentProps>`
  ${({ theme, color }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 48px;
    padding: 48px 26px;
    transition: 0.3s ease;
    height: 280px;

    @media (min-width: 700px) {
      grid-template-rows: repeat(3, 1fr);
      gap: 0px;
      height: auto;
      padding: 48px;
    }

    ${color && LeftContentModifier[color](theme)};
  `}
`;

export const InputContainer = styled.div`
  ${() => css`
    display: flex;

    ${Select} {
      max-width: 200px;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${() =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      @media (min-width: 700px) {
        justify-content: start;
      }
    `}
`;

export const Image = styled.img`
  ${() =>
    css`
      width: 36px;
      height: 36px;
    `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xl};
    font-weight: 700;
    text-transform: uppercase;
  `}
`;

export const RightContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 48px;
    padding: 48px 26px;
    background-color: ${theme.colors.neutral[100]};
    min-height: calc(100vh - 280px);

    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      gap: 0px;
      padding: 48px;
    }
  `}
`;

export const EmptySpace = styled.div`
  display: none;

  @media (min-width: 700px) {
    display: initial;
  }
`;

export const ResultContent = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
  `}
`;

export const RightTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[300]};
    font-size: 36px;
    font-weight: 700;
    text-align: center;

    @media (min-width: 700px) {
      text-align: end;
      font-size: ${theme.font.sizes.xxl};
    }
  `}
`;

export const ResultNumberWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: ${theme.colors.white};
    border-radius: 50%;

    @media (min-width: 700px) {
      width: 64px;
      height: 64px;
    }
  `}
`;

export const ResultNumber = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[300]};
    font-size: ${theme.font.sizes.md};
    font-weight: 700;

    @media (min-width: 700px) {
      font-size: ${theme.font.sizes.lg};
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media (min-width: 700px) {
      align-items: flex-end;
      justify-content: end;
    }
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.sm};
    text-align: center;

    @media (min-width: 700px) {
      text-align: right;
    }
  `}
`;
