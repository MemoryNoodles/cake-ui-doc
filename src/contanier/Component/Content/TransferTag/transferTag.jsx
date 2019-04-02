import React, { Component } from 'react';
import { TransferTag } from "cake-ui"; // eslint-disable-line
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx" 
import Doc from "~/components/doc.jsx";

var  codeString = `

constructor(props, context) {
    super(props, context);
    this.state = {
        sourceData:[]
    }

}
componentDidMount(){
    this.queryData();
}
/* 请求初始数据 并对数据做处理 */
queryData = () => {
    const sourceData = [];
    /* 这个数据只是模拟数据  具体的要自己去请求 */
    for(let i=0; i<10; i++){
        sourceData.push({label:"张三",value:i})
    }
    this.setState({
        sourceData
    })
}
delPermission = (arr,callback) => {
    const flag = true;
    new Promise((resolve) =>{
        resolve();
    } ).then(()=>{
        callback(flag)
    })
    return flag;
}
render() {

    return (
       <div>
           <h1>以下是穿梭过滤框组件示例</h1>
           <div style={{width:320,margin:"0 auto"}} >
               <TransferTag value={[{value:"1",label:"测试"}]} 
                            sourceData={this.state.sourceData} 
                            delPermission={(arr,callback)=>{
                                this.delPermission(arr,callback)
                            }} 
                 />
           </div>
       </div>
    );
}

`;


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
      para: "targetTitle",
      statement: "已选中栏的title",
      type: "string",
      defaultVal: "已选中"
    },
    {
      key: "2",
      para: "sourceTitle",
      statement: "未选中栏的title",
      type: "string",
      defaultVal: "未选中"
    },
    {
      key: "3",
      para: "sourceData",
      statement: "未选中栏的数据",
      type: "object",
      defaultVal: "[]"
    },
    {
      key: "4",
      para: "onChange",
      statement: "点击触发的事件",
      type: "function",
      defaultVal: ""
    },
    {
      key: "5",
      para: "targetFilter",
      statement: "已选中栏是否出现过滤搜索栏",
      type: "boolean",
      defaultVal: "true"
    },
    {
      key: "6",
      para: "sourceFilter",
      statement: "未选中栏是否出现过滤搜索栏",
      type: "boolean",
      defaultVal: "true"
    },
    {
      key: "7",
      para: "style",
      statement: "添加其他的样式",
      type: "object",
      defaultVal: ""
    },
    {
      key: "8",
      para: "className",
      statement: "添加额外class",
      type: "string",
      defaultVal: ""
    },
    {
      key: "9",
      para: "value",
      statement: "已选中栏的数据",
      type: "object",
      defaultVal: "[]"
    },
    {
      key: "9",
      para: "delPermission",
      statement: "删除已选中栏中数据",
      type: "function",
      defaultVal: "[]"
    },
];



class TransferTagDemo extends CodeStatus {
    constructor(props, context) {
        super(props, context);
        this.state = {
            sourceData:[],
        }
    }

    componentDidMount(){
        this.queryData();
    }
    /* 请求初始数据 并对数据做处理 */
    queryData = () => {
        const sourceData = [];
        /* 这个数据只是模拟数据  具体的要自己去请求 */
        for(let i=0; i<10; i++){
            sourceData.push({label:`张三`,value:i})
        }
        this.setState({
            sourceData
        })
    }
    delPermission = (arr,callback) => {
        const flag = true;
        new Promise((resolve) =>{
            resolve();
        } ).then(()=>{
            callback(flag)
        })
        return flag;
    }
    render() {
        const { isCodeCollpase } = this.state;
        return (
           <div>
               <h1>以下是穿梭过滤框组件示例</h1>
               <div style={{width:320,margin:"0 auto"}} >
                   <TransferTag value={[{value:"1",label:"测试"}]} sourceData={this.state.sourceData} delPermission={(arr,callback)=>{this.delPermission(arr,callback)}}  />
               </div>
               {this.controlCode()}
               <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                {/* 参数说明 */}
                <h2>组件属性</h2>
                <Doc col={columns2} data={data2} />
           </div>
        )
    }

}

export default TransferTagDemo;