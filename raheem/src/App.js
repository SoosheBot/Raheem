import React, { useState } from 'react';
import styled from 'styled-components';

/* route */
import { Route } from 'react-router-dom';

/* components */
import QRcode from './components/QRcode';
import Landing from './components/Landing';
import About from './components/About';
import Story from './components/Story';
import Subscribe from './components/Subscribe';
import ThankYou from './components/ThankYou';
import Test from './components/TestComponents/Test';
import Header from './components/layout/Header';
import Report from './components/Report';
import Email from './components/Email';

function App() {

  return (
    <div>
      <Header />

      {/* routes using react-router-dom */}
      <Route exact path="/">
        <Splash>
          <h1>Raheem</h1>
        </Splash>
      </Route>

      <Route path="/QR">
        < QRcode />
      </Route>

      <Route path="/landing">
        <Landing />
      </Route>

      <Route path="/report">
        <Report />
      </Route>

      <Route path="/story">
        <Story />
      </Route>

      <Route path="/subscribe">
        <Subscribe />
      </Route>

      <Route path="/thank-you">
        <ThankYou />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/email">
        <Email />
      </Route>

      {/* route to officer page in RC2 */}

      <Route path="/test">
        <Test />
      </Route>
    </div>
  );
}

export default App;

const Splash = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF600;
  margin: 0;

  h1 {
    font-size: 4rem;
    font-weight: 900;
  }
`;