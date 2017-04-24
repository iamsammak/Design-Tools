import React from 'react';

// components
// import StepListContainer from '../step_list/step_list_container';
// add StepListContainer under p tag

class NoteDetailView extends React.Component {
  render() {
    const { note, removeNote } = this.props;
    return(
      <div>
        <p className="note-body">{ note.body }</p>

        <button
          className="delete-button"
          onClick={ removeNote }>Delete Note</button>
      </div>
    );
  }
}

export default NoteDetailView;
