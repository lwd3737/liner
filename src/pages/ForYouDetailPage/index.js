import React from "react";
import styled from "styled-components";

import { DetailPageContainer } from "./containers";

function ForYouDetailPage({ data }) {
  return (
    <S.ForYouDetailPage>
      <DetailPageContainer data={data} />
    </S.ForYouDetailPage>
  );
}

export default ForYouDetailPage;

const S = {
  ForYouDetailPage: styled.div``,
};
