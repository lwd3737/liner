import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as InfoIcon } from "assets/images/info.svg";
import { ReactComponent as CloseIcon } from "assets/images/close.svg";

function Info({ text, image }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleTooltip = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Info>
      <span className="info-icon" onClick={onToggleTooltip}>
        <InfoIcon />
      </span>
      {isOpen && (
        <div className="info-tooltip-container">
          <div className="tooltip-triangle"></div>
          <div className="tooltip-rectangle">
            <button className="close-btn" onClick={onToggleTooltip}>
              <CloseIcon />
            </button>
            <div className="text-container">
              <h3 className="text-title">title</h3>
              <div className="text-contents">text................</div>
            </div>
          </div>
        </div>
      )}
    </S.Info>
  );
}

export default Info;

const backgroundColor = css`
  background-color: #52565d;
`;

const border = css`
  border: 1px solid #969aa2;
`;

const tooltipTriangleBorder = css`
  ${border};
  border-top: none;
  border-right: none;
`;

const S = {
  Info: styled.div`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        .info-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 32px;
          height: 32px;
          margin-left: 9px;
          border-radius: 50%;

          &:hover {
            cursor: pointer;
            background-color: ${colors.gray3};
          }
        }

        .info-tooltip-container {
          position: absolute;
          top: 24px;
          width: 330px;
          margin-left: 60px;

          .close-btn {
            position: absolute;
            top: 5px;
            right: 0;
          }

          .tooltip-triangle {
            position: absolute;
            top: 23px;
            left: -9px;
            width: 19px;
            height: 19px;
            transform: rotate(45deg);
            z-index: 2;
            ${backgroundColor};
            ${tooltipTriangleBorder};
          }

          .tooltip-rectangle {
            position: absolute;
            width: 320px;
            color: white;
            border-radius: 8px;
            z-index: 1;
            ${border};
            ${backgroundColor};

            .text-container {
              padding: 15px 17px;

              .text-title {
                font-size: 16px;
                font-weight: ${font.weight.bold};
              }

              .text-contents {
                margin-top: 6px;
                font-size: 14px;
                font-weight: ${font.weight.lighter};
                line-height: 20px;
              }
            }
          }
        }
      `;
    }}
  `,
};
