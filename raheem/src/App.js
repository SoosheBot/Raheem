import React from 'react';

/* styles */
import { Splash, Title } from './styles/global/index'

/* route */
import { Route } from 'react-router-dom';

/* components */
import QRcode from './components/QRcode';
import Landing from './components/Landing';
import About from './components/About';
import Story from './components/Story';
import ThankYou from './components/ThankYou';

import Header from './components/layout/Header';
import Report from './components/Report';

// unused paths
// import Test from './components/TestComponents/Test';
// import Email from './components/Email';

function App() {

  return (
    <div>

        <Splash>
        <Header className="home" />
        {/* routes using react-router-dom */}

        <Route exact path="/">
            <div className="home">
              <Title>Raheem</Title>
            </div>
        </Route>

        <Route path="/QR">
          < QRcode />
        </Route>

        <Route exact path="/landing">
          <Landing />
        </Route>

        <Route path="/landing/:id">
          <Landing />
        </Route>

        <Route path="/report">
          <Report />
        </Route>

        <Route path="/story">
          <Story />
        </Route>

        {/* <Route path="/email">
          <Email />
        </Route> */}

        <Route path="/thank-you">
          <ThankYou />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        {/* route to officer page in RC2 */}
        {/* test path removed after successful trial */}
        {/* <Route path="/test">
          <Test />
        </Route> */}
      </Splash>
    </div>
  );
}

export default App;

