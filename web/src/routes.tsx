import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphonagesMap from './pages/OrphonagesMap';
import  CreateOrphanage  from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphonagesMap}/>
        <Route path="/create" component={CreateOrphanage}/>
        <Route path="/list" component={Orphanage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;