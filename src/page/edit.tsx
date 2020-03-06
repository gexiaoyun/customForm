import * as React from 'react'
import { Row, Col, Card } from 'antd'
import { componentModules } from '../component'
import RightSetting from '../component/rightSetting'
import RightConfigurePage from './rightConfigurePage'
import '../css/edit.css'

export interface AddComponentType {
    type: string;
    content: any;
    key: number;
}

interface State {
    list: any[];
    showModule: any[];
    rightConfigureMsg: any;
    showRightSetting: boolean;
    showModuleActive: number;
}

class EditModal extends React.Component<{}, State> {

    state: State = {
        list: [{
                name: 'input',
                type: 'input'
            },
            {
                name: 'checkbox',
                type: 'checkbox'
            },
            {
                name: 'table',
                type: 'table'
            },
            {
                name: 'select',
                type: 'select'
            }
        ],
        showModule: [],
        showModuleActive: -1,
        rightConfigureMsg: {},
        showRightSetting: false
    }

    showNode = (type: string, idx: number) => {
        let addComponent: AddComponentType = {
            type: type,
            content: {},
            key: idx
        }
        this.setState({showModule: [...this.state.showModule, addComponent]})
    }

    nodeList = (val: AddComponentType, index: number) => {
        const { CheckBox, InputQ, TableComponent, SelectComponent } = componentModules;
        switch (val.type) {
            case 'input':
                return <InputQ configure={val} key={index} />;
            case 'checkbox':
                return <CheckBox configure={val} key={index} />;
            case 'table':
                return <TableComponent configure={val} key={index}/>;
            case 'select':
                return <SelectComponent configure={val} key={index}/>;
            default:
            return '';
        }
    }

    componentClick = (index: number) => {
        const { showModule } = this.state;
        showModule[index].key = index
        this.setState({
            showModuleActive: index,
            rightConfigureMsg: showModule[index],
            showRightSetting: true
        })
    }

    getRightSettingParame = (param: any) => {
        const { showModule } = this.state;
        Object.assign(showModule[param.key].content, param);
        this.setState({showModule: showModule})
    }

    // 移除组件
    removeFromLable = (index: number) => {
        const { showModule, showRightSetting } = this.state;
        showModule.splice(index, 1)
        this.setState({showModule: showModule}, () => {
            if (this.state.showModule.length > 0) {
                if (showRightSetting) {
                    this.componentClick(this.state.showModule.length - 1)
                }
            } else {
                this.setState({showRightSetting: false})
            }
        })
    }

    render () {

        const { list, showModule, rightConfigureMsg, showRightSetting, showModuleActive } = this.state;
        let promtStyle = {
            style: {
              fontSize: '14px',
              color: '#919191',
              padding: '10px 0 0 10px'
            }
          }

        return (
            <Row>
                <Col className="form-left-module">
                    <Card  title="组件列表">
                        <h2 {...promtStyle}>基础功能</h2>
                        {
                            list.map((o: any, idx: number) => {
                                return <p className="from-label" onClick={() => {this.showNode(o.type, idx); }} key={idx}> 
                                    {o.name}
                                </p>
                            })
                        }
                    </Card>
                </Col>
                <Col span={14} offset="5" className="from-list">
                    <Card  title="表单区域">
                    {
                        showModule.map((val: AddComponentType, index: number) => {
                           return (
                            <React.Fragment 
                                key={`father-${index}`}
                            >   
                                {
                                   val.content.lineBreak && <br/>
                                }
                                <div
                                    onClick={() => {this.componentClick(index)}}
                                    draggable={true}
                                    className={`from-list-module ${showModuleActive === index ? 'active' : '' }`}
                                >
                                    <p className="mask"></p>
                                    {this.nodeList(val, index)}
                                    <RightSetting
                                        index={index}
                                        removeFromLable={this.removeFromLable}
                                    />

                                </div>
                            </React.Fragment>
                           )
                        })
                    }
                    
                    </Card>
                </Col>
                <Col 
                    span={4} 
                    style={{
                        position: 'fixed',
                        height: '100vh',
                        overflowY: 'scroll',
                        top: '0',
                        right: showRightSetting ? '0' : '-100%'
                    }}>
                    <Card  title="参数设置">
                        <RightConfigurePage
                            configureMsg={rightConfigureMsg} 
                            getRightSettingParame={this.getRightSettingParame}
                        />
                    </Card>
                    
                </Col>
            </Row>
        )
    }
}

export default EditModal
