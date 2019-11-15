import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './pages/home/home.component'

const HatsPage = (props) => {
  console.log(props)
  return (<div>
    <h1>Hats</h1>
  </div>)
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
