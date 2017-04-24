// main notebook component - props from container.jsx
import React from 'react';

// components
import NotebookListItem from './notebook_list_item'

class NotebookList extends React.Component {

  render() {
    const { notebooks, receiveNotebook } = this.props;
    const notebookItems = notebooks.map(notebook -=> (
      <NotebookListItem
        key={`notebook-list-item${notebook.id}`}
        notebook={notebook}
        receiveNotebook={ receiveNotebook } />
      )
    );

    return(
      <div>
        <ul className="notebook-list">
          { notebookItems }
        </ul>

      </div>
    )
  }
}
