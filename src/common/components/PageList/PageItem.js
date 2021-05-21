import React from "react";
import styled, { css } from "styled-components";
import { useHistory, useRouteMatch } from "react-router-dom";

function PageItem({
  id,
  title,
  img,
  link,
  Tags,
  Highlights,
  Bottom,
  increaseMainZIndex,
}) {
  const history = useHistory();
  const { url } = useRouteMatch();

  const onMoveDetailClick = () => {
    history.push(`${url}/${id}`);
  };

  return (
    <S.PageItem>
      {Tags && Tags}
      <div className="page-item-body">
        <div className="page-item-contents">
          <h2 className="title" onClick={onMoveDetailClick}>
            {title}
          </h2>
          <div className="highlights">{Highlights && Highlights}</div>
        </div>
        {img && (
          <div className="img-wrapper">
            <img src={img} />
          </div>
        )}
      </div>

      <div className="page-item-bottom">
        {React.cloneElement(Bottom, { increaseMainZIndex })}
      </div>
    </S.PageItem>
  );
}

export default PageItem;

const S = {
  PageItem: styled.article`
    ${({ theme }) => {
      const { colors, font } = theme;

      return css`
        padding-top: 24px;
        border-bottom: 1px solid ${colors.gray2};

        .page-item-body {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;

          .page-item-contents {
            .title {
              margin-bottom: 8px;
              color: ${colors.black3};
              font-size: 20px;
              font-weight: ${font.weight.bold};
              cursor: pointer;
            }

            .highlights {
              margin-top: 16px;

              & > * {
                font-size: 14px;
                font-weight: ${font.weight.lighter};
                color: ${colors.black1};
              }
            }
          }

          .img-wrapper {
            margin-left: 24px;

            img {
              width: 96px;
              height: 96px;
            }
          }
        }

        .page-item-bottom {
          padding-bottom: 16px;
        }
      `;
    }}
  `,
};
