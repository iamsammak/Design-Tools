// this is a container
import { connect } from 'react-redux';
import NoteDetailView from './note_detail_view';

// actions
import { removeNote } from '../../actions/note_actions';
// import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { note }) => ({
  removeNote: () => dispatch(removeNote(note))
});

export default connect(
  // null because the first arg to connect must always be mapStateToProps
  null, // note props is already passed in
  mapDispatchToProps
)(NoteDetailView);
