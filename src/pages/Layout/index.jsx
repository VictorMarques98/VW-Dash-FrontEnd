import React from 'react';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';

// Pages
import Dashboard from '../Dashboard';

// Components
import Header from '../../components/Header';
import LeftMenu from '../../components/LeftMenu';

function Layout () {

  return(
  <HashRouter>
    <LeftMenu />
    <div className="appContent">
      <Header />
      <Switch>
        <Route path="/dashboard" exact render={() => <Dashboard />} />
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </div>
  </HashRouter>
  )
};
export default Layout;
