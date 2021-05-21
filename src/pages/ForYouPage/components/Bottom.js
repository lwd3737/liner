import React from "react";
import styled from "styled-components";

import { TextLink, Save, Share, More } from "common/components";
import { foryouOptions } from "common/components/More/options";

function Bottom({ logo, link, domain, increaseMainZIndex }) {
  return (
    <S.Bottom>
      <div className="left">
        <TextLink logo={logo} link={link} text={domain} />
      </div>
      <div className="right">
        <Save />
        <Share link={link} increaseZIndex={increaseMainZIndex} />
        <More options={foryouOptions} increaseZIndex={increaseMainZIndex} />
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
