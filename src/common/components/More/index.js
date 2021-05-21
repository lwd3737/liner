import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { DropdownMenu, SelectBox, Modal } from "common/components";
import MoreButton from "./MoreButton";
import OkButton from "./OkButton";
import CancelButton from "./CancelButton";
import RedButton from "./RedButton";

function More({ options, increaseZIndex }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const getOptionById = (id) => {
    return options.find((option) => option.id === id);
  };

  const onToggleModalClick = (e, id) => {
    e.stopPropagation();

    setSelectedOption(getOptionById(id));
    {
      increaseZIndex && increaseZIndex();
    }
    setIsModalOpen(!isModalOpen);
  };

  const onOptionClick = (e, id) => {
    onToggleModalClick(e, id);
  };

  const renderContent = () => {
    return <div className="more-content">{selectedOption?.message}</div>;
  };

  const renderBottom = () => {
    if (!selectedOption) return null;

    const { id } = selectedOption;
    const buttons = [<CancelButton onClick={onToggleModalClick} />];

    if (id === 1 || id === 2) {
      buttons.push(<OkButton onClick={onToggleModalClick} />);
    } else if (id === 3) {
      buttons.push(<RedButton text="Hide" onClick={onToggleModalClick} />);
    } else if (id === 4) {
      buttons.push(<RedButton text="Delete" onClick={onToggleModalClick} />);
    }

    return <div className="more-bottom">{buttons}</div>;
  };

  return (
    <S.More>
      <DropdownMenu
        isClosedWhenClick={true}
        Button={MoreButton}
        style={dropdownStyle}
      >
        <SelectBox options={options} onOptionClick={onOptionClick} />
      </DropdownMenu>

      <Modal
        title={selectedOption?.title}
        isOpen={isModalOpen}
        Content={renderContent()}
        Bottom={renderBottom()}
        onClick={onToggleModalClick}
      />
    </S.More>
  );
}

export default More;

const dropdownStyle = {
  width: "224px",
};

const S = {
  More: styled.div`
    ${({ theme }) => {
      const { font, colors } = theme;
      return css`
        .more-content {
          padding: 8px 16px;
          color: ${colors.gray1};
        }

        .more-bottom {
          display: flex;
          justify-content: flex-end;
          margin-top: 32px;
        }
      `;
    }}
  `,
};
