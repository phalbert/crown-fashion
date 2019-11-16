import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component'
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header /> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
