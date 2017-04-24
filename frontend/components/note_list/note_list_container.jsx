import { connect } from 'react-redux';
import NoteList from './note_list';

// actions
import { receiveNotes, receiveNote } from '../../actions/note_actions';
import { allNotes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  notes: allNotes(state)
});
const mapDispatchToProps = dispatch => ({
  receiveNote: (note) => dispatch(receiveNote(note)),
  receiveNotes: () => dispatch(receiveNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

// NoteList will receive notes, receiveNote, and receiveNotes as props
