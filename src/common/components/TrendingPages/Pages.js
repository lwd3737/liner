import React from "react";
import styled from "styled-components";

import Page from "./Page";

function Pages({ pages }) {
  return (
    <S.Pages>
      {pages && pages.map((page, i) => <Page key={i} {...page} />)}
    </S.Pages>
  );
}

export default Pages;

const S = {
  Pages: styled.ul``,
};
