import EditPage from '../edit';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
    
});

const mapDispatchToProps = {
    
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditPage);