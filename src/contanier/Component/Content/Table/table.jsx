import React, { Component } from "react";
import { message, Modal, Popover, Icon } from "antd";
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"
import Doc from "~/components/doc.jsx";
import { TableData } from "cake-ui"; // eslint-disable-line

var  codeString = `

    constructor(props) {
        super(props);
        this.state = {
            messageList: {
                "pageNo": 1,
                "pageSize": 10,
                "totalCount": 17,
                "totalPage": 2,
                "entities": [{
                    "id": 3420,
                    "title": "李静新建了工单,请及时处理!",
                    "sendTime": 1550124987910,
                    "status": 0
                }, {
                    "id": 3416,
                    "title": "张红新建了工单,请及时处理!",
                    "sendTime": 1549004912959,
                    "status": 1
                },  {
                    "id": 3413,
                    "title": "杨智斌新建了工单,请及时处理!",
                    "sendTime": 1548661333053,
                    "status": 0
                }]
            }
        };
    }


    // 请求消息列表
    getMyMessage=(params)=> {}

    // 删除消息
    delInform(id) {
        Modal.confirm({
            title: "您确定删除该消息吗?",
            okText: "确定",
            cancelText: "取消",
            onOk:()=> {
                // 显示删除成功Alert
                message.success("删除成功");
            },
            onCancel() {}
        });
    }

    // 初始化表头数据
    getInitialTableHead() {
        // 设置table的表头标题
        this.tableColumns = [
            {
                width: "30%",
                title: "标题", // 菜单内容
                key: "title", // key
                dataIndex: "title", // key
            },
            {
                width: "20%",
                title: "接收时间",
                key: "sendTime",
                dataIndex: "sendTime",
            },
            {
                width: "20%",
                title: "状态",
                render:status=>{
                    return ["离职", "在职"][status]
                },
                key: "status",
                dataIndex: "status",
            },
            {
                title: "操作",
                key: "operation",
                render: rowData => (
                        <span>
                            <a href="javascript:;" onClick={() => {this.delInform(rowData.id);}}>编辑</a>
                            <a href="javascript:;" onClick={() => {this.delInform(rowData.id);}}>删除</a>
                        </span>
                    )
            }
        ];
        return this.tableColumns;
    }

    render() {
        return (
            <div>
                <h2>以下是 TableData 示例：</h2>
                <TableData
                    columns={this.getInitialTableHead()}
                    dataSource={{ page: this.state.messageList }}
                    intervalColor
                    queryData={params => this.getMyMessage(params)}
                />
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
      para: "columns",
      statement: "表格的表头信息，用getInitialTableHead方法返回，必传",
      type: "object",
      defaultVal: "text"
    },
    {
      key: "2",
      para: "dataSource",
      statement: "表格的列数据，必传",
      type: "function",
      defaultVal: ""
    },
    {
      key: "3",
      para: "queryData",
      statement: "请求表格的列数据，必传",
      type: "function",
      defaultVal: ""
    },
    {
      key: "4",
      para: "intervalColor",
      statement: "隔行变色",
      type: "boolean",
      defaultVal: "false"
    },
    {
      key: "5",
      para: "bordered",
      statement: "有无边框, 不传默认无边框",
      type: "boolean",
      defaultVal: "false"
    },
    {
      key: "6",
      para: "loading",
      statement: "是否等待",
      type: "boolean",
      defaultVal: "false"
    },
    {
      key: "7",
      para: "rowKey",
      statement: "行id",
      type: "function",
      defaultVal: "record => record.id"
    },
    {
      key: "8",
      para: "size",
      statement: "表格的高度和字体大小, small详细查看antd",
      type: "string",
      defaultVal: "default"
    },
    {
      key: "9",
      para: "rowSelection",
      statement: "表格行是否可选择,详细查看antd",
      type: "object",
      defaultVal: "default"
    },
    {
      key: "10",
      para: "pagingSize",
      statement: "当为「small」时，是小尺寸分页",
      type: "string",
      defaultVal: "default"
    },
    {
      key: "11",
      para: "scroll",
      statement: "是否滚动",
      type: "boolean",
      defaultVal: "false"
    },
    {
      key: "12",
      para: "onRow",
      statement: "设置行属性, 详细查看antd",
      type: "function",
      defaultVal: ""
    },
    {
      key: "13",
      para: "rowClassName",
      statement: "表格行的类名",
      type: "string",
      defaultVal: ""
    },
    {
      key: "14",
      para: "components",
      statement: "基本不用，详细查看antd",
      type: "string",
      defaultVal: ""
    },
    {
      key: "15",
      para: "position",
      statement: "指定分页显示的位置",
      type: "string",
      defaultVal: "bottom"
    },
    {
      key: "16",
      para: "pageSizeOptions",
      statement: `分页条数, 默认["10", "20", "30"]`,
      type: "object",
      defaultVal: `["10", "20", "30"]`
    },
  ];


export default class TableDataDemo extends CodeStatus {
    constructor(props) {
        super(props);
        this.state = {
            messageList: {
                "pageNo": 1,
                "pageSize": 10,
                "totalCount": 17,
                "totalPage": 2,
                "entities": [{
                    "id": 3420,
                    "title": "李静新建了工单,请及时处理!",
                    "sendTime": 1550124987910,
                    "status": 0
                }, {
                    "id": 3416,
                    "title": "张红新建了工单,请及时处理!",
                    "sendTime": 1549004912959,
                    "status": 1
                },  {
                    "id": 3413,
                    "title": "杨智斌新建了工单,请及时处理!",
                    "sendTime": 1548661333053,
                    "status": 0
                }]
            },
        };
    }

    // 请求消息列表
    getMyMessage=(params)=> {}

    // 删除消息
    delInform(id) {
        Modal.confirm({
            title: "您确定删除该消息吗?",
            okText: "确定",
            cancelText: "取消",
            onOk:()=> {
                // 显示删除成功Alert
                message.success("删除成功");
            },
            onCancel() {}
        });
    }

    // 初始化表头数据
    getInitialTableHead() {
        // 设置table的表头标题
        this.tableColumns = [
            {
                width: "30%",
                title: "标题", // 菜单内容
                key: "title", // key
                dataIndex: "title", // key
            },
            {
                width: "20%",
                title: "接收时间",
                key: "sendTime",
                dataIndex: "sendTime",
            },
            {
                width: "20%",
                title: "状态",
                render:status=>{
                    return ["离职", "在职"][status]
                },
                key: "status",
                dataIndex: "status",
            },
            {
                title: "操作",
                key: "operation",
                render: rowData => (
                        <span>
                            <a href="javascript:;" onClick={() => {this.delInform(rowData.id);}}>编辑</a>
                            <a href="javascript:;" onClick={() => {this.delInform(rowData.id);}}>删除</a>
                        </span>
                    )
            }
        ];
        return this.tableColumns;
    }

    render() {
        const { isCodeCollpase } = this.state;
        return (
            <div>
                <h2>以下是 TableData 示例：</h2>
                <TableData
                    columns={this.getInitialTableHead()}
                    dataSource={{ page: this.state.messageList }}
                    intervalColor
                    queryData={params => this.getMyMessage(params)}
                />
                {this.controlCode()}
                <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                {/* 参数说明 */}
                <h2>组件属性</h2>
                <Doc col={columns2} data={data2} />
                <h2>配置字段名</h2>
                <p>注意：表头和列信息的字段的对应</p>
            </div>
        )
    }
}

