import React, { useState } from "react";
import styled, { css } from "styled-components";

import CopyButton from "./CopyButton";

function LinkCopy({ link }) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyClick = () => {
    if (isCopied) return;

    setIsCopied(true);
  };

  const initializeCopyState = () => {
    setIsCopied(false);
  };

  return (
    <S.LinkCopy>
      <div className="link" onClick={onCopyClick}>
        {link}
      </div>
      <CopyButton
        isCopied={isCopied}
        onCopyClick={onCopyClick}
        initializeState={initializeCopyState}
      />
    </S.LinkCopy>
  );
}

export default LinkCopy;

const S = {
  LinkCopy: styled.div`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 36px;
        padding-left: 16px;
        margin-top: 7px;

        .link {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: ${colors.black1};
          font-weight: ${font.weight.lighter};
          font-size: 14px;
          cursor: pointer;
        }
      `;
    }}
  `,
};
