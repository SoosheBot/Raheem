import React from 'react';
import { Route } from 'react-router-dom';

/* components */
import Save from './components/buttons/Save';
import StopDetails from './components/forms/StopDetails';

function App() {
  return (
    <div>

      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
        <StopDetails />
      </Route>
    </div>
  );
}

export default App;
