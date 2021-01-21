import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphonagesMap from './pages/OrphonagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphonagesMap}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;