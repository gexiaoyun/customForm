import * as React from 'react'
import '../css/edit.css'

interface IntProps {
    removeFromLable: (index: number) => void;
    index: number;
}

class RightSetting extends React.Component<IntProps, {}> {

    removeComponent = (e: any) => {
        e.stopPropagation()
        this.props.removeFromLable(this.props.index)
    }

    render(): React.ReactNode {

        return (
            <div className="settingBtnSty">
                <span onClick={(e: any) => {this.removeComponent(e)} }>X</span>
            </div>

        );
    }
}

export default RightSetting