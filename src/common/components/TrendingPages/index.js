import React from "react";
import styled, { css } from "styled-components";

import { Banner } from "common/components";
import Pages from "./Pages";

const pages = [
  {
    title: "Home/Twitter",
    domain: "twitter.com",
  },
  {
    title: "State and Lifecycle - React",
    domain: "ko.reacgjs.org",
    tags: ["자바스크립트"],
  },
  {
    title: "Components and Props - React",
    domain: "ko.reactgs.org",
  },
  {
    title: "자바스크립트 Promise 쉽게 이해하기",
    domain: "joshua1988.github.com",
    tags: ["인프런", "자바스크립트", "자바스크립트 기초"],
  },
  {
    title: "e 학습터",
    domain: "cls6.edunet.net",
    tags: ["e학습터"],
  },
  {
    title: "Post Attendee - Zoom",
    domain: "us04web.zoom.us",
    tags: ["그룹 메시징", "모바일 공동 작업", "애플리케이션 공유"],
  },
];

function TrendingPages() {
  return (
    <Banner title="Trending Pages">
      <S.TrendingPages>
        <Pages pages={pages} />
        <div className="show-more">Show More</div>
      </S.TrendingPages>
    </Banner>
  );
}

export default TrendingPages;

const S = {
  TrendingPages: styled.div`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        .show-more {
          text-align: center;
          padding: 12px 20px;
          font-size: 12px;
          font-weight: ${font.weight.middle};
          color: ${colors.brand1};

          &:hover {
            background-color: ${colors.gray2};
          }
        }
      `;
    }}
  `,
};
