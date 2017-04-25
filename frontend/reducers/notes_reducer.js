import { RECEIVE_NOTES,
         RECEIVE_NOTE,
         REMOVE_NOTE,
         NOTE_ERROR } from '../actions/note_actions';

import merge from 'lodash/merge';

const NotesReducer = (state = {}, action) => {
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
    case NOTE_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default NotesReducer;

// this is pre-Notebook component
const initialTestState = {
  1: {
    id: 1,
    title: "Green Tea Mochi",
    body: "Favorite snack",
    assigned: "",
    done: false
  },
  2: {
    id: 2,
    title: "Mister Donut",
    body: "Best Donut EVER",
    assigned: "",
    done: false
  }
};
