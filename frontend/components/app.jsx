import React from 'react';

// will need to chain the user, note_boards (might call them note pads)
// import NoteListContainer from './note_list/note_list_container';
import NotebookListContainer from './notebook_list/notebook_list_container';

// select tag is part of testing
const App = () => (
  <div className="notepad">
    <h1>Hello World from inside the App.jsx through Root</h1>
    <p>Testing Select Tag</p>
    <select>
      <option value="apple">Apple</option>
      <option value="orange">Orange</option>
      <option selected value="coconut">Coconut</option>
      <option value="pineapple">Pineapple</option>
    </select>
    <br></br>
    <NotebookListContainer />
  </div>
);

export default App;
