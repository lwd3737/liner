import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import domains from "common/domains";
import theme from "common/theme";

const { foryou, myhighlights, more } = domains;

function Navigation() {
  return (
    <S.Navigation>
      <NavLink className="nav-item" to={foryou} activeStyle={activeStyle}>
        For You
      </NavLink>
      <NavLink className="nav-item" to={myhighlights} activeStyle={activeStyle}>
        My Highlights
      </NavLink>
      <NavLink className="nav-item" to={more} activeStyle={activeStyle}>
        More
      </NavLink>
    </S.Navigation>
  );
}

export default Navigation;

const activeStyle = {
  color: theme.colors.brand2,
  fontWeight: theme.font.weight.bold,
};

const S = {
  Navigation: styled.nav`
    ${({ theme }) => {
      const { font, colors } = theme;

      return css`
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 99999;
        margin-top: 26px;

        .nav-item {
          display: inline-block;
          width: 200px;
          height: 50px;
          padding: 0 16px;
          color: ${colors.gray1};
          font-weight: ${font.weight.lighter};
          font-size: 1.2rem;
          line-height: 2.9;

          &:hover {
            background-color: ${colors.gray3};
            border-radius: 8px;
          }
        }
      `;
    }}
  `,
};
