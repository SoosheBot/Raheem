import React from 'react';

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
import TestAdd from './components/TestAdd';
import Test from './components/Test';
import TestDel from './components/TestDel';

function App() {
  return (
    <div>
      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>

      <Route path="/QR">
        < QRcode/>
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

      <Route path="/testAdd">
        <TestAdd />
      </Route>

      <Route path="/test">
        <Test />
      </Route>

      <Route path="/testDel">
        <TestDel />
      </Route>
    </div>
  );
}

export default App;
