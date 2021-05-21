import React from "react";
import styled, { css } from "styled-components";

function CancelButton({ onClick }) {
  return <S.CancelButton onClick={onClick}>Cancel</S.CancelButton>;
}

export default CancelButton;

const S = {
  CancelButton: styled.button`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        padding: 8px 12px;
        border-radius: 8px;
        color: ${colors.gray1};
        font-weight: ${font.weight.lighter};
        font-size: 16px;

        &:hover {
          background-color: ${colors.gray3};
        }
      `;
    }}
  `,
};
