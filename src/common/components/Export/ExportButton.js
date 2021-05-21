import React from "react";

import { IconButton } from "common/components";
import { ReactComponent as ExportIcon } from "assets/images/export.svg";

function ExportButton({ onClick }) {
  return (
    <IconButton onClick={onClick}>
      <ExportIcon />
    </IconButton>
  );
}

export default ExportButton;
