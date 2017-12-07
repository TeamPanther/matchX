
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenterRes from '../components/RenterRes'
// import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  // hard coded state
  username: 'renterman'
});

const RenterContainer = (props) => {
  console.log('inside renter container')
  console.log(props.username)
  return (
    <div>
      <h2>
        Welcome Renter {props.username} !!!
      </h2>
      <RenterRes
        // put in props here
      />

    </div>
  );
}

export default connect(mapStateToProps)(RenterContainer);
