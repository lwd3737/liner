import React from "react";
import styled, { css } from "styled-components";

import { Info } from "common/components";

function PageLayout({ children, title, subTitle, info }) {
  return (
    <S.PageLayout>
      <div className="head">
        <h1 className="title">{title}</h1>
        <Info />
      </div>
      <h3 className="sub-title">{subTitle}</h3>

      <content>{children}</content>
    </S.PageLayout>
  );
}

export default PageLayout;

const S = {
  PageLayout: styled.div`
    ${({ theme }) => {
      const { font, colors } = theme;

      return css`
        width: 712px;
        height: 100%;
        padding: 40px 16px;
        margin-left: 224px;

        .head {
          display: flex;

          .title {
            margin-bottom: 16px;
            font-size: 2rem;
            font-weight: ${font.weight.bold};
          }
        }

        .sub-title {
          color: ${colors.gray1};
          font-weight: ${font.weight.middle};
          font-size: 0.9rem;
        }
      `;
    }}
  `,
};
