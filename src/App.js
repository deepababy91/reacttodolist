import React from 'react';
import './App.css';
import Todo from './Todo';
import Account from './Account';
import Help from './Help';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Header from './Header'



import 'antd/dist/antd.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route  exact path="/" component={Todo} />
          <Route path="/account" component={Account} />
          <Route path="/help" component={Help} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

