import React from 'react';
// grab the unique Id generator aka getTime from current Date
import { uniqueId } from '../../utils/idGenerator';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      notes: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle change
  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const notebook = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveNotebook(notebook);
    this.setState({
      title: "",
      body: "",
      notes: {}
    }); // this is to reset form
  }

  render() {
    return (
      <form className="notebook-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="new notebook title"
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
            placeholder="Insert Notebook detail"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Notebook!</button>
      </form>
    );
  }
};

export default NotebookForm;
