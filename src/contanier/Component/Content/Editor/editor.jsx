import React, { Component } from 'react';
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"
import { WangEditor } from "cake-ui"; 
import Doc from "~/components/doc.jsx";

var  codeString = `

constructor(props, context) {
    super(props, context);
    this.state = {

    }
    this.dataUrl = sessionStorage.getItem("loginSession")?JSON.parse(sessionStorage.getItem("loginSession")).content.data_url:"";
}
render() {
    return (
        <div >
            <WangEditor serverUrl={this.dataUrl} />
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
      para: "serverUrl",
      statement: "上传图片的地址",
      type: "object| ",
      defaultVal: "空"
    }
  ];


class Editor extends CodeStatus {
    constructor(props, context) {
        super(props, context);
        this.dataUrl = sessionStorage.getItem("loginSession")?JSON.parse(sessionStorage.getItem("loginSession")).content.data_url:"";
    }
    render() {
        const { isCodeCollpase } = this.state
        return (
            <div >
                <WangEditor serverUrl={this.dataUrl} />
                {this.controlCode()}
                <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                {/* 参数说明 */}
                <h2>组件属性</h2>
                <Doc col={columns2} data={data2} />
            </div>
        );
    }

}

export default Editor;