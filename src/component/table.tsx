import * as React from 'react'
import { Table } from 'antd'

export interface IntProps {
  configure: any
}

interface IntState {
  tableColums: any[]
}

class TableComponent extends React.Component<IntProps, IntState> {

  state: IntState = {
    tableColums: []
  }

    componentWillReceiveProps (nextProps: any) {
        if (nextProps.configure.content && Object.keys(nextProps.configure.content).length > 0) {
          if (nextProps.configure.content.tableHead && nextProps.configure.content.tableHead.length > 0) {
            let headArr = nextProps.configure.content.tableHead.map((o: any, i: number) => {
              let param = {
                title: o.label,
                dataIndex: o.value
              }
              return param
            })
            this.setState({tableColums: headArr})
          }
        }
    }

    componentDidMount () {
      this.columns()
    }

    columns = () => {
      let initialColumns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ]
      this.setState({tableColums: initialColumns}) 
    }
      

    render(): React.ReactNode {
        const { configure: { content } } = this.props
        const { tableColums } = this.state
        const dataSource: any[] = [];
        let propsStyle = {
            style: {
                width: content.width ? `${content.width}px` : '150',
                margin: content.magrin ? `${content.margin}px` : '5px'
            }
        }
        return (
            <div>
               <Table {...propsStyle} dataSource={dataSource} columns={tableColums} />
            </div>
        );
    }
}

export default TableComponent