import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

const Content = () => {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/profile' component={Profile} />
    </Switch>
  );
};

export default Content;