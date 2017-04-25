import React from 'react';

// will need to chain the user, note_boards (might call them note pads)
import NotebookListContainer from './notebook_list/notebook_list_container';

// select tag is part of testing
const App = () => (
  <div className="notepad">
    <h1>Notepad Tool</h1>
    <NotebookListContainer />
  </div>
);

export default App;


// <p>Testing Select Tag</p>
// <select>
//   <option value="apple">Apple</option>
//   <option value="orange">Orange</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="pineapple">Pineapple</option>
// </select>
