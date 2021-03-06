// main notebook component - props from container.jsx
import React from 'react';

// components
import NotebookListItem from './notebook_list_item';
import NotebookForm from './notebook_form';

class NotebookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newNotebookDetail: false };
    this.toggleNotebookForm = this.toggleNotebookForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  toggleNotebookForm(e) {
    e.preventDefault();
    this.setState({newNotebookDetail: !this.state.newNotebookDetail});
  }

  render() {
    const { notebooks, receiveNotebook, createNotebook } = this.props;
    const notebookItems = notebooks.map(notebook => (
      <NotebookListItem
        key={`notebook-list-item${notebook.id}`}
        notebook={notebook}
        receiveNotebook={ receiveNotebook } />
      )
    );

    // change click toggle to modal later
    let notebookForm;
    if (this.state.newNotebookDetail) {
      notebookForm = <NotebookForm createNotebook={ createNotebook }/>;
    }

    return(
      <div>
        <ul className="notebook-list">
          { notebookItems }
        </ul>
        <h3><div onClick={ this.toggleNotebookForm }>Add a Notebook</div></h3>
        { notebookForm }
      </div>
    )
  }
}

export default NotebookList;
