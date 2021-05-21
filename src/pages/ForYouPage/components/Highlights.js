import React from "react";
import styled, { css } from "styled-components";

function Highlights({ contents }) {
  return <S.Highlights>{contents}</S.Highlights>;
}

export default Highlights;

const S = {
  Highlights: styled.div`
    ${({ theme }) => {
      return css``;
    }}
  `,
};
