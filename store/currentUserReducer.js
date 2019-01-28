import {
  createAction,
  createReducer,
} from 'redux-starter-kit';

const defaultUser = {
  id: null,
  first_name: 'John',
  last_name: 'Doe',
  username: 'johndoe',
  email: 'johndoe@nwhacks.com',
  password: 'secret',
};

const SET_USER = createAction('users/setUser');

const currentUserReducer = createReducer(0, {
  [SET_USER]: (state, action) => {
    const desiredUser = action.payload;
    return {
      ...state,
      id: desiredUser,
    };
  },
});

export {
  currentUserReducer,
  defaultUser,
};