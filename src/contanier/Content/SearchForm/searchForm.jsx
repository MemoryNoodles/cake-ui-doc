import React, { Component } from "react";
import { SearchForm } from "cake-ui";
import { Popover, Icon, message } from "antd"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'; 


const Code = () => {
    var  codeString = `

            static searchConfig = [
                // 过滤表单配置示例
                {
                    name: "姓名",
                    type: "text",
                    keyName: "name",
                    placeholder: "请输入姓名",
                    onChange:(e, form)=> {
                        // 除了联动，一般用不上
                        console.log(e.target, e.target.value, form);
                    }
                },
                {
                    name: "年龄",
                    type: "number",
                    keyName: "age",
                    placeholder: "请输入年龄",
                },
                {
                    name: "性别",
                    type: "radio",
                    keyName: "sex",
                    defaultValue:1,
                    options: [
                        { value: 1, label: "男" },
                        { value: 2, label: "女" },
                    ]
                },
                {
                    name: "爱好",
                    type: "radioTag",
                    keyName: "habby",
                    defaultValue:1,
                    options: [
                        { value: 1, label: "唱歌" },
                        { value: 2, label: "跳舞" },
                        { value: 3, label: "画画" },
                    ]
                },
                {
                    name: "类型",
                    type: "select",
                    keyName: "type",
                    defaultValue:1,
                    options: [
                        { value: 1, label: "111" },
                        { value: 2, label: "222" },
                        { value: 3, label: "333" }
                    ]
                },
                {
                    name: "日期",
                    keyName: "date",
                    type: "date",
                    dateType: "date",
                    placeholder: "请选择时间",
                    // disabledDate:(current)=>{
                    //     return current && current < moment("2018-08-14", "YYYY-MM-DD")
                    // }
                },
                {
                    name: "周",
                    keyName: "week",
                    type: "date",
                    dateType: "week",
                    placeholder: "请选择时间"
                },
                {
                    name: "月份",
                    keyName: "month",
                    type: "date",
                    dateType: "month",
                    placeholder: "请选择时间"
                },
                {
                    name: "时间范围",
                    keyName: "range",
                    type: "dateRange",
                    colSpan: 8,
                    mdColSpan: 10,
                    smColSpan: 12,
                },
            ];

            queryData=(json) =>{
                
            }

            render() {
                
                return (
                    <div>
                        <h2>以下是 SearchForm 示例：</h2>
                        <SearchForm
                config={SearchFormDemo.searchConfig}
                reset={this.resetSearch}
                search={this.queryData}
                collapse={true}
                // ref={ins=>this.searchFormIns=ins}
            />
        </div>
    )
}

`;
    return <SyntaxHighlighter id="code" language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;  
 };

export default class SearchFormDemo extends Component {
    static searchConfig = [
        // 过滤表单配置示例
        {
            name: "姓名",
            type: "text",
            keyName: "name",
            placeholder: "请输入姓名",
            onChange:(e, form)=> {
                // 除了联动，一般用不上
                console.log(e.target, e.target.value, form);
            }
        },
        {
            name: "年龄",
            type: "number",
            keyName: "age",
            placeholder: "请输入年龄",
        },
        {
            name: "性别",
            type: "radio",
            keyName: "sex",
            defaultValue:1,
            options: [
                { value: 1, label: "男" },
                { value: 2, label: "女" },
            ]
        },
        {
            name: "爱好",
            type: "radioTag",
            keyName: "habby",
            defaultValue:1,
            options: [
                { value: 1, label: "唱歌" },
                { value: 2, label: "跳舞" },
                { value: 3, label: "画画" },
            ]
        },
        {
            name: "类型",
            type: "select",
            keyName: "type",
            defaultValue:1,
            options: [
                { value: 1, label: "111" },
                { value: 2, label: "222" },
                { value: 3, label: "333" }
            ]
        },
        {
            name: "日期",
            keyName: "date",
            type: "date",
            dateType: "date",
            placeholder: "请选择时间",
            // disabledDate:(current)=>{
            //     return current && current < moment("2018-08-14", "YYYY-MM-DD")
            // }
        },
        {
            name: "周",
            keyName: "week",
            type: "date",
            dateType: "week",
            placeholder: "请选择时间"
        },
        {
            name: "月份",
            keyName: "month",
            type: "date",
            dateType: "month",
            placeholder: "请选择时间"
        },
        {
            name: "时间范围",
            keyName: "range",
            type: "dateRange",
            colSpan: 8,
            mdColSpan: 10,
            smColSpan: 12,
        },
    ];
    
    constructor(props){
        super(props)
        this.state = {
            isCodeCollpase:false
        }
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

    queryData=(json) =>{
        
    }
    
    render() {
        const { isCodeCollpase } = this.state;
        return (
            <div>
                <h2>以下是 SearchForm 示例：</h2>
                <SearchForm
                    config={SearchFormDemo.searchConfig}
                    reset={this.resetSearch}
                    search={this.queryData}
                    collapse={true}
                    // ref={ins=>this.searchFormIns=ins}
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

