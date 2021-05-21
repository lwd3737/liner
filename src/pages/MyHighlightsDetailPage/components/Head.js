import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Export, Share, More, IconButton } from "common/components";
import { highlightsOptions } from "common/components/More/options";
import { ReactComponent as BackIcon } from "assets/images/back.svg";

function Head() {
  return (
    <S.Head>
      <div className="left">
        <BackButton />
      </div>
      <div className="right">
        <Share />
        <Export />
        <More options={highlightsOptions} />
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
