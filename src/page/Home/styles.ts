import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 4fr 8fr;
    height: 100vh;
  `}
`;

export const LeftContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px;

    background: ${theme.colors.green[100]};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xl};
    font-weight: 700;
  `}
`;

export const RightContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
