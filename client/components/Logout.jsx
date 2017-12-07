import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  logoutUser() {
    dispatch(actions.logoutUser());
  },
});

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
});

const Logout = props => (
  <div>
    <button onClick={() => props.logoutUser()}>Log out</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
