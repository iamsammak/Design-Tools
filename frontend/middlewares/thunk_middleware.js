const ThunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return next(action);
};

export default ThunkMiddleware;
