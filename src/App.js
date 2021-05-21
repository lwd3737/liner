import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  ForYouPage,
  ForYouDetailPage,
  MyHighlightsPage,
  MyHighlightsDetailPage,
} from "pages";
import {
  Navigation,
  Header,
  TrendingKeywords,
  TrendingPages,
} from "common/components";
import domains from "common/domains";
import { PageLayout } from "common/templates";
import { foryouData, myHighlightsData } from "data";

const { foryou, myhighlights, more } = domains;

function App() {
  const history = useHistory();
  const [zIndexs, setZIndexs] = useState({
    header: 2,
    main: 1,
  });

  const increaseHeaderZIndex = () => {
    setZIndexs({
      ...zIndexs,
      header: zIndexs.main + 1,
    });
  };

  const increaseMainZIndex = () => {
    setZIndexs({
      ...zIndexs,
      main: zIndexs.header + 1,
    });
  };

  return (
    <S.App zIndex={zIndexs.main}>
      <Header
        zIndex={zIndexs.header}
        increaseHeaderZIndex={increaseHeaderZIndex}
      />

      <section>
        <Navigation />

        <main>
          <Switch>
            <Route exact path="/" render={() => history.replace(foryou)} />
            <Route exact path={foryou}>
              <ForYouPage
                data={foryouData}
                increaseMainZIndex={increaseMainZIndex}
              />
            </Route>
            <Route exact path={`${foryou}/:id`}>
              <ForYouDetailPage data={foryouData} />
            </Route>
            <Route exact path={myhighlights}>
              <MyHighlightsPage
                data={myHighlightsData}
                increaseMainZIndex={increaseMainZIndex}
              />
            </Route>
            <Route exact path={`${myhighlights}/:id`}>
              <MyHighlightsDetailPage data={myHighlightsData} />
            </Route>
            <Route exact path={more} render={() => <PageLayout />} />
          </Switch>
        </main>

        <aside>
          <TrendingKeywords />
          <TrendingPages />
        </aside>
      </section>
    </S.App>
  );
}

export default App;

//S == Style
const S = {
  App: styled.div`
    width: 1280px;
    height: 100vh;
    margin: 0 auto;

    section {
      display: flex;
      position: absolute;
      top: 64px;

      main {
        position: relative;
        z-index: ${({ zIndex }) => zIndex};
      }
    }
    aside {
      position: static;
      margin: 40px 0 0 24px;
    }
  `,
};
