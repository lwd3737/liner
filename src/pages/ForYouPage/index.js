import React from "react";
import styled from "styled-components";

import { PageLayout } from "common/templates";

function ForYouPage() {
  return (
    <S.ForYouPage>
      <PageLayout
        title="For You"
        subTitle="Picked by LINER, just for you"
      ></PageLayout>
    </S.ForYouPage>
  );
}

export default ForYouPage;

const S = {
  ForYouPage: styled.div``,
};
