import React from "react";
import styled, { css } from "styled-components";

function RedButton({ text, onClick }) {
  return <S.RedButton onClick={onClick}>{text}</S.RedButton>;
}

export default RedButton;

const S = {
  RedButton: styled.button`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        padding: 8px 12px;
        border-radius: 8px;
        color: ${colors.red1};
        font-weight: ${font.weight.bold};
        font-size: 16px;

        &:hover {
          background-color: ${colors.red2};
        }
      `;
    }}
  `,
};
