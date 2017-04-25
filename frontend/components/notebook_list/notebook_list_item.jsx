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
    const { notebook, updateNoobook } = this.props;
    const { title } = notebook;
    let detail;
    if (this.state.detail) {
      detail = <NotebookDetailViewContainer notebook={ notebook } />;
    }
    debugger
    // old
    // let numOfNotes = Object.keys(this.props.notebook.notes).length;
    let numOfNotes = notebook.notes.length;

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
