import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homapage.component';
import './App.css';

const HatPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component = {HomePage} />
        <Route path='/hats' component = {HatPage} />
      </Switch>
       
    </div>
  );
}

export default App;
