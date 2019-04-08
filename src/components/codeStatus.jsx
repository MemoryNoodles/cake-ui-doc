import React from "react"
import { message, Popover, Icon } from "antd"

export default class CodeStatus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isCodeCollpase:false
        }
    }
    changeStatus=()=>{
        this.setState(prevState=>{
            return {isCodeCollpase:!prevState.isCodeCollpase}
        })
    }

    copyFn=(id)=>{
        const range = document.createRange();
        range.selectNodeContents(document.getElementById(id?id:"code"));
        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');

        message.success('复制成功');
    }
    controlCode(id){
        const { isCodeCollpase } = this.state;
        return  <div className="codeIco mt-20">
                    <Popover content="复制" className="mr-20">
                        <span onClick={()=>this.copyFn(id)}><Icon type="copy" /></span>
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
    }
}