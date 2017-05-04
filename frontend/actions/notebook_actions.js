import * as NotebookAPIUtil from '../utils/notebook_api_util';
// error actions

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


// async actions
export const fetchNotebooks = () => dispatch => (
  NotebookAPIUtil.fetchNotebooks().then(notebooks => dispatch(receiveNotebooks(notebooks)))
);
