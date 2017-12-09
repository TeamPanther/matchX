// this file contains all Action Creator functions; It imports action types from actionTypes.js

import * as types from '../constants/actionTypes';

// export action creators, which will be used by

export const requestSignup = data => ({
  type: types.SIGN_UP,
  payload: data,
});

export const requestLogin = creds => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  payload: creds,
});

export const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  payload: user.id_token,
  user: user,
});

export const loginError = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  payload: message,
});

export const requestLogout = () => ({
  type: types.LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true,
});

export const receiveLogout = () => ({
  type: types.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
});

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem('id_token');
  dispatch(receiveLogout());
};

export const addEvent = (title, owner_user_id, renter_user_id, space_id, start, end) => ({
  type: types.ADD_EVENT,
  payload: {
    title,
    owner_user_id,
    renter_user_id,
    space_id,
    start,
    end,
  },
});

export const deleteEvent = (event_id, user_id, userType) => ({
  type: types.DELETE_EVENT,
  payload: { event_id, user_id, userType },
});

export const confirmEvent = (event_id, user_id) => ({
  type: types.CONFIRM_EVENT,
  payload: { event_id, user_id },
});
