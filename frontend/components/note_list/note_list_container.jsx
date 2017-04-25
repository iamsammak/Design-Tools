import { connect } from 'react-redux';
import NoteList from './note_list';

// actions
import { createNote, receiveNotes, receiveNote } from '../../actions/note_actions';

// why does adding a mapStateToProps cause props to render weird
// const mapStateToProps = ({notebookId, notes}) => ({
//   notebook_id: notebookId,
//   notes: notes
// });

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  receiveNote: (note) => dispatch(receiveNote(note)),
  receiveNotes: () => dispatch(receiveNotes())
});

export default connect(
  null,
  mapDispatchToProps
)(NoteList);

// NoteList will receive notes, receiveNote, and receiveNotes as props
