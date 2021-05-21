import React from "react";
import styled from "styled-components";

import { IconButton } from "common/components";
import { ReactComponent as FacebookIcon } from "assets/images/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/images/twitter.svg";
import { ReactComponent as LinkdInIcon } from "assets/images/linkdin.svg";
import { ReactComponent as MessengerIcon } from "assets/images/messenger.svg";
import { ReactComponent as LineIcon } from "assets/images/line.svg";
import { ReactComponent as MailIcon } from "assets/images/mail.svg";

const mediaList = [
  FacebookIcon,
  TwitterIcon,
  LinkdInIcon,
  MessengerIcon,
  LineIcon,
  MailIcon,
];

function MediaList() {
  const renderMediaIcons = () => {
    return mediaList.map((MediaIcon, i) => (
      <IconButton key={i} style={mediaIconStyle}>
        <MediaIcon />
      </IconButton>
    ));
  };

  return <S.MediaList>{renderMediaIcons()}</S.MediaList>;
}

export default MediaList;

const mediaIconStyle = {
  marginLeft: "16px",
};

const S = {
  MediaList: styled.div`
    display: flex;
    padding: 24px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  `,
};
