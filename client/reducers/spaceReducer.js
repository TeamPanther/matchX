import * as types from '../constants/actionTypes';

const spaceReducer = (state = { spaces: [] }, action) => {
  switch (action.type) {
    case types.GET_SPACES:
      fetch('/getSpaces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owner_user_id: action.user_id }),
      }).then(spaces => Object.assign({}, state, { spaces }));
      break;
    case types.DELETE_SPACE:
      fetch('/deleteSpace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ space_id: action.space_id, owner_user_id: action.user_id }),
      }).then(spaces => Object.assign({}, state, { spaces }));
      break;
    case types.ADD_SPACE:
      fetch('/addSpace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: action.payload.name,
          location: action.payload.location,
          description: action.payload.description,
          rating: action.payload.rating,
          picture: action.payload.picture,
          tags: action.payload.tags,
          owner_user_id: action.payload.user_id,
        }),
      }).then(spaces => Object.assign({}, state, { spaces }));
      break;
    default:
      return state;
  }
};

export default spaceReducer;
