import React from "react";
import styled, { css } from "styled-components";

function Tags({ tags }) {
  return (
    <S.Tags>{tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}</S.Tags>
  );
}

export default Tags;

function Tag({ tag }) {
  return <S.Tag>#{tag}</S.Tag>;
}

const S = {
  Tags: styled.div`
    margin-bottom: 6px;
  `,
  Tag: styled.span`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        color: ${colors.brand2};
        font-weight: ${font.weight.middle};
        font-size: 12px;
        margin-right: 6px;
      `;
    }}
  `,
};
