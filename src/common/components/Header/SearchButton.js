import React from "react";

import { IconButton } from "common/components";
import { ReactComponent as SearchIcon } from "assets/images/search.svg";

function SearchButton({ onClick }) {
  return (
    <IconButton style={style} hoverBackgroundColor="gray5" onClick={onClick}>
      <SearchIcon />
    </IconButton>
  );
}

export default SearchButton;

const style = {
  position: "absolute",
  top: "4px",
  right: "10px",
};
