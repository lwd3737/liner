import React, { useState, useEffect } from "react";

import { HighlightsPages, Highlights, Bottom } from "../components";

function HighlightsPagesContainer({ data, increaseMainZIndex }) {
  const [pages, setPages] = useState(null);

  useEffect(function loadPages() {
    setPages(
      data.map((page, i) => {
        const { id, tags, title, highlights, img, domain, logo, link, date } =
          page || {};

        return {
          id,
          title,
          img,
          tags,
          date,
          Highlights: <Highlights contents={highlights} />,
          Bottom: (
            <Bottom domain={domain} logo={logo} link={link} date={date} />
          ),
        };
      })
    );
  }, []);

  return (
    <HighlightsPages pages={pages} increaseMainZIndex={increaseMainZIndex} />
  );
}

export default HighlightsPagesContainer;
