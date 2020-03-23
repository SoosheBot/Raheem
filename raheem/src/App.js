import React from 'react';
import { Route } from 'react-router-dom';

/* components */
import Save from './components/buttons/Save';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div>

      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>
      <Route path="/thankyou">
        <ThankYou />
      </Route>
    </div>
  );
}

export default App;
