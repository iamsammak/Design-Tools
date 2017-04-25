import React from 'react';
import merge from 'lodash/merge';
// container component
import NoteDetailViewContainer from './note_detail_view_container';


class NoteListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleNote = this.toggleNote.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  toggleNote(e) {
    e.preventDefault();
    const toggledNote = merge(
      {},
      this.props.note,
      { done: !this.props.note.done }
    );
debugger
    this.props.receiveNote(toggledNote); //this should trigger a rerender
  }

// testing why receiveNote won't trigger a rerender
  shouldComponentUpdate() {
    console.log("should component update");
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    const { note, updateNote } = this.props;
    const { title, done } = note;
    let detail;
    if (this.state.detail) {
      detail = <NoteDetailViewContainer note={ note } />;
    }
debugger
    return (
      <li className="note-list-item">
        <div className="note-header">
          <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
          <button
            className={ done ? "done" : "undone" }
            onClick={ this.toggleNote }>
            { done ? "Undo" : "Done" }
          </button>
        </div>
        { detail }
      </li>
    );
  }
}

export default NoteListItem;
