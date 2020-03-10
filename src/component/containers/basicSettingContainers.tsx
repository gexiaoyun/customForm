import basicSetting from '../basicSetting';
import { connect } from 'react-redux';
import * as basicSettingAction from '../../redux/reducerAction/basicSettingAction';

const mapStateToProps = (state: any) => ({
    basicSetting: state.basicSetting
});

const mapDispatchToProps = {
    changeName: basicSettingAction.changeName
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(basicSetting);