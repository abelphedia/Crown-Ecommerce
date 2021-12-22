import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homapage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from './firebase/firebase.utils'
class App extends Component{
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }
  unSubscribeFromAuth = null
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route path='/signin' component = {SignInAndSignUp} />
        </Switch>
         
      </div>
    );
  }

}

export default App;
