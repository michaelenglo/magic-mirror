import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import { currentUserReducer, defaultUser } from './currentUserReducer';
// import { friendsReducer, defaultFriends } from './friendsReducer';

const middleware = [...getDefaultMiddleware()];

const reducer = {
  currentUser: currentUserReducer,
  // friends: friendsReducer,
};

const preloadedState = {
  currentUser: defaultUser,
  // friends: defaultFriends,
}

const store = configureStore({
  reducer,
  middleware,
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;