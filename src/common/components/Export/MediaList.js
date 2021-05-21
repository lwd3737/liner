import React from "react";
import styled, { css } from "styled-components";

import { IconButton } from "common/components";
import { ReactComponent as WordIcon } from "assets/images/wordpress.svg";
import { ReactComponent as OneNoteIcon } from "assets/images/onenote.svg";
import { ReactComponent as EverNoteIcon } from "assets/images/evernote.svg";
import { ReactComponent as TextIcon } from "assets/images/text.svg";

const mediaList = [
  ["Word", WordIcon],
  ["OneNote", OneNoteIcon],
  ["Evernote", EverNoteIcon],
  ["Text", TextIcon],
];

function MediaList() {
  const renderMediaIcons = () => {
    return mediaList.map((media, i) => {
      const [mediaName, MediaIcon] = media;

      return (
        <div className="media">
          <IconButton key={i}>
            <MediaIcon />
          </IconButton>

          <p className="media-name">{mediaName}</p>
        </div>
      );
    });
  };

  return (
    <S.MediaList>
      <p className="text">Export your highlights</p>
      <ul>{renderMediaIcons()}</ul>
    </S.MediaList>
  );
}

export default MediaList;

const S = {
  MediaList: styled.div`
    ${({ theme }) => {
      const { font, colors } = theme;

      return css`
        padding: 24px 0;

        .text {
          display: "block";
          padding: 0 8px;
          font-size: 14px;
          color: ${colors.gray1};
        }

        ul {
          display: flex;
          margin-left: 8px;
          padding-top: 24px;

          .media {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 16px;

            .media-name {
              margin-top: 8px;
              font-size: 12px;
              font-weight: ${font.weight.middle};
              color: ${colors.gray1};
            }
          }
        }
      `;
    }}
  `,
};
