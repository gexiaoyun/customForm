import * as React from 'react'
import {Input} from 'antd'

export interface InputProps {
    configure: any
}

class InputQuestion extends React.Component<InputProps, {}> {
    render(): React.ReactNode {
        const { configure: { content } } = this.props
        let inputStyle = {
            style: {
                width: content.width ? `${content.width}px` : '150px',
                margin: content.magrin ? `${content.margin}px` : '5px'
            }
        }
        return (
            <div>
                {
                    !content.hideName && <span style={{marginRight: '10px'}}>{content.name || '题目'}:</span>
                }
                <Input {...inputStyle} value={content.text}/>
            </div>
        );
    }
}

export default InputQuestion;