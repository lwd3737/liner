import React from "react";
import styled, { css } from "styled-components";

function IconButton({
  children,
  hasHoverEvent = true,
  style,
  hoverBackgroundColor,
  onClick,
}) {
  return (
    <S.IconButton
      hasHoverEvent={hasHoverEvent}
      style={style}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
    >
      {children}
    </S.IconButton>
  );
}

export default IconButton;

const hoverStyle = css`
  background-color: ${({ theme }) => theme.colors.gray3};
`;

const S = {
  IconButton: styled.span`
    ${({ theme, hasHoverEvent, hoverBackgroundColor }) => {
      const { colors } = theme;

      return css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;

        ${hasHoverEvent &&
        css`
          &:hover {
            ${hoverBackgroundColor
              ? css`
                  background-color: ${colors[hoverBackgroundColor]};
                `
              : hoverStyle}
          }
        `};
      `;
    }}
  `,
};
