import React, { useState } from 'react';
import styled from 'styled-components';

/* route */
import { Route } from 'react-router-dom';

/* components */
import QRcode from './components/QRcode';
import Landing from './components/Landing';
import StopDetails from './components/StopDetails';
import Date from './components/Date';
import Story from './components/Story';
import Demographics from './components/Demographics';
import Subscribe from './components/Subscribe';
import ThankYou from './components/ThankYou';
import Test from './components/TestComponents/Test';
import Header from './components/layout/Header';

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

      <Route path="/about">
        <Landing />
      </Route>

      <Route path="/details">
        <StopDetails />
      </Route>

      <Route path="/date">
        <Date />
      </Route>

      <Route path="/report">
        <Story />
      </Route>

      <Route path="/demographics">
        <Demographics />
      </Route>

      <Route path="/subscribe">
        <Subscribe />
      </Route>

      <Route path="/thank-you">
        <ThankYou />
      </Route>

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

  h1 {
    font-size: 4rem;
    font-weight: 900;
  }
`;