import React from "react";
import styled from "styled-components";

import { DetailPageContainer } from "./containers";

function MyHighlightsDetailPage({ data }) {
  return (
    <S.MyHighlightsDetailPage>
      <DetailPageContainer data={data} />
    </S.MyHighlightsDetailPage>
  );
}

export default MyHighlightsDetailPage;

const S = {
  MyHighlightsDetailPage: styled.div``,
};
