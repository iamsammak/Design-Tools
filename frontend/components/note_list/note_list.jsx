// main note component
import React from 'react';

// components
import NoteListItem from './note_list_item';
import NoteForm from './note_form';

class NoteList extends React.Component {
  // props = notes, receiveNote, receiveNotes
  // may need to add a constructor later
  render() {
    const { notes, receiveNote } = this.props;
    const noteItems = notes.map(note => (
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
        <NoteForm receiveNote={ receiveNote }/>
      </div>
    );

  }
}

export default NoteList;
