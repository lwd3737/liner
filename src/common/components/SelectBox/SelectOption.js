import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as CheckIcon } from "assets/images/check.svg";

function SelectOption({ id, optionName, isSelected, onClick }) {
  const _onClick = (e) => {
    {
      onClick && onClick(e, id);
    }
  };

  return (
    <S.SelectOption isSelected={isSelected} onClick={_onClick}>
      <div className="option-name">{optionName}</div>
      {isSelected && (
        <div className="option-icon">
          <CheckIcon />
        </div>
      )}
    </S.SelectOption>
  );
}

export default SelectOption;

const S = {
  SelectOption: styled.li`
    ${({ theme, isSelected }) => {
      const { colors, font } = theme;

      return css`
        display: flex;
        justify-content: space-between;
        height: 40px;
        padding: 8px 15px;
        color: ${colors.black2};
        font-weight: ${font.weight.lighter};
        cursor: pointer;

        &:hover {
          background-color: ${colors.gray3};
        }

        .option-name {
          display: flex;
          align-items: center;
          color: ${isSelected ? colors.brand2 : colors.black2};
          font-size: 14px;
          font-weight: ${font.weight.middle};
        }

        .option-icon {
          display: flex;
          align-items: center;
        }
      `;
    }}
  `,
};
