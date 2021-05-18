import React, { useState } from "react";
import styled from "styled-components";

import { Overlay } from "common/components";
import { shape1, hover } from "common/styles";
import { ReactComponent as SearchIcon } from "assets/images/search.svg";

function Search() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const toggleOverlay = () => {
    setIsFocused(!isFocused);
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
        <span className="wrapper-icon">
          <SearchIcon className="search-icon" />
        </span>
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

      .search-icon {
        position: absolute;
        top: 4px;
        right: 10px;
        border-radius: 50%;
        padding: 3px;

        &:hover {
          ${hover};
        }
      }
    }
  `,
};
