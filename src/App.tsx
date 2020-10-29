import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import MainView from './Views/MainView';
import OctopusView from './Views/OctopusView';

const App = () =>
  <Router>
    <Switch>
      <Route path="/octopus">
        <OctopusView />
      </Route>
      <Route path="/">
        <MainView />
      </Route>
    </Switch>
  </Router>;

export default App;
