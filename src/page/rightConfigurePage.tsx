import * as React from 'react'
import { Form, Input, Select, Checkbox } from 'antd'
import { AddComponentType } from './edit'
const FormItem = Form.Item
// const FormList = Form.List
const { Option, OptGroup } = Select

export interface RightConfigurePageProps {
    configureMsg: AddComponentType;
    getRightSettingParame: (param: any) => void;
}

class RightConfigurePage extends React.Component<RightConfigurePageProps, any> {

    formRef:any = React.createRef();

    componentWillReceiveProps (nextProps: any) {
        if (nextProps.configureMsg.content && Object.keys(nextProps.configureMsg.content).length > 0) {
            this.formRef.setFieldsValue(nextProps.configureMsg.content)
        } else {
            this.formRef.resetFields()
        }
    }

    submit = (changedFields: any, allFields: any) => {
        const { configureMsg: { key }, getRightSettingParame} = this.props;
        let value = this.formRef.getFieldsValue();
        value.key = key;
        console.log(value)
        getRightSettingParame(value)
    }

    render () {
        const { configureMsg } = this.props;
        let promtStyle = {
          style: {
            fontSize: '14px',
            color: '#919191'
          }
        }

        return (
            <div>
                <Form 
                  ref={(ref: any) => this.formRef = ref} 
                  name="right-configure-page"
                  onFieldsChange={this.submit}
                  size='middle'
                  initialValues={{ 
                      width: '200',
                      margin: '5'
                  }}
                >
                  <h2 {...promtStyle}>基础设置</h2>
                    <FormItem label="名称" name="name">
                        <Input />
                    </FormItem>
                    {
                        configureMsg.type === 'input' && 
                        <FormItem label="内容" name="text">
                            <Input />
                        </FormItem>
                    }
                    <FormItem label="宽度(px)" name="width">
                        <Input />
                    </FormItem>
                    <FormItem label="边距(px)" name="margin">
                        <Input />
                    </FormItem>
                    {
                        configureMsg.type !== 'table' && 
                        <FormItem label="隐藏标题" name="hideName" valuePropName="checked">
                            <Checkbox />
                        </FormItem>
                    }
                    <FormItem label="是否换行" name="lineBreak" valuePropName="checked">
                        <Checkbox />
                    </FormItem>
                    {
                        (configureMsg.type === 'checkbox' || configureMsg.type === 'select') &&
                        <FormItem label="内容(可多选)" name="text">
                            <Select style={{width: "200px"}} mode="multiple" labelInValue={true}>
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                                <Option value="jack1">jack1</Option>
                                <Option value="lucy2">lucy2</Option>
                                <Option value="jack3">jack3</Option>
                                <Option value="lucy4">lucy4</Option>
                                <Option value="jack5">jack5</Option>
                                <Option value="lucy6">lucy6</Option>
                            </Select>
                        </FormItem>
                    }
                    {
                        configureMsg.type === 'table' && 
                        <div>
                            <FormItem label="表格头部(多选)" name="tableHead">
                            <Select style={{width: "200px"}} mode="multiple" labelInValue={true}>
                                <OptGroup label="基础信息">
                                    <Option value="createTime">创建时间</Option>
                                    <Option value="createName">创建人</Option>
                                </OptGroup>
                                <OptGroup label="护理信息">
                                    <Option value="nursingDiagnosis">护理诊断</Option>
                                    <Option value="nursingTarget">护理目标</Option>
                                    <Option value="nursingEvaluate">护理评价</Option>
                                    <Option value="nursingPlan">护理计划</Option>
                                </OptGroup>
                            </Select>
                            </FormItem>
                        </div>
                    }
                </Form>
            </div>
        )
    }
}

export default RightConfigurePage