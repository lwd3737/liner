import React from "react";
import styled, { css } from "styled-components";

function OkButton({ onClick }) {
  return <S.OkButton onClick={onClick}>OK</S.OkButton>;
}

export default OkButton;

const S = {
  OkButton: styled.button`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        padding: 8px 12px;
        border-radius: 8px;
        color: ${colors.brand2};
        font-weight: ${font.weight.bold};
        font-size: 16px;

        &:hover {
          background-color: ${colors.brand3};
        }
      `;
    }}
  `,
};
