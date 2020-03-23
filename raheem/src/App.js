import React from 'react';
import { Route } from 'react-router-dom';

/* components */
import Save from './components/buttons/Save';

function App() {
  return (
    <div>

      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>
    </div>
  );
}

export default App;
