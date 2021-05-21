import React, { useEffect } from "react";
import styled, { css } from "styled-components";

function CopyButton({ isCopied, onCopyClick, initializeState }) {
  useEffect(
    function initializeCopyState() {
      if (isCopied) {
        setTimeout(() => initializeState(), 3000);
      }
    },
    [isCopied]
  );

  return (
    <S.CopyButton isCopied={isCopied} onClick={onCopyClick}>
      <span className="copy">Copy</span>
      <span className="isCopied">Copied</span>
    </S.CopyButton>
  );
}

export default CopyButton;

const S = {
  CopyButton: styled.button`
    ${({ theme, isCopied }) => {
      const { colors, font } = theme;

      return css`
        position: relative;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${colors.brand2};
        font-weight: ${font.weight.bold};
        font-size: 14px;

        &:hover {
          background-color: ${isCopied ? "white" : colors.brand3};
        }
        .copy {
          display: inline-block;
          opacity: ${isCopied ? "0" : "1"};
          transition: opacity 0.25s ease;
        }

        .isCopied {
          display: inline-block;
          position: absolute;
          left: 4px;
          width: ${isCopied ? "auto" : "0"};
          opacity: ${isCopied ? "1" : "0"};
          transition: opacity 0.5s ease;
        }
      `;
    }}
  `,
};
