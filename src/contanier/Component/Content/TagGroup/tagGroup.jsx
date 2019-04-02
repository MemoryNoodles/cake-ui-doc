import React, { Component } from "react";
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx" 
import { CheckTagGroup } from "cake-ui"; 
import Doc from "~/components/doc.jsx";

var  codeString = `

constructor(props) {
    super(props);
    this.state = {
        tags:[
            {value:1,label:"苹果",withPoint:true},
            {value:2,label:"香蕉",},
            {value:2,label:"菠萝",},
            {value:3,label:"橘子",},
            {value:4,label:"柠檬",disabled:true},
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

/* 文档配置 */
const columns  = [
    {
      title: "参数",
      dataIndex: "para",
    },
    {
      title: "说明",
      dataIndex: "statement"
    },
    {
      title: "类型",
      dataIndex: "type"
    },
    {
      title: "默认值",
      dataIndex: "defaultVal"
    }
    
  ];
const data = [
    {
      key: "1",
      para: "value",
      statement: "表单提交的时候tag里的值",
      type: "string",
      defaultVal: "text"
    },
    {
      key: "2",
      para: "label",
      statement: "表单的显示值",
      type: "string",
      defaultVal: ""
    },
    {
      key: "3",
      para: "withPoint",
      statement: "是否有红点",
      type: "boolean",
      defaultVal: "false"
    },
    {
      key: "4",
      para: "disabled",
      statement: "是否可用",
      type: "boolean",
      defaultVal: "false"
    }
  ];

//组件属性配置
const columns2  = [
    {
      title: "参数",
      dataIndex: "para",
    },
    {
      title: "说明",
      dataIndex: "statement"
    },
    {
      title: "类型",
      dataIndex: "type"
    },
    {
      title: "默认值",
      dataIndex: "defaultVal"
    }
    
  ];
const data2 = [
    {
      key: "1",
      para: "defaultCheckedList",
      statement: "tag中默认选中的项",
      type: "object",
      defaultVal: "[]"
    },
    {
      key: "2",
      para: "onChange",
      statement: "点击tag执行的函数",
      type: "function",
      defaultVal: ""
    },
    {
      key: "3",
      para: "type",
      statement: "类型",
      type: "string",
      defaultVal: "checkbox"
    },
    {
      key: "4",
      para: "tags",
      statement: "tag选项",
      type: "[]",
      defaultVal: ""
    },
    {
      key: "5",
      para: "wrapClassName",
      statement: "添加额外的class",
      type: "string",
      defaultVal: ""
    },
    {
      key: "6",
      para: "tagClassName",
      statement: "元素tag的class",
      type: "string",
      defaultVal: ""
    }
  ];


export default class CheckTagGroupDemo extends CodeStatus {
    constructor(props) {
        super(props);
        this.state = {
            tags:[
                {value:1,label:"苹果",withPoint:true},
                {value:2,label:"香蕉",},
                {value:2,label:"菠萝",},
                {value:3,label:"橘子",},
                {value:4,label:"柠檬",disabled:true}
            ],
            checkedTags:[2,3],
        };
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
                    {this.controlCode()}
                    <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                      {/* 参数说明 */}
                    <h2>组件属性</h2>
                    <Doc col={columns2} data={data2} />
                    <h2>配置字段名</h2>
                    <Doc col={columns} data={data} />
            </div>
        )
    }
}

