import React from "react";
import styled from "styled-components";

import Search from "./Search";
import Right from "./Right";
import { ReactComponent as Logo } from "assets/images/logo.svg";

function Header() {
  return (
    <S.Header>
      <Logo />
      <Search />
      <Right />
    </S.Header>
  );
}

export default Header;

const S = {
  Header: styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 1280px;
    height: 64px;
    margin: 0 auto;
    padding: 15px;
    z-index: 2;
  `,
};
