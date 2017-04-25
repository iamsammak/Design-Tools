import { connect } from 'react-redux';
import NotebookDetailView from './notebook_detail_view';

// actions
import { removeNotebook } from '../../actions/notebook_actions';
import { requestNotes } from '../../actions/note_actions';

const mapStateToProps = ({notebooks}) => (
  notebooks: notebooks
)

const mapDispatchToProps = (dispatch, { notebook }) => ({
  requestNotes: () => dispatch(requestNotes(notebook.id)),
  removeNotebook: () => dispatch(removeNotebook(notebook))
});

export default connect(
  null,
  mapDispatchToProps
)(NotebookDetailView);
