import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component'
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props
    // listen for auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    //close subscription
    this.unsubscribeFromAuth()
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
