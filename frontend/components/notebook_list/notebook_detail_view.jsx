import React from 'react';

class NotebookDetailView extends React.Component {
  render() {
    const { notebook, removeNotebook } = this.props;
    return(
      <div>
        <p className="notebook-body">{ notebook.body }</p>
        <button
          className="delete-button"
          onClick={ removeNotebook }>Delete Notebook</button>
      </div>
    );
  }
}

export default NotebookDetailView;
