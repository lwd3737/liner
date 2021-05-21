import React, { useState } from "react";
import styled, { css } from "styled-components";

import SelectOption from "./SelectOption";

function SelectBox({ headerText, options, onOptionClick, onCloseDropdown }) {
  const _onOptionClick = (e, id) => {
    {
      onCloseDropdown && onCloseDropdown();
    }
    onOptionClick(e, id);
  };

  return (
    <S.SelectBox>
      {headerText && <h3 className="header">{headerText}</h3>}
      <ul className="options-wrapper">
        {options &&
          options.map((option) => (
            <SelectOption
              key={option.id}
              {...option}
              onClick={(e) => _onOptionClick(e, option.id)}
            />
          ))}
      </ul>
    </S.SelectBox>
  );
}

export default SelectBox;

const S = {
  SelectBox: styled.div`
    ${({ theme }) => {
      const { colors, font } = theme;
      return css`
        .header {
          height: 36px;
          padding: 8px 15px;
          color: ${colors.gray4};
          font-weight: ${font.weight.bold};
        }
      `;
    }}
  `,
};
