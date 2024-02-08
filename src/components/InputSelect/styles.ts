import styled, { css } from "styled-components";

export const InputSelectWrapper = styled.div`
  ${() =>
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      @media (min-width: 700px) {
        align-items: start;
      }
    `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[100]};
    font-size: ${theme.font.sizes.md};
    font-weight: bold;
    text-align: center;

    @media (min-width: 700px) {
      text-align: start;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    border: none;
    border-right: 16px solid transparent;
    padding: 12px 16px;
    border-radius: 4px;

    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.neutral[300]};

    &:focus {
      outline: none;
    }
  `}
`;
