import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component'
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: ''
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // listen for auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    //close subscription
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/auth' component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
