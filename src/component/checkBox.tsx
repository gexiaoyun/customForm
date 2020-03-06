import * as React from 'react'
import {Checkbox} from 'antd'
export interface IntProps {
    configure: any
}

class CheckBox extends React.Component<IntProps, {}> {
    
    render(): React.ReactNode {
        const { configure: { content } } = this.props
        let propsStyle = {
            style: {
                width: content.width ? `${content.width}px` : '200px',
                margin: content.magrin ? `${content.margin}px` : '5px'
            }
        }

        return (
            <div {...propsStyle}>
                {
                    !content.hideName && <span style={{marginRight: '10px'}}>{content.name || '题目'}:</span>
                }{
                    Array.isArray(content.text) && content.text.length > 0 ? content.text.map((o: any, i: number) => {
                    return <Checkbox key={i}>{o.value}</Checkbox>
                    })
                    :
                    <React.Fragment>
                        <Checkbox>选项</Checkbox>
                        <Checkbox>选项</Checkbox>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default CheckBox;