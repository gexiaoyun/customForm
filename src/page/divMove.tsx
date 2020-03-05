import * as React from 'react'

class DivMove extends React.Component<{}, {}> {

    state = {
        divArr: [1,2]
    }

    componentDidMount(): void {
    }

    mouseDown = (e: any) => {
        e.stopPropagation();
        let target = e.target;
        target.style.position = 'absolute';
        // 鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
        let  x = e.clientX - target.offsetLeft, y = e.clientY - target.offsetTop;
        document.onmousemove = (e) => {
            e.preventDefault();
            let l = e.clientX - x, t = e.clientY - y;
            if (l < 0) {
                l = 0
            }
            if (t < 0) {
                t = 0
            }
            target.style.top = t+ 'px';
            target.style.left = l+'px';
        };
        target.onmouseup = () => {
            document.onmousemove = null;
            target.onmouseup = null;
        }
    }

    render(): React.ReactNode {
        return (
            <div
                style={{width: '100vw', height: '100vh'}}
            >
                {
                    this.state.divArr.map((o: any, i: any) => {
                       return  <p
                           onMouseDown={(e: any) => {this.mouseDown(e)}}
                           style={{background: 'red', width: '50px', height: '50px'}}
                           key={i}
                       >
                           {o}
                       </p>
                    })
                }            </div>
        );
    }
}

export default DivMove;