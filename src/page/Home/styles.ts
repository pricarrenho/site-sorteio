import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { Select } from "../../components/InputSelect/styles";

export const HomeWrapper = styled.div`
  ${() => css``}
`;

export const HomeContainer = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;

    @media (min-width: 700px) {
      grid-template-columns: 6fr 8fr;
    }
  `}
`;

type LeftContentProps = {
  color: "white" | "green" | "purple" | "pink" | "orange" | "darkGreen";
};

const LeftContentModifier = {
  white: (theme: DefaultTheme) => css`
    background: radial-gradient(
      circle at 330%,
      #efefef 73.9%,
      ${theme.colors.neutral[300]} 74%
    );
  `,
  green: (theme: DefaultTheme) => css`
    background: radial-gradient(
      circle at 330%,
      #efefef 73.9%,
      ${theme.colors.green[100]} 74%
    );
  `,
  purple: (theme: DefaultTheme) => css`
    background: radial-gradient(
      circle at 330%,
      #efefef 73.9%,
      ${theme.colors.purple} 74%
    );
  `,
  pink: (theme: DefaultTheme) => css`
    background: radial-gradient(
      circle at 330%,
      #efefef 73.9%,
      ${theme.colors.pink} 74%
    );
  `,
  orange: (theme: DefaultTheme) => css`
    background: radial-gradient(
      circle at 330%,
      #efefef 73.9%,
      ${theme.colors.orange} 74%
    );
  `,
  darkGreen: (theme: DefaultTheme) => css`
    background: radial-gradient(
      circle at 330%,
      #efefef 73.9%,
      ${theme.colors.green[200]} 74%
    );
  `,
};

export const LeftContent = styled.div<LeftContentProps>`
  ${({ theme, color }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    padding: 48px;
    transition: 0.3s ease;

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

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xl};
    font-weight: 700;
    text-transform: uppercase;
    align-self: center;
  `}
`;

export const RightContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 48px;

    background-color: ${theme.colors.neutral[100]};
  `}
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
    font-size: ${theme.font.sizes.xxl};
    font-weight: 700;
  `}
`;

export const ResultNumberWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
  `}
`;

export const ResultNumber = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[300]};
    font-size: ${theme.font.sizes.lg};
    font-weight: 700;
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;

    align-self: end;
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.sm};
    text-align: right;
  `}
`;
