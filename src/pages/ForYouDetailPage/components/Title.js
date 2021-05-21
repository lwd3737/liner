import React from "react";
import styled, { css } from "styled-components";

import { TextLink } from "common/components";

function Title({ title, tags, logo, domain, link }) {
  return (
    <S.Title>
      {tags && (
        <div className="title-tags">
          {tags.map((tag, i) => (
            <span className="tag">#{tag}</span>
          ))}
        </div>
      )}
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
