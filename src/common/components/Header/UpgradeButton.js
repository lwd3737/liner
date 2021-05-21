import React from "react";
import styled, { css } from "styled-components";

function UpgradeButton() {
  return <S.UpgradeButton>Upgrade</S.UpgradeButton>;
}

export default UpgradeButton;

const S = {
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
};
