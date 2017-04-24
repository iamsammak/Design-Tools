import { RECEIVE_NOTES,
         RECEIVE_NOTE,
         REMOVE_NOTE,
         TODO_ERROR } from '../actions/note_actions';

import merge from 'lodash/merge';

const NotesReducer = (state = initialTestState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_NOTES:
      nextState = {};
      action.notes.forEach(note => nextState[note.id] = note);
      return nextState;
    case RECEIVE_NOTE:
      const newNote = {[action.note.id]: action.note};
      return merge({}, state, newNote);
    case REMOVE_NOTE:
      nextState = merge({}, state);
      // use delete operator to remove note from state-Object
      delete nextState[action.note.id];
      return nextState;
    case TODO_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default NotesReducer;

const initialTestState = {
  1: {
    id: 1,
    title: "Apple",
    body: "Assigned to Jonathan",
    assigned: "",
    done: false
  },
  2: {
    id: 2,
    title: "Sushi",
    body: "Assigned to Joy",
    assigned: "",
    done: false
  }
};
