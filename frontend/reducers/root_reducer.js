import { combineReducers } from 'redux';

import NotesReducer from './notes_reducer';
import NotebooksReducer from './notebooks_reducer';

const RootReducer = combineReducers({
  notes: NotesReducer,
  notebooks: NotebooksReducer
});

export default RootReducer;
