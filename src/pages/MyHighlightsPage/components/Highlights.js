import React from "react";
import styled, { css } from "styled-components";

function Highlights({ contents }) {
  return (
    <S.Highlights>
      {contents &&
        contents.map((highlight, i) => (
          <Highlight key={i} highlight={highlight} />
        ))}
    </S.Highlights>
  );
}

export default Highlights;

const Highlight = ({ highlight }) => {
  return <S.Highlight>{highlight}</S.Highlight>;
};

const S = {
  Highlights: styled.div`
    ${({ theme }) => {
      return css``;
    }}
  `,
  Highlight: styled.p`
    ${({ theme }) => {
      return css``;
    }}
  `,
};
