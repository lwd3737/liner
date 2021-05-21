import React from "react";
import styled, { css } from "styled-components";

import { DropdownMenu } from "common/components";

function ShareDropdown({ Button, onToggleModalClick }) {
  return (
    <DropdownMenu Button={Button} isClosedWhenClick={true}>
      <Menus onToggleModalClick={onToggleModalClick} />
    </DropdownMenu>
  );
}

export default ShareDropdown;

function Menus({ onToggleModalClick, onCloseDropdown }) {
  const onMenuItemClick = (e) => {
    onCloseDropdown();
    onToggleModalClick(e);
  };
  return (
    <S.Menus>
      <div className="menu-item" onClick={onMenuItemClick}>
        <div className="text">Full text with highlights</div>
      </div>
      <div className="menu-item" onClick={onMenuItemClick}>
        <div className="text">Highlight summary</div>
      </div>
    </S.Menus>
  );
}
const S = {
  Menus: styled.div`
    ${({ theme }) => {
      const { font, colors } = theme;
      return css`
        .menu-item {
          display: flex;
          align-items: center;
          width: 222px;
          height: 40px;
          padding: 8px 15px;
          font-size: 14px;
          font-weight: ${font.weight.lighter};
          color: ${colors.black2};
          cursor: pointer;

          &:hover {
            background-color: ${colors.gray2};
          }
        }
      `;
    }}
  `,
};
