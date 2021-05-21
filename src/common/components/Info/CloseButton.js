import React from "react";
import styled from "styled-components";

import { IconButton } from "common/components";
import { ReactComponent as CloseIcon } from "assets/images/close.svg";

function CloseButton({ onClick }) {
  return (
    <IconButton hasHoverEvent={false} style={style} onClick={onClick}>
      <CloseIcon />
    </IconButton>
  );
}

export default CloseButton;

const style = {
  position: "absolute",
  top: "5px",
  right: "0",
};
