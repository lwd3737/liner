import React from "react";
import styled, { css } from "styled-components";

function PageItem({ title, img, Head, Content, Bottom }) {
  return (
    <S.PageItem>
      {Head && <Head />}
      <div className="body">
        <div className="contents">
          <h2 className="title">title</h2>
          <div className="content">{Content && <Content />}</div>
        </div>
        {img && (
          <div className="img-wrapper">
            <img src={img} />
          </div>
        )}
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </S.PageItem>
  );
}

export default PageItem;

const S = {
  PageItem: styled.li``,
};
