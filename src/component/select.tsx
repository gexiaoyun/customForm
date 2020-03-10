import * as React from 'react'
import { Select } from 'antd'
const { Option } = Select

export interface IntProps {
  configure: any
}

class SelectComponent extends React.Component<IntProps, any> {
    render () {
        const { configure: { content } } = this.props
        let propsStyle = {
            style: {
                width: content.width ? `${content.width}px` : '200px',
                margin: content.magrin ? `${content.margin}px` : '5px'
            }
        }

        return (
            <div>
                {
                    !content.hideName && 
                    <span style={{marginRight: '10px'}}>
                        {content.mustFull && <i className="mustFull">*</i>}
                        {content.name || '题目'}:
                    </span>
                }
                <Select {...propsStyle}>
                  {
                      Array.isArray(content.text) && content.text.length > 0 ? content.text.map((o: any, i: number) => {
                      return  <Option key={i} value={o.title}>{o.value}</Option>
                      })
                      :
                      <React.Fragment>
                          <Option value="other">选项</Option>
                      </React.Fragment>
                  }
                </Select>
            </div>
        )
    }
}

export default SelectComponent