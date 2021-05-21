import React from "react";
import styled, { css } from "styled-components";

import { Overlay } from "common/components";
import CloseButton from "./CloseButton";

function Modal({ title, isOpen, modalContentStyle, Content, Bottom, onClick }) {
  return (
    <S.Modal isOpen={isOpen} onClick={onClick}>
      <Overlay />
      <div
        className="modal-content"
        style={modalContentStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2 className="title">{title}</h2>
          <CloseButton onClick={onClick} />
        </div>
        <div className="content">{Content}</div>
        {Bottom && <div className="bottom">{Bottom}</div>}
      </div>
    </S.Modal>
  );
}

export default Modal;

const S = {
  Modal: styled.div`
    ${({ theme, isOpen }) => {
      const { font } = theme;

      return css`
        display: ${isOpen ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        .modal-content {
          position: absolute;
          width: 400px;
          min-height: 179px;
          background-color: white;
          padding: 20px 16px;
          border-radius: 16px;
          z-index: 20;

          .modal-head {
            display: flex;
            justify-content: space-between;

            .title {
              padding: 0 12px;
              margin-bottom: 16px;
              color: ${font.black4};
              font-size: 24px;
              font-weight: ${font.weight.bold};
            }
          }
        }
      `;
    }}
  `,
};
