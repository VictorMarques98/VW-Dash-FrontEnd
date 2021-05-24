import React from 'react';

import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';

// pages

import Dashboard from './Dashboard/Dashboard';

function Layout () {

  return(
  <HashRouter>
    <Switch>
      <Route path="/dashboard" exact render={() => <Dashboard />} />
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  </HashRouter>
  )
};
export default Layout;
