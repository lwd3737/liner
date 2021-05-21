import { PageLayout } from "common/templates";
import React, { useState, useEffect } from "react";

import { RecommendedPages, Tags, Highlights, Bottom } from "../components";

function RecomendedPagesContainer({ data, increaseMainZIndex }) {
  const [pages, setPages] = useState(null);

  useEffect(function loadPages() {
    setPages(
      data.map((page, i) => {
        const { id, tags, title, highlights, img, domain, logo, link } =
          page || {};

        return {
          id,
          title,
          img,
          Tags: <Tags tags={tags} />,
          Highlights: <Highlights contents={highlights} />,
          Bottom: <Bottom domain={domain} logo={logo} link={link} />,
        };
      })
    );
  }, []);

  return (
    <RecommendedPages pages={pages} increaseMainZIndex={increaseMainZIndex} />
  );
}

export default RecomendedPagesContainer;
