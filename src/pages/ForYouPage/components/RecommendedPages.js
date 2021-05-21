import React from "react";
import styled from "styled-components";

import { PageList } from "common/components";

function RecomendedPages({ pages, increaseMainZIndex }) {
  return <PageList pages={pages} increaseMainZIndex={increaseMainZIndex} />;
}

export default RecomendedPages;
