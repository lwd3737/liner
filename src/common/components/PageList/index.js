import React from "react";
import styled, { css } from "styled-components";

import PageItem from "./PageItem";

function PageList({ pages, increaseMainZIndex }) {
  return (
    <S.PageList>
      {pages &&
        pages.map((page) => (
          <PageItem
            key={page.id}
            {...page}
            increaseMainZIndex={increaseMainZIndex}
          />
        ))}
    </S.PageList>
  );
}

export default PageList;

const S = {
  PageList: styled.div``,
};
