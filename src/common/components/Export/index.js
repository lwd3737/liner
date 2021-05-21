import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "common/components";
import ExportButton from "./ExportButton";
import MediaList from "./MediaList";

function Export({ increaseZIndex }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModalClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
    {
      increaseZIndex && increaseZIndex();
    }
  };

  return (
    <S.Export>
      <ExportButton onClick={onToggleModalClick} />
      <Modal
        title="Export"
        Content={<MediaList />}
        isOpen={isModalOpen}
        onClick={onToggleModalClick}
      />
    </S.Export>
  );
}

export default Export;

const S = {
  Export: styled.div``,
};
