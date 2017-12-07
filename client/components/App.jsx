
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import Signup from './Signup';
import OwnerContainer from '../containers/OwnerContainer';
import RenterContainer from '../containers/RenterContainer';
import Login from './Login';
import CreateSpace from './CreateSpace'

// ITERATION NOTES:

// PSQL ACCOUNT
// user: deluge
// password: password
// database name: spaceex

// successful signup and login generates a token that holds the _id from the sequelize database
// the reducers have NOT been tested and need to be worked on

const App = () => (
  <div id="app">
    <h1>Space Ex!</h1>

    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/owner" component={OwnerContainer} />
      <Route path="/renter" component={RenterContainer} />
      <Route path="/createspace" component={CreateSpace} />
    </Switch>
  </div>
);

module.exports = App;
