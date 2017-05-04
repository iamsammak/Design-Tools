import { connect } from 'react-redux';
import NotebookList from './notebook_list';

// actions
import { receiveNotebooks, receiveNotebook } from '../../actions/notebook_actions';
import { allNotebooks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  notebooks: allNotebooks(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveNotebook: (notebook) => dispatch(receiveNotebook(notebook)),
  receiveNotebooks: () => dispatch(receiveNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList);
