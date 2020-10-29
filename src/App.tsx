import React from 'react';
import { Route, HashRouter } from "react-router-dom";

import './App.css';
import MainView from './Views/MainView';
import OctopusView from './Views/OctopusView';

const App = () =>
  <HashRouter basename="/">
      <Route path="/octopus" component={OctopusView} />
      <Route exact path="/" component={MainView} />
  </HashRouter>;

export default App;
