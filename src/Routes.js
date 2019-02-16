import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home';
import SignIn from './SignIn';

const Routes = () =>
  <App>
    <Switch>
      <Route exact path="/Home.js" component={Home} />
      <Route exact path="/SignIn.js" component={SignIn} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default Routes;