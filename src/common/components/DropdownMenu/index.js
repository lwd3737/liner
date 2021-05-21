import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function DropdownMenu({ children, Button, style, isClosedWhenClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const onCloseDropdown = () => {
    setIsOpen(false);
  };

  useEffect(function addEvent() {
    const onCloseDropdown = () => setIsOpen(false);

    window.addEventListener("click", onCloseDropdown);

    return () => window.removeEventListener("click", onCloseDropdown);
  }, []);

  return (
    <S.DropdownMenu>
      <Button isOpen={isOpen} onClick={onToggleDropdown} />

      {isOpen && (
        <div className="menu-container" style={style}>
          {isClosedWhenClick
            ? React.cloneElement(children, { onCloseDropdown })
            : children}
        </div>
      )}
    </S.DropdownMenu>
  );
}

export default DropdownMenu;

const S = {
  DropdownMenu: styled.div`
    display: inline-block;
    position: relative;

    .menu-container {
      position: absolute;
      right: 0;
      border: 1px solid ${({ theme }) => theme.colors.gray2};
      border-radius: 8px;
      padding: 8px 0;
      background-color: white;
      box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
      z-index: 3;
    }
  `,
};
