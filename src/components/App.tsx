import * as React from 'react';
import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';
import Header from './Header/Header';
import HeroDetail from './heroDetail/HeroDetail';
import Heroes from './heroes/Heroes';

const App: React.SFC = () => (
  <div>
    <Header />

    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/heroes" component={Heroes} />
      <Route path={`/detail/:heroId`} component={HeroDetail} />
    </Switch>
  </div>
);

export default App;
