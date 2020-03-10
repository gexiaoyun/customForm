import basicSettingKey from '../reducerTypeKey/basicSettingKey'

interface Base {
    payload?: any;
}

interface BaseName extends Base {
    readonly type: typeof basicSettingKey.BASIC_NAME;
}

export type ActionType =
    | BaseName