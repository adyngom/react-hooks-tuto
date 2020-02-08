import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './home';
import { Counter, Vending } from './use-state';
import { Vending as VendingEffect } from './use-effect';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/vending' component={Vending} />
          <Route exact path='/vending-effect' component={VendingEffect} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
