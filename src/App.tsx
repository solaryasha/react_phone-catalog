import React from 'react';

import './App.scss';
// import { Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';

const App = () => (
  <div className="App">
    <Navigation />
    {/* <Switch>
      <Route path="/" component={Home} />
      <Route path="/phones" component={Phones} />
      <Route path="/tablets" component={Tablets} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/favorites" component={Favorites} />
    </Switch> */}
  </div>
);

export default App;
