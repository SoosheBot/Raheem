import React from 'react';
import { Route } from 'react-router-dom';
import {GetAllDataFromCollection} from "./FireBase-Utils/Get"

/* components */
import Save from './components/buttons/Save';
import TestList from "./components/Test";

function App() {
  return (
    <div>

      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>
      <Route path="/test">
        <TestList GetAllDataFromCollection={GetAllDataFromCollection}/>
      </Route>
    </div>
  );
}

export default App;
