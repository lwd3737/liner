import React from "react";
import styled from "styled-components";

import { IconButton } from "common/components";
import { ReactComponent as MoreIcon } from "assets/images/more.svg";

function MoreButton({ onClick }) {
  return (
    <S.MoreButton>
      <IconButton onClick={onClick}>
        <MoreIcon />
      </IconButton>
    </S.MoreButton>
  );
}

export default MoreButton;

const S = {
  MoreButton: styled.div``,
};
