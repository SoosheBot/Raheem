import React from 'react';
import { Route } from 'react-router-dom';

/* components */
import TestList from "./components/Test";
import Demographics from './components/Demographics';

function App() {
  return (
    <div>
      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>

      <Route path="/test">
        <TestList />
      </Route>
      <Route path="/demo">
        <Demographics />
      </Route>
    </div>
  );
}

export default App;
