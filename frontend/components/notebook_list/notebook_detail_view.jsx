import React from 'react';

// components
import NoteListContainer from '../note_list/note_list_container';

class NotebookDetailView extends React.Component {
  componentDidMount() {
    this.props.requestNotes(this.props.notebook.id);
  }
  render() {
    const { notebook, removeNotebook, updateNotebook } = this.props;
    return(
      <div>
        <p className="notebook-description">{ notebook.description }</p>
        <NoteListContainer
          notebookId={notebook.id}
          notes={ notebook.notes } />
        <button
          className="delete-button"
          onClick={ removeNotebook }>Delete Notebook</button>
      </div>
    );
  }
}

export default NotebookDetailView;
