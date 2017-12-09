import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { logoutUser } from '../actions/actions';
import loginUser from '../actions/auth';

const mapStateToProps = state => ({
  auth: state.auth
});

class Login extends Component {
    state = {
      username: '',
      password: ''
    }

  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(loginUser({ username: username, password: password }))
    }
  }

  render() {
    return (
      <div id="login" style={{textAlign: 'center'}}>
        <h1>Space Ex!</h1>
        <TextField
          hintText="Username"
          value={this.state.username}
          onChange={e => this.handleChange('username', e)}
        /><br />
        <TextField
          hintText="Password"
          value={this.state.password}
          onChange={e => this.handleChange('password', e)}
        /><br />
        <FlatButton
          id="search-button"
          onClick={this.handleSubmit}
          label="Log In"
          primary={true}
        /><br />

        Not a user?
        {/* <Link to='/signup'>
          <FlatButton
            id="search-button"
            onClick={this.handleSubmit}
            label="Sign Up"
            secondary={true} />
        </Link> */}
        {/* refactor to incorporate materialui */}
        <Link to='/signup'>Signup</Link>
          {this.props.auth.isAuthenticated === true && <Redirect to="/owner" />}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Login);
