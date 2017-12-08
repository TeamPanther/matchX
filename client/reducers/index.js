// import all reducer js files
import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';
import spaceReducer from './spaceReducer';
import signupReducer from './userReducer';
import eventReducer from './eventReducer';
import authReducer from './authReducer';

// each reducer should have its initial state within its js file.
// Use a default parameter to pass this into reducer.
// reducers take the current state and an action object as parameters.
// reducers then have a switch statement with cases for each action type (from actionTypes.js).

const reducers = combineReducers({
  auth: authReducer, //refactor later for consistency
  spaceReducer,
  signupReducer,
  eventReducer,
});


export default reducers;
