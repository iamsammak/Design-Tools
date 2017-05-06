import React from 'react';
import merge from 'lodash/merge'

import NotebookDetailViewContainer from './notebook_detail_view_container';

class NotebookListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render() {
    const { notebook, updateNotebook } = this.props;
    const { title } = notebook;
    let detail;
    if (this.state.detail) {
      detail = <NotebookDetailViewContainer notebook={ notebook } />;
    }

    // temp fix to resolve the missing notes param
    if (typeof this.props.notebook.notes === "undefined") {
      this.props.notebook.notes = {};
    }
    const numOfNotes = Object.keys(this.props.notebook.notes).length;

    return (
      <li className="notebook-list-item">
        <div className="notebook-header">
          <h3><a onClick={ this.toggleDetail }>{ title }</a><a>{ numOfNotes }</a></h3>
        </div>
        { detail }
      </li>
    )
  }
}

export default NotebookListItem;

// old when notes was stored as an Object instead of an Array
// let numOfNotes = Object.keys(this.props.notebook.notes).length;
// numOfNotes = notebook.notes.length;
