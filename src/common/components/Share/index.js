import React, { useState } from "react";
import styled from "styled-components";

import { IconButton, Modal } from "common/components";
import MediaList from "./MediaList";
import LinkCopy from "./LinkCopy";
import { ReactComponent as ShareIcon } from "assets/images/share.svg";

function Share({ link, Dropdown, increaseZIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModalClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    {
      increaseZIndex && increaseZIndex();
    }
  };

  return (
    <S.Share>
      {Dropdown ? (
        <Dropdown
          Button={ShareButton}
          onToggleModalClick={onToggleModalClick}
        />
      ) : (
        <ShareButton onClick={onToggleModalClick} />
      )}
      <Modal
        title="Share Original Page"
        isOpen={isOpen}
        Content={<MediaList />}
        Bottom={<LinkCopy link={link} />}
        modalContentStyle={modalContentStyle}
        onClick={onToggleModalClick}
      />
    </S.Share>
  );
}

export default Share;

const ShareButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <ShareIcon />
    </IconButton>
  );
};

const modalContentStyle = {
  width: "480px",
};

const S = {
  Share: styled.div``,
};
