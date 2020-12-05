import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Signup } from './Signup';
import { Details } from './Details';

export default (
  <Switch>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/details">
      <Details />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
