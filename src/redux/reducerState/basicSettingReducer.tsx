import basicSettingKey from '../reducerTypeKey/basicSettingKey';
import { ActionType } from '../reducerType/basicSettingType';

export interface IntBasicSettingState {
    name: string;
}

const initialState: IntBasicSettingState = {
    name: ''
}

export const basicReducer = (state = initialState, action: ActionType) => {
    switch(action.type) {
        case basicSettingKey.BASIC_NAME:
            return Object.assign({}, state, {
                name: action.payload
            })
        default:
            return state;
    }
}

