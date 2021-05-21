import React from "react";

import { IconButton } from "common/components";
import { ReactComponent as AlarmIcon } from "assets/images/alarm.svg";

function AlarmButton({ onClick }) {
  return (
    <IconButton style={style} onClick={onClick}>
      <AlarmIcon />
    </IconButton>
  );
}

export default AlarmButton;

const style = {};
