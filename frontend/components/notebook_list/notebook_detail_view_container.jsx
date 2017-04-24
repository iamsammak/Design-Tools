import { connect } from 'react-redux';
import NotebookDetailView from './notebook_detail_view';

// actions
import { removeNotebook } from '../../actions/notebook_actions';

const mapDispatchToProps = (dispatch, { notebook }) => ({
  removeNotebook: () => dispatch(removeNotebook(notebook))
});

export default connect(
  null,
  mapDispatchToProps
)(NotebookDetailView);
