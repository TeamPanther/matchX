import * as types from '../constants/actionTypes';
//users to populate userslist
const initialState = {
  usersList: {}
}

const usersReducer = (state = initialState, actions) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {

      })
  }
}

export default usersReducer;
