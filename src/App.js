import React from "react";
import styled from "styled-components";
import { Switch, Route, useHistory } from "react-router-dom";

import { ForYouPage, MyHighlightsPage } from "pages";
import {
  Navigation,
  Header,
  TrendingKeywords,
  TrendingPages,
} from "common/components";
import domains from "common/domains";
import { PageLayout } from "common/templates";

const { foryou, myhighlights, more } = domains;

function App() {
  const history = useHistory();

  return (
    <S.App>
      <Header />

      <section>
        <Navigation />

        <main>
          <Switch>
            <Route exact path="/" render={() => history.replace(foryou)} />
            <Route exact path={foryou}>
              <ForYouPage />
            </Route>
            <Route exact path={myhighlights}>
              <MyHighlightsPage />
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
      z-index: 1;
    }
  `,
};
