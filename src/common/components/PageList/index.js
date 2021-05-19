import React from "react";
import styled, { css } from "styled-components";

import PageItem from "./PageItem";

function PageList({ pages }) {
  return (
    <S.PageList>
      {pages && pages.map((page) => <PageItem key={page.id} {...page} />)}
      <PageItem />
      <PageItem />
      <PageItem />
      <PageItem />
      <PageItem />
      <PageItem />
    </S.PageList>
  );
}

export default PageList;

const S = {
  PageList: styled.ul``,
};
