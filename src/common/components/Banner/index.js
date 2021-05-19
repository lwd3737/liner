import React from "react";
import styled, { css } from "styled-components";

import { shape2 } from "common/styles";

function Banner({ children, title, style }) {
  return (
    <S.Banner style={style}>
      <h2 className="title">{title}</h2>
      {children}
    </S.Banner>
  );
}

export default Banner;

const S = {
  Banner: styled.div`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        ${shape2};
        width: 320px;
        margin-bottom: 16px;
        z-index: -1;

        .title {
          margin-bottom: 6px;
          margin: 0 20px 6px 20px;
          padding: 16px 0;
          border-bottom: 1px solid ${colors.gray5};
          color: ${colors.gray4};
          font-weight: ${font.weight.bold};
        }
      `;
    }}
  `,
};
