import basicSettingKey from '../reducerTypeKey/basicSettingKey'

export function changeName (val: string) {
    return { type: basicSettingKey.BASIC_NAME, payload: val };
}