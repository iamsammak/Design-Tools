import { RECEIVE_NOTEBOOKS,
         RECEIVE_NOTEBOOK,
         REMOVE_NOTEBOOK,
         NOTEBOOK_ERROR } from '../actions/notebook_actions';

import merge from 'lodash/merge';

const NotebooksReducer = (state = initialTestState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      nextState = {};
      action.notebooks.forEach(notebook => nextState[notebook.id] = notebook);
      return nextState;
    case RECEIVE_NOTEBOOK:
      const newNotebook = {[action.notebook.id]: action.notebook};
      return merge({}, state, newNotebook);
    case REMOVE_NOTEBOOK:
      nextState = merge({}, state);
      delete nextState[action.notebook.id];
      return nextState;
    case NOTEBOOK_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default NotebooksReducer;


const initialTestState = {
  1: {
    id: 1,
    title: "Notebook Title",
    body: "Will delete the body on final revision",
    notes: {
      1: {
        id: 1,
        title: "Note Title",
        body: "Note detail",
        assigned: "",
        done: false
      },
      2: {
        id: 2,
        title: "Note #2",
        body: "Detail for note #2",
        assigned: "",
        done: false
      }
    }
  },
  2: {
    id: 2,
    title: "Games",
    body: "Will delete the body on final revision",
    notes: {
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
      },
      3: {
        id: 3,
        title: "Note Sushi",
        body: "Assigned to Joy",
        assigned: "",
        done: false
      }
    }
  }
};
