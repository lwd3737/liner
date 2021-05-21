import React from "react";
import styled from "styled-components";

import { PageLayout } from "common/templates";
import { HighlightsPagesContainer } from "./containers";

const info = {
  textTitle: "My Highlights",
  textContents:
    "All your work, including highlights and comments will be safely stored on this page.",
};

function MyHighlightsPage({ data, increaseMainZIndex }) {
  return (
    <S.MyHighlightsPage>
      <PageLayout
        title="My Highlights"
        subTitle="10 Pages, 2 Highlights"
        info={info}
      >
        <HighlightsPagesContainer
          data={data}
          increaseMainZIndex={increaseMainZIndex}
        />
      </PageLayout>
    </S.MyHighlightsPage>
  );
}

export default MyHighlightsPage;

const S = {
  MyHighlightsPage: styled.div``,
};
