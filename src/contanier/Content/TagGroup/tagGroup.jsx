import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'; 
import { CheckTagGroup } from "cake-ui"; 
import { Popover, Icon, message } from "antd"


const Code = () => {
    var  codeString = `

    constructor(props) {
        super(props);
        this.state = {
            tags:[
                {value:1,label:"苹果",extraProps:'apple',withPoint:true},
                {value:2,label:"香蕉",extraProps:'banana'},
                {value:2,label:"菠萝",extraProps:'pineapple'},
                {value:3,label:"橘子",extraProps:'orange'},
                {value:4,label:"柠檬",extraProps:'lemon',disabled:true},
            ],
            checkedTags:[2,3]
        };
    }


    render() {

        return (
            <div>
               <div>
                   <h2>以下是 CheckTagGroupDemo 示例：</h2>
                   <CheckTagGroup
                       defaultCheckedList={this.state.checkedTags}
                       onChange={(checkedList,checkedTags) => {
                           console.log('checkedList：',checkedList,'checkedTags：',checkedTags)
                           this.setState({checkedTags:checkedList})
                       }}
                       tags={this.state.tags}
                       // type="radio"
                   />
               </div>
            </div>
        )
    }

`;
    return <SyntaxHighlighter id="code" language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;  
};


export default class CheckTagGroupDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags:[
                {value:1,label:"苹果",extraProps:'apple',withPoint:true},
                {value:2,label:"香蕉",extraProps:'banana'},
                {value:2,label:"菠萝",extraProps:'pineapple'},
                {value:3,label:"橘子",extraProps:'orange'},
                {value:4,label:"柠檬",extraProps:'lemon',disabled:true},
            ],
            checkedTags:[2,3],
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
                   <h2>以下是 CheckTagGroupDemo 示例：</h2>
                   <CheckTagGroup
                       defaultCheckedList={this.state.checkedTags}
                       onChange={(checkedList,checkedTags) => {
                           console.log('checkedList：',checkedList,'checkedTags：',checkedTags)
                           this.setState({checkedTags:checkedList})
                       }}
                       tags={this.state.tags}
                       // type="radio"
                   />
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

