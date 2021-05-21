import React from "react";
import styled from "styled-components";

import { PageLayout } from "common/templates";
import { RecommendedPagesContainer } from "./containers";
import { LanguageDropdown } from "./components";

const info = {
  textTitle: "For You",
  textContents:
    "We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets.",
};

function ForYouPage({ data, increaseMainZIndex }) {
  return (
    <S.ForYouPage>
      <PageLayout
        title="For You"
        subTitle="Picked by LINER, just for you"
        info={info}
        HeadRight={LanguageDropdown}
      >
        <RecommendedPagesContainer
          data={data}
          increaseMainZIndex={increaseMainZIndex}
        />
      </PageLayout>
    </S.ForYouPage>
  );
}

export default ForYouPage;

const S = {
  ForYouPage: styled.div``,
};
