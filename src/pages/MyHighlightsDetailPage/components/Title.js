import React from "react";
import styled, { css } from "styled-components";

import { TextLink } from "common/components";

function Title({ title, logo, domain, link }) {
  return (
    <S.Title>
      <div className="title-text">{title}</div>
      <TextLink logo={logo} domain={domain} link={link} />
    </S.Title>
  );
}

export default Title;

const S = {
  Title: styled.div`
    ${({ theme }) => {
      const { font, colors } = theme;

      return css`
        margin-top: 11px;
        padding-bottom: 16px;
        font-size: 22px;
        font-weight: ${font.weight.bold};
        color: ${colors.black3};

        .title-text {
          margin-bottom: 16px;
        }
      `;
    }}
  `,
};
