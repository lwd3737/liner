import React from "react";
import styled, { css } from "styled-components";

import { Info } from "common/components";

function PageLayout({ children, title, subTitle, info, HeadRight }) {
  return (
    <S.PageLayout>
      <div className="head">
        <div className="left">
          <h1 className="title">{title}</h1>
          {info && <Info info={info} />}
        </div>
        <div className="right">{HeadRight && <HeadRight />}</div>
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
          justify-content: space-between;

          .left {
            display: flex;

            .title {
              margin-bottom: 16px;
              font-size: 2rem;
              font-weight: ${font.weight.bold};
            }
          }

          .right {
            display: flex;
            align-items: flex-end;
          }
        }

        .sub-title {
          margin-bottom: 24px;
          color: ${colors.gray1};
          font-weight: ${font.weight.middle};
          font-size: 0.9rem;
        }
      `;
    }}
  `,
};
