import React from "react";
import styled, { css } from "styled-components";

function DetailPageLayout({ Head, Title, img, highlights, link }) {
  return (
    <S.DetailPageLayout>
      <div className="page-head">{Head}</div>
      {img && (
        <div className="page-image">
          <img src={img} />
        </div>
      )}
      <div className="page-title">{Title}</div>
      {highlights && <div className="page-highlights">{highlights}</div>}
      <a href={link} className="page-view-original" target="_blank">
        View Original
      </a>
    </S.DetailPageLayout>
  );
}

export default DetailPageLayout;

const S = {
  DetailPageLayout: styled.div`
    ${({ theme }) => {
      const { colors, font } = theme;
      return css`
        width: 712px;
        height: 100%;
        padding: 40px 16px;
        margin-left: 224px;

        .page-image {
          margin-bottom: 16px;

          img {
            width: 680px;
            height: 240px;
          }
        }

        .page-title {
          border-bottom: 1px solid ${colors.gray2};
        }

        .page-highlights {
          padding: 32px 16px;
          font-weight: ${font.weight.lighter};
          font-size: 16px;
          color: #555;
        }

        .page-view-original {
          display: inline-block;
          width: 680px;
          height: 46px;
          border: 1px solid ${colors.gray5};
          border-radius: 8px;
          text-align: center;
          line-height: 3;
          font-size: 16px;
          font-weight: ${font.weight.middle};
          color: ${colors.gray1};
          cursor: pointer;

          &:hover {
            background-color: ${colors.gray3};
          }
        }
      `;
    }}
  `,
};
