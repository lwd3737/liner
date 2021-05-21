import React from "react";

import { DetailPageLayout } from "common/templates";
import Head from "./Head";
import Title from "./Title";

function DetailPage({ data }) {
  const { id, title, tags, img, highlights, domain, logo, link } = data || {};
  return (
    <DetailPageLayout
      Head={<Head />}
      Title={
        <Title
          title={title}
          tags={tags}
          logo={logo}
          domain={domain}
          link={link}
        />
      }
      img={img}
      highlights={highlights}
      link={link}
    />
  );
}

export default DetailPage;
