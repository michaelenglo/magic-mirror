import {
  createAction,
  createReducer,
} from 'redux-starter-kit';
import { getState } from 'redux';
import axios from 'axios';

const defaultFriends = [
  {
    id: 1,
    user_id: 1,
    teammate_id: 1,
  }
];

const getFriends = createAction('friends/getFriends');

const friendsReducer = createReducer(0, {
  [getFriends]: async (state, action) => {
    const allStates = getState();
    const desiredUser = allStates.currentUser.id;
    axios.get(`${process.env.API_BASE_URL}/friends/get/?id=${desiredUser}`)
      .then(res => {
        state = res;
      })
      .catch(err => {
        console.error('Error is', err);
      });
  },
});

export {
  friendsReducer,
  defaultFriends,
};