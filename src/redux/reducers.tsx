import { combineReducers } from 'redux';
import { basicReducer } from './reducerState/basicSettingReducer';

export default combineReducers({
    basicSetting: basicReducer
})
