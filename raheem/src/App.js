import React, { useState, useEffect } from 'react';

/* styles */
import { Splash, Title } from './styles/global/index'

/* route */
import { Route } from 'react-router-dom';

/* components */
//global
import About from './components/About';
import Header from './components/layout/Header';


/* report components */
import QRcode from './components/QRcode';
import Landing from './components/Landing';
import Report from './components/Report';
import Story from './components/Story';
import ThankYou from './components/ThankYou';
<<<<<<< HEAD
import Report from './components/Report';

/* dashboard components */
import Dashboard from './components/Dashboard/Dashboard';
import TestGeo from './components/Dashboard/TestGeo'; 
=======


//officer dashboard
import Dashboard from './components/Dashboard/Dashboard';
import Stories from './components/Dashboard/Stories';
import Stats from './components/Dashboard/Stats';
import Map from './components/Dashboard/Map';
>>>>>>> 957ff15b0af237d503f504f4b12a992dc3d904f9
import StoryList from './components/Stories/StoryList';

import Testgeo from './components/testGeo';

/* structural styling components */
import Header from './components/layout/Header';
import DesktopHeader from './components/layout/DesktopHeader';

// temporary route, delete later once finished testing map component
import DisplayMap from './components/Dashboard/DisplayMap';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div>

      <Splash>
        {windowWidth <= 500 &&
          <Header className="home" />}
        {/* routes using react-router-dom */}

        {windowWidth > 500 &&
          <DesktopHeader className="home" />}

        <Route exact path="/">
          <div className="home">
            <Title>Raheem</Title>
          </div>
        </Route>

        {/* temporary route, delete later once finished testing map component */}
        <Route path="/testmap">
          <DisplayMap />
        </Route>
        {/* temporary route, delete later once finished testing map component */}
        <Route path="/testgeo">
          <TestGeo />
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

        <Route path="/thank-you">
          <ThankYou />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        {/* route to officer dashboard in RC2 */}
        <Route path="/dashboard/stories">
          <StoryList />
        </Route>

        <Route exact path="/dashboard">
          <StoryList />
        </Route>

        <Route path="/officers/:id">
          <Dashboard />
        </Route>

<<<<<<< HEAD
=======
        <Route path="/officers/:id/stories">
          <Stories />
        </Route>

        <Route path="/officers/:id/stats">
          <Stats />
        </Route>

        <Route path="/officers/:id/map">
          <Map />
        </Route>

        {/* test path removed after successful trial */}
        {/* <Route path="/test">
          <Test />
        </Route> */}
>>>>>>> 957ff15b0af237d503f504f4b12a992dc3d904f9
      </Splash>
    </div>
  );
}

export default App;

