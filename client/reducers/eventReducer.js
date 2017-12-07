import * as types from '../constants/actionTypes';

const eventReducer = (state = {
  confirmedEvents: [],
  pendingEvents: [],
}, action) => {
  switch (action.type) {

    case types.GET_CONFIRMED_EVENTS:
      if (action.payload.userType === 'renter') {
        fetch('/getConfirmedEventsRenter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ renter_user_id: action.payload.user_id }),
        }).then(confirmedEvents => Object.assign({}, state, { confirmedEvents }));
      } else if (action.payload.userType === 'owner') {
        fetch('/getConfirmedEventsOwner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ owner_user_id: action.payload.user_id }),
        }).then(confirmedEvents => Object.assign({}, state, { confirmedEvents }));
      }
      break;

    case types.GET_PENDING_EVENTS:
      if (action.payload.userType === 'renter') {
        fetch('/getPendingEventsRenter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ renter_user_id: action.payload.user_id }),
        }).then(pendingEvents => Object.assign({}, state, { pendingEvents }));
      } else if (action.payload.userType === 'owner') {
        fetch('/getConfirmedEventsOwner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ owner_user_id: action.payload.user_id }),
        }).then(pendingEvents => Object.assign({}, state, { pendingEvents }));
      }
      break;

    case types.ADD_EVENT:
      fetch('/addEvent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: action.payload.title,
          owner_user_id: action.payload.owner_user_id,
          renter_user_id: action.payload.renter_user_id,
          space_id: action.payload.space_id,
          start: action.payload.start,
          end: action.payload.end,
        }),
      }).then(pendingEvents => Object.assign({}, state, { pendingEvents }));
      break;

    case types.DELETE_EVENT:
      if (action.payload.userType === 'renter') {
        fetch('/deleteEventRenter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            renter_user_id: action.payload.user_id,
            event_id: action.payload.event_id,
          }),
        }).then((pendingEvents) => {
          fetch('/getConfirmedEventsRenter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ renter_user_id: action.payload.user_id }),
          }).then(confirmedEvents => Object.assign({}, state, { confirmedEvents, pendingEvents }));
        });
      } else if (action.payload.userType === 'owner') {
        fetch('/deleteEventOwner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            owner_user_id: action.payload.user_id,
            event_id: action.payload.event_id,
          }),
        }).then((pendingEvents) => {
          fetch('/getConfirmedEventsOwner', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ owner_user_id: action.payload.user_id }),
          }).then(confirmedEvents => Object.assign({}, state, { confirmedEvents, pendingEvents }));
        });
      }
      break;

    case types.CONFIRM_EVENT:
      fetch('/confirmEvent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          owner_user_id: action.payload.user_id,
          event_id: action.payload.event_id,
        }),
      }).then((pendingEvents) => {
        fetch('/getConfirmedEventsOwner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ owner_user_id: action.payload.user_id }),
        }).then(confirmedEvents => Object.assign({}, state, { confirmedEvents, pendingEvents }));
      });
      break;

    default:
      return state;
  }
};

export default eventReducer;
