import React from 'react';
// grab the unique Id generator aka getTime from current Date
import { uniqueId } from '../../utils/idGenerator';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: {},
      user_id: 1 //change this to current_user.id LATER
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle change
  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    // does it have to be a uniqueId...maybe after I add a createNotebook()
    // const notebook = Object.assign({}, this.state, { id: uniqueId() });
    const notebook = Object.assign({}, this.state);
    // debugger // notes:{} is here but disappears after http requests
    this.props.createNotebook({notebook}).then(
      () => this.setState({
        title: "",
        description: "",
        notes: {},
        user_id: 1 // TODO change this to current_user.id LATER
      }) // this is to reset form
    );
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
        <label>Description:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.description}
            rows='5'
            placeholder="Insert Notebook detail"
            onChange={this.update('description')}
            required></textarea>
        </label>
        <button className="create-button">Create Notebook!</button>
      </form>
    );
  }
};

export default NotebookForm;
