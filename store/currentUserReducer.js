import {
  createAction,
  createReducer,
} from 'redux-starter-kit';
import axios from 'axios';

const defaultUser = {
  id: null,
  first_name: 'John',
  last_name: 'Doe',
  username: 'johndoe',
  email: 'johndoe@nwhacks.com',
  password: 'secret',
};

const setUser = createAction('users/setUser');

const currentUserReducer = createReducer(0, {
  [setUser]: async (state, action) => {
    const desiredUser = action.payload;
    axios.get(`${process.env.API_BASE_URL}/user?id=${desiredUser}`)
      .then(res => {
        state = res;
      })
      .catch(err => {
        console.error('Error is', err);
      });
  }
});

export {
  currentUserReducer,
  defaultUser,
};