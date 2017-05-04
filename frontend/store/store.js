import { createStore } from 'redux';

import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middlewares/root_middleware';

// const configureStore = (preloadedState = {}) => {
//   const store = createStore(
//     RootReducer,
//     preloadedState
//   );
//   // store.subscribe(() => {
//   //   localStorage.state = JSON.stringify(store.getState());
//   // });
//   return store
// };

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);
// only () follow the big arrow because createStore will create an Object {}
// so essentially above is same as the below
// const configureStore = (preloadedState = {}) => ({});

export default configureStore;
