
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import OwnerSpaces from '../components/OwnerSpaces'
import Logout from '../components/Logout';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  spaces: store.spaceReducer.spaces,
  isAuthenticated: store.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  getSpaces: userId => dispatch(actions.getSpaces(userId)),
  deleteSpace: (spaceId, userId) => dispatch(actions.getSpaces(spaceId, userId)),
  addSpace: userId => dispatch(actions.getSpaces(userId)),
});

class OwnerContainer extends Component {
  render() {
    console.log('this is id token')
    console.log(localStorage.id_token)
    return (
      <div className='owner-container'>
        {props.username} Container

        <Link to={{pathname:'/createspace', state:{id:props._id}}}>Create a Space!</Link>
        {props.isAuthenticated === true && <Logout />}
        {props.isAuthenticated === false && <Redirect to="/" />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer);
