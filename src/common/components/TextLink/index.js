import React from "react";
import styled, { css } from "styled-components";

function TextLink({ logo, link, text }) {
  return (
    <S.TextLink>
      {logo && <img className="logo" src={logo} />}
      <a className="text" href={link}>
        {text}
      </a>
    </S.TextLink>
  );
}

export default TextLink;

const S = {
  TextLink: styled.span`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        display: flex;
        align-items: center;

        .logo {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }
        .text {
          margin-left: 14px;
          color: ${colors.gray7};
          font-size: 11px;
          text-decoration: underline;
        }
      `;
    }}
  `,
};
