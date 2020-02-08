import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './home';
import { Counter } from './use-state';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/counter' component={Counter} />
      </div>
    </Router>
  );
}

export default App;
