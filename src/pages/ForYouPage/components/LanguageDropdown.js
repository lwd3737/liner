import React, { useState } from "react";
import styled, { css } from "styled-components";

import { DropdownMenu, SelectBox } from "common/components";
import { ReactComponent as ExpandIcon } from "assets/images/expand.svg";
import { ReactComponent as CollapseIcon } from "assets/images/collapse.svg";

function LanguageDropdown() {
  const [options, setOptions] = useState({
    1: {
      id: 1,
      optionName: "English",
      isSelected: false,
    },
    2: {
      id: 2,
      optionName: "한국어",
      isSelected: false,
    },
    3: {
      id: 3,
      optionName: "简体字",
      isSelected: false,
    },
    4: {
      id: 4,
      optionName: "繁體字",
      isSelected: false,
    },
    5: {
      id: 5,
      optionName: "日本語",
      isSelected: false,
    },
    6: {
      id: 6,
      optionName: "Others",
      isSelected: false,
    },
    order: [1, 2, 3, 4, 5, 6],
  });

  const getOptionById = (id) => {
    return options[id];
  };

  const getAllOptions = () => {
    return options.order.map((id) => options[id]);
  };

  const onToggleSelectOptionClick = (e, id) => {
    e.stopPropagation();

    const selectedOption = getOptionById(id);

    setOptions({
      ...options,
      [id]: {
        ...selectedOption,
        isSelected: !selectedOption.isSelected,
      },
    });
  };

  return (
    <DropdownMenu Button={Button} style={dropdownStyle}>
      <SelectBox
        headerText={"Select for feed"}
        options={getAllOptions()}
        onOptionClick={onToggleSelectOptionClick}
      />
    </DropdownMenu>
  );
}

const Button = ({ isOpen, onClick }) => {
  return (
    <S.Button onClick={onClick}>
      <span className="text">Languages</span>
      <span className="icon">{isOpen ? <CollapseIcon /> : <ExpandIcon />}</span>
    </S.Button>
  );
};

export default LanguageDropdown;

const dropdownStyle = {
  width: "200px",
};

const S = {
  Button: styled.button`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        display: flex;

        .text {
          color: ${colors.gray1};
          font-weight: ${font.weight.ligher};
          font-size: 14px;
        }

        .icon {
          display: flex;
        }
      `;
    }};
  `,
};
