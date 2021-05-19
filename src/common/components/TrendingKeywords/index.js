import React from "react";
import styled, { css } from "styled-components";

import { Banner } from "common/components";
import Keyword from "./Keyword";
import { Switch } from "react-router";

const keywords = [
  "html",
  "속보",
  "신문",
  "korea",
  "css",
  "react",
  "커뮤니티",
  "보토",
];

function TrendingKeywords() {
  return (
    <Banner title="Trending Keywords">
      <S.TrendingKeywords>
        {keywords.map((keyword) => (
          <Keyword key={keyword} keyword={keyword} />
        ))}
      </S.TrendingKeywords>
    </Banner>
  );
}

export default TrendingKeywords;

const S = {
  TrendingKeywords: styled.div`
    padding: 3px 12px 12px 12px;
  `,
};
