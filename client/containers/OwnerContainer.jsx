
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Logout from '../components/Logout';
import * as actions from '../actions/actions';
import User from '../components/User';
import UsersList from '../components/UsersList';
import UserProfile from '../components/UserProfile';

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  user: store.auth.user
});

const mapDispatchToProps = dispatch => ({
  // getSpaces: userId => dispatch(actions.getSpaces(userId)),
  // deleteSpace: (spaceId, userId) => dispatch(actions.getSpaces(spaceId, userId)),
  // addSpace: userId => dispatch(actions.getSpaces(userId)),
});

class OwnerContainer extends Component {

  componentDidMount() {
    // console.log('did mount2')
  }

  render() {
    // console.log('this is id token', localStorage.id_token)
    // console.log('this.props is: ', this.props)
    return (
      <div className='ownerContainer'>
        <h1 style={{textAlign:'center'}}> MATCH EX </h1>
        <UserProfile user={this.props.user}/>
        <h3>GOOD FRIEND MATCHES</h3>
        <UsersList usersList={this.props.user.matches}/>

        {/* <Link to={{pathname:'/createspace', state:{id:this.props._id}}}>Create a Space!</Link> */}
        {/* {this.props.isAuthenticated === true && <Logout />} */}
        {/* {this.props.isAuthenticated === false && <Redirect to="/" />} */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerContainer);
