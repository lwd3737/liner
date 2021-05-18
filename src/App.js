import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { ForYouPage, MyHighlightsPage } from "pages";
import { Navigation, Header } from "common/components";

function App() {
  return (
    <S.App>
      <Header />

      <section>
        <Navigation />

        <main>
          <Switch>
            <Route exact path="/home">
              <ForYouPage />
            </Route>
            <Route exact path="/myhighlights/highlights">
              <MyHighlightsPage />
            </Route>
          </Switch>
        </main>
        <aside></aside>
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
      margin: 104px 0;
    }
  `,
};
