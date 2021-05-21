import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Save, Share, More, IconButton } from "common/components";
import { foryouOptions } from "common/components/More/options";
import { ReactComponent as BackIcon } from "assets/images/back.svg";

function Head() {
  return (
    <S.Head>
      <div className="left">
        <BackButton />
      </div>
      <div className="right">
        <Save />
        <Share />
        <More options={foryouOptions} />
      </div>
    </S.Head>
  );
}

export default Head;

const BackButton = () => {
  const history = useHistory();

  const onMoveBackClick = () => {
    history.goBack();
  };

  return (
    <IconButton onClick={onMoveBackClick}>
      <BackIcon />
    </IconButton>
  );
};

const S = {
  Head: styled.div`
    display: flex;
    justify-content: space-between;

    .right {
      display: flex;
    }
  `,
};
