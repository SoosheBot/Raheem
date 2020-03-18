import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>

      {/* Routes set up using react-router-dom. */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>

    </div>
  );
}

export default App;
