import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as AlarmIcon } from "assets/images/alarm.svg";

function Right() {
  return (
    <S.Right>
      <UpgradeButton />
      <AlarmButton />
    </S.Right>
  );
}

const UpgradeButton = () => {
  return <S.UpgradeButton>Upgrade</S.UpgradeButton>;
};

const AlarmButton = () => {
  return (
    <S.AlarmButton>
      <AlarmIcon className="icon" />
    </S.AlarmButton>
  );
};

export default Right;

const S = {
  Right: styled.div`
    display: flex;
    align-items: center;
  `,
  UpgradeButton: styled.button`
    ${({ theme }) => css`
      height: 32px;
      background-color: ${theme.colors.brand1};
      border-radius: 8px;
      padding: 7px 20px;
      margin: 4px 24px 4px 212px;
      color: white;

      &:hover {
        background-color: ${theme.colors.brand2};
      }
    `}
  `,
  AlarmButton: styled.button`
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray3};
    }

    .icon {
      padding: 3px;
    }
  `,
};
