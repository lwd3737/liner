import React from "react";
import styled, { css } from "styled-components";

import { TextLink, Export, Share, More } from "common/components";
import { highlightsOptions } from "common/components/More/options";
import ShareDropdown from "./ShareDropdown";

function Bottom({ logo, link, domain, date, tags, increaseMainZIndex }) {
  return (
    <S.Bottom>
      <div className="left">
        <TextLink logo={logo} link={link} text={domain} />
      </div>
      <div className="right">
        <Share
          link={link}
          Dropdown={ShareDropdown}
          increaseZIndex={increaseMainZIndex}
        />
        <Export increaseZIndex={increaseMainZIndex} />
        <More options={highlightsOptions} increaseZIndex={increaseMainZIndex} />
      </div>
    </S.Bottom>
  );
}

export default Bottom;

const S = {
  Bottom: styled.div`
    display: flex;
    justify-content: space-between;

    .right {
      display: flex;
    }
  `,
};
