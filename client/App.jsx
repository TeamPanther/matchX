
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import OwnerContainer from './containers/OwnerContainer';
import Signup from './components/Signup';
import Login from './LoginPage/Login';
import CreateSpace from './components/CreateSpace';

// successful signup and login generates a token that holds the _id from the sequelize database
// the reducers have NOT been tested and need to be worked on

const App = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/owner" component={OwnerContainer} />
      <Route path="/createspace" component={CreateSpace} />
    </Switch>
  </div>
);

module.exports = App;
