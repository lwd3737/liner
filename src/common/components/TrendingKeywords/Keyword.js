import React from "react";
import styled, { css } from "styled-components";

import { hover2 } from "common/styles";

function Keyword({ keyword }) {
  return <S.Keyword>#{keyword}</S.Keyword>;
}

export default Keyword;

const S = {
  Keyword: styled.span`
    ${({ theme }) => {
      const { colors, font } = theme;
      return css`
        display: inline-block;
        padding: 4px 8px;
        margin-bottom: 8px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: ${font.weight.middle};
        color: ${colors.black1};

        &:hover {
          ${hover2};
        }
      `;
    }}
  `,
};
