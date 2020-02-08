import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './home';
import { Counter, Vending } from './use-state';
import { Vending as VendingEffect, Countries } from './use-effect';
import { Movies, MoviesState } from './Movies';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/vending' component={Vending} />
          <Route exact path='/vending-effect' component={VendingEffect} />
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/movies' render={props => (
              <Fragment>
                <MoviesState>
                  <Movies></Movies>
                </MoviesState>
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
