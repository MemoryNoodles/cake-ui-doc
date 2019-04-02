import React, { Component } from "react";
import { SearchForm } from "cake-ui";
import CodeStatus from "~/components/codeStatus.jsx";
import CodeLight from "~/components/codeLight.jsx";
import Doc from "~/components/doc.jsx";

var codeString = `

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
                search={this.queryData}
                collapse={true}                
                // ref={ins=>this.searchFormIns=ins}
            />
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
      para: "type",
      statement: "类型, 文本框的类型,详细请查看示列代码",
      type: "string",
      defaultVal: "text"
    },
    {
      key: "2",
      para: "keyName",
      statement: "文本框的name,表单提交的时候要用的",
      type: "string",
      defaultVal: ""
    },
    {
      key: "3",
      para: "dateType",
      statement: "关于时间的选择类型，week,month等",
      type: "string",
      defaultVal: ""
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
      para: "config",
      statement: "搜索表单的配置项",
      type: "object",
      defaultVal: "text"
    },
    {
      key: "2",
      para: "search",
      statement: "点击搜索时执行的方法",
      type: "function",
      defaultVal: ""
    },
    {
      key: "3",
      para: "collapse",
      statement: "是否折叠",
      type: "boolean",
      defaultVal: ""
    },
    {
      key: "4",
      para: "collapsedShowRow",
      statement: "折叠时展示几行",
      type: "string",
      defaultVal: "1"
    },
    {
      key: "5",
      para: "ref",
      statement: "获取表单对象，用于操作表单内部方法",
      type: "function",
      defaultVal: ""
    },
    {
      key: "6",
      para: "buttonsColSpan",
      statement: "按钮占用位置的大小",
      type: "number",
      defaultVal: "4"
    },
    {
      key: "7",
      para: "justify",
      statement: "对齐方式",
      type: "string",
      defaultVal: "start"
    },
    {
      key: "8",
      para: "wrapClassName",
      statement: "外层class",
      type: "string",
      defaultVal: ""
    },
    {
      key: "9",
      para: "resetType",
      statement: "1:重置后自动查询  2：重置后不自动查询",
      type: "string",
      defaultVal: "1"
    },
  ];

export default class SearchFormDemo extends CodeStatus {
  static searchConfig = [
    // 过滤表单配置示例
    {
      name: "姓名",
      type: "text",
      keyName: "name",
      placeholder: "请输入姓名",
      onChange: (e, form) => {
        // 除了联动，一般用不上
        console.log(e.target, e.target.value, form);
      }
    },
    {
      name: "年龄",
      type: "number",
      keyName: "age",
      placeholder: "请输入年龄"
    },
    {
      name: "性别",
      type: "radio",
      keyName: "sex",
      defaultValue: 1,
      options: [{ value: 1, label: "男" }, { value: 2, label: "女" }]
    },
    {
      name: "爱好",
      type: "radioTag",
      keyName: "habby",
      defaultValue: 1,
      options: [
        { value: 1, label: "唱歌" },
        { value: 2, label: "跳舞" },
        { value: 3, label: "画画" }
      ]
    },
    {
      name: "类型",
      type: "select",
      keyName: "type",
      defaultValue: 1,
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
      placeholder: "请选择时间"
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
      smColSpan: 12
    }
  ];

  queryData = json => {};

  render() {
    const { isCodeCollpase } = this.state;
    return (
      <div>
        <h2>以下是 SearchForm 示例：</h2>
        <SearchForm
          config={SearchFormDemo.searchConfig}
          search={this.queryData}
          collapse={true}
          // ref={ins=>this.searchFormIns=ins}
        />
        {this.controlCode()}
        <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString} />
        {/* 参数说明 */}
        <h2>组件属性</h2>
        <Doc col={columns2} data={data2} />
        <h2>配置字段名</h2>
        <Doc col={columns} data={data} />
      </div>
    );
  }
}
