import React from 'react';
// grab the unique Id generator aka getTime from current Date
import { uniqueId } from '../../utils/idGenerator';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle change
  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const note = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveNote(note);
    this.setState({
      title: "",
      body: ""
    }); // this is to reset form
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="grey out placeholder"
            onChange={this.update('title')}
            required />
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="body placeholder greyed out"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Note!</button>
      </form>
    );
  }
};

export default NoteForm;
