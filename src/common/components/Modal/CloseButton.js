import React from "react";

import { IconButton } from "common/components";
import { ReactComponent as CloseIcon } from "assets/images/close-light.svg";

function CloseButton({ onClick }) {
  return (
    <IconButton>
      <CloseIcon onClick={onClick} />
    </IconButton>
  );
}

export default CloseButton;
