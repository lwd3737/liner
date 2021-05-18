import React from "react";
import styled from "styled-components";

import { PageLayout } from "common/templates";

function MyHighlightsPage() {
  return (
    <S.MyHighlightsPage>
      <PageLayout title="My Highlights"></PageLayout>
    </S.MyHighlightsPage>
  );
}

export default MyHighlightsPage;

const S = {
  MyHighlightsPage: styled.div``,
};
