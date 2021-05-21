import React from "react";

import { IconButton } from "common/components";
import { ReactComponent as InfoIcon } from "assets/images/info.svg";

function InfoButton({ onClick }) {
  return (
    <IconButton style={style} onClick={onClick}>
      <InfoIcon />
    </IconButton>
  );
}

export default InfoButton;

const style = {
  marginLeft: "10px",
};
