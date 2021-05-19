import React from "react";
import styled, { css } from "styled-components";

function Tag({ tag }) {
  return <S.Tag>#{tag}</S.Tag>;
}

export default Tag;

const S = {
  Tag: styled.span`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        margin-right: 6px;
        font-size: 12px;
        color: ${colors.gray7};
      `;
    }}
  `,
};
