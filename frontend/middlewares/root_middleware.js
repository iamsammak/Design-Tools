import { applyMiddleware } from 'redux';

// import SessionMiddleware from '../middleware/session_middleware';
// import NotebookMiddleware from './notebook_middleware';

import ThunkMiddleware from './thunk_middleware';

import { createLogger } from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  ThunkMiddleware,
  logger
);

export default RootMiddleware;
