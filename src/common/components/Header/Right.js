import React from "react";
import styled, { css } from "styled-components";

import AlarmButton from "./AlarmButton";
import UpgradeButton from "./UpgradeButton";

function Right() {
  return (
    <S.Right>
      <UpgradeButton />
      <AlarmButton />
    </S.Right>
  );
}

export default Right;

const S = {
  Right: styled.div`
    display: flex;
    align-items: center;
  `,
};
