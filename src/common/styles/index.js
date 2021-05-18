import { css } from "styled-components";

export const shape1 = css`
  ${({ theme }) => {
    const { colors } = theme;

    return css`
      background-color: ${colors.gray2};
      border: none;
      border-radius: 8px;
    `;
  }};
`;

export const shape2 = css`
  ${({ theme }) => {
    const { colors } = theme;

    return css`
      background-color: ${colors.gray3};
      border-radius: 8px;
    `;
  }};
`;

export const hover = css`
  background-color: ${({ theme }) => theme.colors.gray5};
`;
