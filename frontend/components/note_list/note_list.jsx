// main note component
import React from 'react';
import mapValues from 'lodash/mapValues'

// components
import NoteListItem from './note_list_item';
import NoteForm from './note_form';

class NoteList extends React.Component {
  // props = notes, receiveNote, receiveNotes
  // may need to add a constructor later
  render() {
    const { notes, receiveNote } = this.props;
    // should dig through the notebook and map out each note within the current notebook
    debugger
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
        <NoteForm receiveNote={ receiveNote }/>
      </div>
    );

  }
}

export default NoteList;
