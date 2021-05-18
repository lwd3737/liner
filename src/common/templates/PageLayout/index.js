import React from "react";
import styled, { css } from "styled-components";

function PageLayout({ children, title }) {
  return (
    <S.PageLayout>
      <h1 className="title">{title}</h1>

      <content>{children}</content>
    </S.PageLayout>
  );
}

export default PageLayout;

const S = {
  PageLayout: styled.div`
    ${({ theme }) => {
      const { font } = theme;

      return css`
        padding-top: 40px;
        margin-left: 224px;

        .title {
          font-size: 2rem;
          font-weight: ${font.weight.bold};
        }
      `;
    }}
  `,
};
