import React from "react";
import styled, { css } from "styled-components";

import Tag from "./Tag";

function Page({ title, domain, tags }) {
  return (
    <S.Page>
      {tags && (
        <div className="page-tags">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
      )}
      <h2 className="page-title">{title}</h2>
      <div className="page-domain">{domain}</div>
    </S.Page>
  );
}

export default Page;

const S = {
  Page: styled.li`
    ${({ theme }) => {
      const { font, colors } = theme;

      return css`
        padding: 8px 20px;

        &:hover {
          background-color: ${colors.gray2};
        }

        .page-tags {
          display: flex;
        }

        .page-title {
          padding: 6px 0;
          font-size: 1rem;
          font-weight: ${font.weight.bold};
          line-height: 1.25;
        }

        .page-domain {
          font-size: 11px;
          font-weight: ${font.weight.lighter};
          color: ${colors.gray6};
        }
      `;
    }}
  `,
};
