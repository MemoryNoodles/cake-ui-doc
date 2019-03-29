import React, { Component } from "react";
import { Button } from "antd";
import { DraggableModal } from "cake-ui"; // eslint-disable-line
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'; 
import { Popover, Icon, message } from "antd"

const Code = () => {
    var  codeString = `

    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false
        };
    }


    render() {
        return (
            <div>
                <h2>以下是 DraggableModal 示例：</h2>
                <Button type="primary" onClick={()=>{this.setState({modalVisible:true})}}>点击</Button>
                <DraggableModal
                    ref={(ins)=>{this.modalInstance=ins}}
                    centered
                    // closable={false}
                    destroyOnClose
                    // footer={null}
                    maskClosable={false}
                    onCancel={()=>{this.setState({modalVisible:false})}}
                    title="拖拽弹框示例"
                    visible={this.state.modalVisible}// 关闭时销毁 Modal 里的子元素
                    width={700}
                >
                    111
                </DraggableModal>
            </div>
        )
    }

`;
    return <SyntaxHighlighter id="code" language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;  
};

export default class DraggableModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            isCodeCollpase:false
        };
    }

    changeStatus=()=>{
        this.setState(prevState=>{
            return {isCodeCollpase:!prevState.isCodeCollpase}
        })
    }

    copyFn=()=>{
        const range = document.createRange();
        range.selectNodeContents(document.getElementById("code"));
        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');

        message.success('复制成功');
    }

    render() {
        const { isCodeCollpase } = this.state;
        return (
            <div>
                <h2>以下是 DraggableModal 示例：</h2>
                <Button type="primary" onClick={()=>{this.setState({modalVisible:true})}}>点击</Button>
                <DraggableModal
                    ref={(ins)=>{this.modalInstance=ins}}
                    centered
                    // closable={false}
                    destroyOnClose
                    // footer={null}
                    maskClosable={false}
                    onCancel={()=>{this.setState({modalVisible:false})}}
                    title="拖拽弹框示例"
                    visible={this.state.modalVisible}// 关闭时销毁 Modal 里的子元素
                    width={700}
                >
                    111
                </DraggableModal>
                <div className="codeIco mt-20">
                        <Popover content="复制" className="mr-20">
                            <span onClick={this.copyFn}><Icon type="copy" /></span>
                        </Popover>
                        {
                            isCodeCollpase?<Popover content="显示代码" className="tip">
                                                <span className="code" onClick={this.changeStatus}></span>
                                            </Popover>
                            :<Popover content="收起代码" className="tip">
                                <span className="codeCollpase" onClick={this.changeStatus}></span>
                            </Popover>
                        }
                        
                   </div>
                        {
                            isCodeCollpase?"":<Code />
                        }
            </div>
        )
    }
}

