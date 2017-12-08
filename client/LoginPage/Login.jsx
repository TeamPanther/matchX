import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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
    console.log('event.target.value is: ', event.target.value)
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
      <div id="login">
        <h4>Login</h4>
        <h4>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.handleChange('username', e)}
          />
        </h4>
        <h4>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={e => this.handleChange('password', e)}
          />
          <br/>
          <br/>

          {/* login post request reducer to database goes here */}
          <button onClick={this.handleSubmit}>
            Login
          </button>
          Not a user?
          <Link to='/signup'>Signup</Link>
          <br/>
          {this.props.auth.isAuthenticated === true && <Redirect to="/owner" />}
        </h4>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Login);
