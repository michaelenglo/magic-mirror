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
  SET_USER: (state, action) => {
    console.log('action is', action);
    console.log('state is', state);
    const desiredUser = action.payload;
    const url = `https://magicmirror.lib.id/magicmirror@0.1.5/users/get/?id=${desiredUser}`;
    console.log(url);
    axios.get(url)
      .then(res => {
        console.log('hishfladsjhfahslkjfdaslkfhasdaslkhnadfslhsfkdasflkh');
        // console.log(JSON.parse(res));
        // return {
        //   ...JSON.parse(res),
        //   ...state,
        // }
        return state;
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