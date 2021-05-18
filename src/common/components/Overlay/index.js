import React from "react";
import styled from "styled-components";

function Overlay({ style }) {
  return <S.Overlay style={style}></S.Overlay>;
}

export default Overlay;

const S = {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  `,
};
