import React from 'react';
import ReactDOM from 'react-dom';

// store
import configureStore from './store/store';

// for testing
// import allNotes from './reducers/selectors';
import { receiveNote, receiveNotes, requestNotes } from './actions/note_actions';
import Root from './components/root';
// end of testing

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={ store }/>, root
  );

  //testing
  window.store = store;
  window.receiveNote = receiveNote;
  window.receiveNotes = receiveNotes;
  window.requestNotes = requestNotes;
  // end of testing
});


// Ideas
// so we have users
// but they can't save boards or reminders won't persist unless they are signed in
// they don't have access to color boards
// reminders/notes looks like reminder app on iPhone also kind of like evernote
