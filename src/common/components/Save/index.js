import React, { useState } from "react";
import styled, { css } from "styled-components";

import { IconButton } from "common/components";
import { ReactComponent as SaveIcon } from "assets/images/save.svg";
import { ReactComponent as SaveFillIcon } from "assets/images/save-fill.svg";

function Save() {
  const [isSaved, setIsSaved] = useState(false);

  const onToggleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <IconButton onClick={onToggleSaveClick}>
      <S.IconWrapper>{isSaved ? <SaveFillIcon /> : <SaveIcon />}</S.IconWrapper>
    </IconButton>
  );
}

export default Save;

const S = {
  IconWrapper: styled.span`
    ${({ theme, isSaved }) => {
      const { colors } = theme;

      return css`
        .save-icon {
          background-color: ${isSaved ? colors.brand2 : "white"};
        }
      `;
    }}
  `,
};
