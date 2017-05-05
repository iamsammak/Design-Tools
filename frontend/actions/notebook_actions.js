import * as NotebookAPIUtil from '../utils/notebook_api_util';
// error actions
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const NOTEBOOK_ERROR = "NOTEBOOK_ERROR";

// sync actions
export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const notebookError = error => ({
  type: NOTEBOOK_ERROR,
  error
});


// async actions (thunk action creators)
export const fetchNotebooks = () => dispatch => (
  NotebookAPIUtil.fetchNotebooks().then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchNotebook = id => dispatch => (
  NotebookAPIUtil.fetchNotebook(id).then(notebook => dispatch(receiveNotebook(notebook)))
);

export const createNotebook = (notebook) => dispatch => {
  console.log(notebook);
  return (
    NotebookAPIUtil.createNotebook(notebook)
    .then(notebook => { dispatch(receiveNotebook(notebook)); dispatch(clearErrors())},
          err => dispatch(receiveErrors(err.responseJSON)))
  )
};

export const updateNotebook = notebook => dispatch => (
  NotebookAPIUtil.updateNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)))
);

export const deleteNotebook = notebook => dispatch => (
  NotebookAPIUtil.deleteNotebook(notebook).then(notebook => dispatch(removeNotebook(notebook)))
);
