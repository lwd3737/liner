import React, { useState } from "react";
import styled from "styled-components";

import { Overlay } from "common/components";
import { shape1 } from "common/styles";
import SearchButton from "./SearchButton";

function Search({ increaseHeaderZIndex }) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
    increaseHeaderZIndex();
  };

  const toggleOverlay = () => {
    setIsFocused(!isFocused);
    increaseHeaderZIndex();
  };

  return (
    <S.Search>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="headerSearch"
          value={text}
          placeholder="Search on LINER"
          onChange={onChange}
          onFocus={toggleOverlay}
          onBlur={toggleOverlay}
        />
        <SearchButton />
      </form>

      {isFocused && <Overlay style={overlayStyle} />}
    </S.Search>
  );
}

export default Search;

const overlayStyle = {
  top: "64px",
};

const S = {
  Search: styled.div`
    width: 1280px;
    height: 40px;

    form {
      position: absolute;
      left: 240px;

      input {
        ${shape1};
        width: 680px;
        padding: 10px 54px 11px 16px;
        font-size: 1rem;
        color: #333;

        &::placeholder {
          color: rgba(0, 0, 0, 0.2);
        }

        &:focus {
          outline: none;
        }
      }
    }
  `,
};
