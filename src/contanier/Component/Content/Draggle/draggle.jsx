import React, { Component } from "react";
import { Button } from "antd";
import { DraggableModal } from "cake-ui"; // eslint-disable-line
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"
import Doc from "~/components/doc.jsx";

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
      para: "width",
      statement: "弹出框宽度",
      type: "number",
      defaultVal: "520"
    },
    {
      key: "2",
      para: "top",
      statement: "距离顶部距离",
      type: "number",
      defaultVal: "100"
    },
    {
      key: "3",
      para: "title",
      statement: "弹出框标题",
      type: "string",
      defaultVal: "Drag-Modal"
    },
    {
      key: "4",
      para: "visible",
      statement: "弹出框是否显示",
      type: "boolean",
      defaultVal: "false"
    },
    {
      key: "5",
      para: "wrapClassName",
      statement: "给元素添加额外的class",
      type: "string",
      defaultVal: ""
    },
    {
      key: "6",
      para: "afterCloseToInitPosition",
      statement: "拖动弹框关闭后是否回归初始位置",
      type: "boolean",
      defaultVal: "true"
    }
];


export default class DraggableModalDemo extends CodeStatus {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
        };
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
                {this.controlCode()}
                <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                {/* 参数说明 */}
                <h2>组件属性</h2>
                <Doc col={columns2} data={data2} />
            </div>
        )
    }
}

