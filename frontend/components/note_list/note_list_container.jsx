import { connect } from 'react-redux';
import NoteList from './note_list';

// actions
import { createNote, receiveNotes, receiveNote } from '../../actions/note_actions';
import { notesByNotebookId } from '../../reducers/selectors';

const mapStateToProps = ({notebook_id, notes}) => ({
  notebook_id: notebook_id,
  notes: notes
});
const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  receiveNote: (note) => dispatch(receiveNote(note)),
  receiveNotes: () => dispatch(receiveNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

// NoteList will receive notes, receiveNote, and receiveNotes as props
