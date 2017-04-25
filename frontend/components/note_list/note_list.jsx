// main note component
import React from 'react';
// import mapValues from 'lodash/mapValues'

// components
import NoteListItem from './note_list_item';
import NoteForm from './note_form';

class NoteList extends React.Component {
  // props = notes, receiveNote, receiveNotes
  // may need to add a constructor later
  render() {
    const { notes, receiveNote } = this.props;
    const noteArr = Object.values(notes);
    const noteItems = noteArr.map(note => (
      <NoteListItem
        key={`note-list-item${note.id}`}
        note={note}
        receiveNote={ receiveNote } />
      )
    );

    return(
      <div>
        <ul className="note-list">
          { noteItems }
        </ul>
        <NoteForm
          notebookId={ this.props.notebookId }
          receiveNote={ receiveNote }/>
      </div>
    );

  }
}

export default NoteList;
