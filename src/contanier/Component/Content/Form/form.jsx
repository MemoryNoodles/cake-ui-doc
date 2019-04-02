import React, {Component} from "react";
import {Button, Form, InputNumber, Popover, Icon, message} from "antd";
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"
import Doc from "~/components/doc.jsx";
import {MyForm,CheckTagGroup,TransferTag,WangEditor} from "cake-ui";
// 自定义表单组件
const FormItem = Form.Item;


var  codeString = `

constructor(props) {
    super(props);
    this.state = {
        targetList:[{value:"3",label:"23"}]
    };
}
componentDidMount(){
    /* setTimeout(()=>{
        this.setState({targetList:[]})
    },5000) */
}
render() {
    const itemList=[
        {
            name: "文本框",
            keyName: "text",
            type: "text",
            rules: [
                {required: true, message: "请填写", whitespace: true},
            ],
            placeholder: "请输入",
            onChange: (e, form) => {
                console.log(e.target, e.target.value, form)
            }
        },
        {
            name: "数字框",
            keyName: "number",
            type: "number",
            rules: [
                {required: true, message: "请填写"}
            ],
            placeholder: "请输入",
        },
        {
            name: "密码框",
            keyName: "password",
            type: "password",
            rules: [
                {required: true, message: "请填写", whitespace: true}
            ],
            placeholder: "请输入",
            onChange: (e, form) => {
                console.log(e.target, e.target.value, form)
            }
        },
        {
            name: "验证码",
            keyName: "verify",
            type: "verify",
            rules: [
                {required: true, message: "请填写", whitespace: true}
            ],
            placeholder: "请输入",
            onSearch: (e,form,callBack) => {
                console.log(e);
                callBack();
            }
        },
        {
            name: "文本域",
            keyName: "textarea",
            type: "textarea",
            rules: [
                {required: true, message: "请填写", whitespace: true}
            ],
            placeholder: "请输入",
            onChange: (e, form) => {
                console.log(e.target, e.target.value, form)
            }
        },
        {
            name: "上传文件",
            keyName: "file",
            type: "file",
            rules: [
                {required: false, message: "请上传"}
            ],
            placeholder: "请上传",
            onChange: (e, form) => {
                console.log(e.target, e.target.value, form)
            }
        },
        {
            name: "单选框",
            keyName: "radio",
            type: "radio",
            options: [
                {value: "1", label: "先测试"},
                {value: "2", label: "先测试"},
                {value: "3", label: "先测试"},
                {value: "4", label: "先测试"},
                {value: "5", label: "先测试"},
                {value: "6", label: "先测试"},
            ],
            rules: [
                {required: true, message: "请选择"}
            ],
            placeholder: "请选择",
        },
        {
            name: "复选框",
            keyName: "checkbox",
            type: "checkbox",
            options: [
                {value: "1", label: "先测试"},
                {value: "2", label: "先测试"}
            ],
            rules: [
                {required: true, message: "请选择"}
            ],
            placeholder: "请选择",
        },
        {
            name: "下拉框",
            keyName: "select",
            type: "select",
            options: [{
                value: "1", label: "先测试"
            }],
            rules: [
                {required: true, message: "请选择"}
            ],
            placeholder: "请选择",
        },
        {
            name: "日期",
            keyName: "date",
            type: "date",
            options: [{
                value: "1", label: "先测试"
            }],
            rules: [
                {required: true, message: "请选择"}
            ],
            placeholder: "请选择",
        },
        {
            name: "周",
            keyName: "week",
            type: "week",
            options: [{
                value: "1", label: "先测试"
            }],
            rules: [
                {required: true, message: "请选择"}
            ],
            placeholder: "请选择",

        },
        {
            name: "月",
            keyName: "month",
            type: "month",
            options: [{
                value: "1", label: "先测试"
            }],
            rules: [
                {required: true, message: "请选择"}
            ],
            placeholder: "请选择",
        },
        {
            name: "时间",
            keyName: "datetime",
            type: "datetime",
            options: [{
                value: "1", label: "先测试"
            }],
            rules: [
                {required: true, message: "请选择"}
            ],
            placeholder: "请选择",
        },
        {
            name: "自定义编辑器",
            keyName: "editor",
            type: "custom",
            rules: [
                {required: true, message: "请填写"}
            ],
            render: () => <WangEditor />,
        },
        {
            name: "自定义穿梭过滤组件",
            keyName: "filter",
            type: "custom",
            validateStatus:"success",
            defaultValue:[...this.state.targetList],
            rules: [
                {required: true, message: "请填写"}
            ],
            render: () => <TransferTag sourceData={[{value:"1",label:"李四"}]} />,
        },
        {
            name: "自定义组合",
            type: "multiCustom",
            keyName: "message",
            itemStyle: {marginBottom: 0},
            render: (form) => {
                const {getFieldDecorator} = form
                return (
                    <div style={{display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
                        <FormItem style={{marginRight: 16}}>
                            {getFieldDecorator('messageType', {
                                rules: [{required: false, message: "请选择"}],
                                initialValue: "",
                            })(
                                <CheckTagGroup
                                    tags={[
                                        {value: "0", label: ">"},
                                        {value: "1", label: "<"},
                                        {value: "2", label: "="}
                                    ]}
                                    tagStyle={{
                                        width: 45,
                                        height: 28,
                                        lineHeight: "28px",
                                        textAlign: "center",
                                        border: "1px solid #ddd"
                                    }}
                                    type="radioWithCancel"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('messageNum', {
                                rules: [{required: true, message: "请输入"}],
                                initialValue: "",
                            })(
                                <InputNumber min={0} placeholder="请输入" />
                            )}
                        </FormItem>
                    </div>
                )
            }
        },
    ]

    return (
        <div>
            <h2>以下是 MyForm 示例：</h2>
            <div style={{width:800,display:"inline-block"}}>
                <MyForm
                    // formItemLayout={{labelCol: { span: 4},wrapperCol: { span: 17 }}}
                    formLayout="vertical"
                    itemList={itemList}
                    okText="提交"
                    onCancel={()=>{}}
                    onOk={(json)=>{console.log("onOk:",json)}}
                    wrappedComponentRef={(form) => this.myform = form}
                >
                    <Button onClick={()=>{}} style={{marginRight:10}}>取消</Button>
                </MyForm>
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
      para: "rules",
      statement: "提交表单时的验证，validator是为自定义验证",
      type: "function",
      defaultVal: ""
    },
    {
      key: "4",
      para: "onChange",
      statement: "文本框内容改变的时候触发",
      type: "function",
      defaultVal: ""
    },
    {
      key: "5",
      para: "visible",
      statement: "这个state里的配置用于下拉框的显示与否",
      type: "boolean",
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
      para: "initData",
      statement: "弹出表单的配置项, 必传",
      type: "object",
      defaultVal: ""
    },
    {
      key: "2",
      para: "modalVisible",
      statement: "弹出框是否可见, 必传",
      type: "boolean",
      defaultVal: ""
    },
    {
      key: "3",
      para: "formLayout",
      statement: "表单的排列方式, 可以查看antd",
      type: "string",
      defaultVal: "horizontal"
    },
    {
      key: "4",
      para: "formItemLayout",
      statement: "label和input的宽度比列",
      type: "object",
      defaultVal: "{labelCol: {span: 3},wrapperCol: {span: 20}}"
    },
    {
      key: "5",
      para: "withButtonContainter",
      statement: "是否有下面的确定/取消按钮",
      type: "boolean",
      defaultVal: "true"
    },
    {
      key: "6",
      para: "buttonItemLayout",
      statement: "下面按钮的位置，有时需要对齐文本框",
      type: "object",
      defaultVal: "{}"
    },
    {
      key: "7",
      para: "hideRequiredMark",
      statement: "隐藏所有表单项的必选标记",
      type: "boolean",
      defaultVal: "false"
    },
    {
      key: "8",
      para: "hasFeedback",
      statement: "详细请查阅antd",
      type: "boolean",
      itemList: "false"
    },
    {
      key: "9",
      para: "itemList",
      statement: "配置数据",
      type: "object",
      itemList: "[]"
    },
    {
      key: "10",
      para: "itemStyle",
      statement: "额外的style样式",
      type: "object",
      itemList: "{}"
    },
    {
      key: "11",
      para: "onOk",
      statement: "点击确定时执行的函数",
      type: "function",
      itemList: ""
    },
    {
      key: "12",
      para: "okText",
      statement: "更改确定按钮的文字",
      type: "string",
      itemList: "确定"
    },
    
  ];

export default class MyFormTest extends CodeStatus {
    constructor(props) {
        super(props);
        this.state = {
            targetList:[{value:"3",label:"23"}]
        };
    }
    render() {
        const itemList=[
            {
                name: "文本框",
                keyName: "text",
                type: "text",
                rules: [
                    {required: true, message: "请填写", whitespace: true},
                ],
                placeholder: "请输入",
                onChange: (e, form) => {
                    console.log(e.target, e.target.value, form)
                }
            },
            {
                name: "数字框",
                keyName: "number",
                type: "number",
                rules: [
                    {required: true, message: "请填写"}
                ],
                placeholder: "请输入",
            },
            {
                name: "密码框",
                keyName: "password",
                type: "password",
                rules: [
                    {required: true, message: "请填写", whitespace: true}
                ],
                placeholder: "请输入",
                onChange: (e, form) => {
                    console.log(e.target, e.target.value, form)
                }
            },
            {
                name: "验证码",
                keyName: "verify",
                type: "verify",
                rules: [
                    {required: true, message: "请填写", whitespace: true}
                ],
                placeholder: "请输入",
                onSearch: (e,form,callBack) => {
                    console.log(e);
                    callBack();
                }
            },
            {
                name: "文本域",
                keyName: "textarea",
                type: "textarea",
                rules: [
                    {required: true, message: "请填写", whitespace: true}
                ],
                placeholder: "请输入",
                onChange: (e, form) => {
                    console.log(e.target, e.target.value, form)
                }
            },
            {
                name: "上传文件",
                keyName: "file",
                type: "file",
                rules: [
                    {required: false, message: "请上传"}
                ],
                placeholder: "请上传",
                onChange: (e, form) => {
                    console.log(e.target, e.target.value, form)
                }
            },
            {
                name: "单选框",
                keyName: "radio",
                type: "radio",
                options: [
                    {value: "1", label: "先测试"},
                    {value: "2", label: "先测试"},
                    {value: "3", label: "先测试"},
                    {value: "4", label: "先测试"},
                    {value: "5", label: "先测试"},
                    {value: "6", label: "先测试"},
                ],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",
            },
            {
                name: "复选框",
                keyName: "checkbox",
                type: "checkbox",
                options: [
                    {value: "1", label: "先测试"},
                    {value: "2", label: "先测试"}
                ],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",
            },
            {
                name: "下拉框",
                keyName: "select",
                type: "select",
                options: [{
                    value: "1", label: "先测试"
                }],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",
            },
            {
                name: "日期",
                keyName: "date",
                type: "date",
                options: [{
                    value: "1", label: "先测试"
                }],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",
            },
            {
                name: "周",
                keyName: "week",
                type: "week",
                options: [{
                    value: "1", label: "先测试"
                }],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",

            },
            {
                name: "月",
                keyName: "month",
                type: "month",
                options: [{
                    value: "1", label: "先测试"
                }],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",
            },
            {
                name: "时间",
                keyName: "datetime",
                type: "datetime",
                options: [{
                    value: "1", label: "先测试"
                }],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",
            },
            {
                name: "自定义编辑器",
                keyName: "editor",
                type: "custom",
                rules: [
                    {required: true, message: "请填写"}
                ],
                render: () => <WangEditor />,
            },
            {
                name: "自定义穿梭过滤组件",
                keyName: "filter",
                type: "custom",
                validateStatus:"success",
                defaultValue:[...this.state.targetList],
                rules: [
                    {required: true, message: "请填写"}
                ],
                render: () => <TransferTag sourceData={[{value:"1",label:"李四"}]} />,
            },
            {
                name: "自定义组合",
                type: "multiCustom",
                keyName: "message",
                itemStyle: {marginBottom: 0},
                render: (form) => {
                    const {getFieldDecorator} = form
                    return (
                        <div style={{display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
                            <FormItem style={{marginRight: 16}}>
                                {getFieldDecorator('messageType', {
                                    rules: [{required: false, message: "请选择"}],
                                    initialValue: "",
                                })(
                                    <CheckTagGroup
                                        tags={[
                                            {value: "0", label: ">"},
                                            {value: "1", label: "<"},
                                            {value: "2", label: "="}
                                        ]}
                                        tagStyle={{
                                            width: 45,
                                            height: 28,
                                            lineHeight: "28px",
                                            textAlign: "center",
                                            border: "1px solid #ddd"
                                        }}
                                        type="radioWithCancel"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('messageNum', {
                                    rules: [{required: true, message: "请输入"}],
                                    initialValue: "",
                                })(
                                    <InputNumber min={0} placeholder="请输入" />
                                )}
                            </FormItem>
                        </div>
                    )
                }
            },
        ];

        const { isCodeCollpase } = this.state;
        return (
            <div>
                <h2>以下是 MyForm 示例：</h2>
                <div style={{width:800,display:"inline-block"}}>
                    <MyForm
                        // formItemLayout={{labelCol: { span: 4},wrapperCol: { span: 17 }}}
                        formLayout="vertical"
                        itemList={itemList}
                        okText="提交"
                        onCancel={()=>{}}
                        onOk={(json)=>{console.log("onOk:",json)}}
                        wrappedComponentRef={(form) => this.myform = form}
                    >
                        <Button onClick={()=>{}} style={{marginRight:10}}>取消</Button>
                    </MyForm>

                </div>
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

