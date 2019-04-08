import React, { Component } from "react";
import { Button, Form, InputNumber } from "antd";
import CodeStatus from "~/components/codeStatus.jsx";
import CodeLight from "~/components/codeLight.jsx";
import Doc from "~/components/doc.jsx";
import { PopForm, CheckTagGroup, WangEditor } from "cake-ui"; // eslint-disable-line
// 自定义表单组件
const FormItem = Form.Item;

var codeStringC = ()=>{
    return `

constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
        visible:false
    };
}

initData=()=>{
    return {
        title: "标题",
        itemList: [
            {
                name: "文本框",
                keyName: "text",
                type: "text",
                rules: [
                    {required: true, message: "请填写", whitespace: true},
                    {
                        validator: (rule, value, callback, form) => {
                            console.log(form);
                            if (value && value !== form.getFieldValue("newPwd")) {
                                callback("两次密码不一致！");
                            } else {
                                callback();
                            }
                        }
                    }
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
                    {required: true, message: "请上传"}
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
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
                    {value: "1", label: "先测试"},
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
                    value: "1", label: "先测试",
                },{
                    value: "2", label: "先测试",
                }],
                rules: [
                    {required: true, message: "请选择"}
                ],
                placeholder: "请选择",
                onChange:(value)=>{
                    this.setState({
                        visible:value==="1"
                    })
                },
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
                visible:this.state.visible
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
                render: () => <WangEditor serverUrl="http://192.1687.64:16089" />,
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
                                    rules: [{required: true, message: "请选择"}],
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
        ],
        onCancel: () => {
            this.setState({modalVisible: false})
        },
        onOk: (values) => {
            console.log(values, "123")
        },
        modalWidth: 800
    }
}

render() {
    return (
        <div>
            <h2>以下是 PopForm 示例：</h2>
            <Button
                onClick={() => {
                    this.setState({modalVisible: true})
                }}
                type="primary"
            >点击
            </Button>
            <PopForm
                initData={this.initData()}
                modalVisible={this.state.modalVisible}
            >
                <span >完善信息后可用新验证登录</span>
            </PopForm>
            
        </div>
    )
}

`
};

var codeStringE = ()=>{
    return `

constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
        visible:false
    };
}

initData=()=>{
    return {
        title: "标题",
        itemList: [
            {
                name: "文本框",
                keyName: "text",
                type: "text",
                rules: [
                    {required: true, message: "请填写", whitespace: true},
                    {
                        validator: (rule, value, callback, form) => {
                            console.log(form);
                            if (value && value !== form.getFieldValue("newPwd")) {
                                callback("两次密码不一致！");
                            } else {
                                callback();
                            }
                        }
                    }
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
            
        ],
        onCancel: () => {
            this.setState({modalVisible: false})
        },
        onOk: (values) => {
            console.log(values, "123")
        },
        modalWidth: 800
    }
}

render() {
    return (
        <div>
            <h2>以下是 PopForm 示例：</h2>
            <Button
                onClick={() => {
                    this.setState({modalVisible: true})
                }}
                type="primary"
            >点击
            </Button>
            <PopForm
                initData={this.initData()}
                modalVisible={this.state.modalVisible}
            >
                <span >完善信息后可用新验证登录</span>
            </PopForm>
            
        </div>
    )
}

`
};


/* 文档配置 */
const columns = [
  {
    title: "参数",
    dataIndex: "para"
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
    para: "itemList里的type",
    statement: "类型, 文本框的类型,详细请查看示列代码",
    type: "string",
    defaultVal: "text"
  },
  {
    key: "2",
    para: "itemList里的keyName",
    statement: "文本框的name,表单提交的时候要用的",
    type: "string",
    defaultVal: ""
  },
  {
    key: "3",
    para: "itemList里的rules",
    statement: "提交表单时的验证，validator是为自定义验证",
    type: "function",
    defaultVal: ""
  },
  {
    key: "4",
    para: "itemList里的onChange",
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
  },
  {
    key: "6",
    para: "initData里的title",
    statement: "弹出框标题",
    type: "string",
    defaultVal: ""
  },
  {
    key: "7",
    para: "initData里的modalWidth",
    statement: "弹出框最大宽度",
    type: "number",
    defaultVal: "560"
  },
  {
    key: "8",
    para: "initData里的formItemLayout",
    statement: "label和input的宽度比例",
    type: "object",
    defaultVal: "{labelCol: {span: 4},wrapperCol: {span: 19}}"
  },
  {
    key: "9",
    para: "initData里的closable",
    statement: "弹出框的右上角的叉叉按钮",
    type: "boolean",
    defaultVal: "false"
  },
  {
    key: "10",
    para: "initData里的maskClosable",
    statement: "遮罩层是否可以关闭",
    type: "boolean",
    defaultVal: "false"
  },
  {
    key: "11",
    para: "initData里的canClose",
    statement: "是否可以关闭",
    type: "boolean",
    defaultVal: "true"
  },
  {
    key: "12",
    para: "initData里的destroyOnClose",
    statement: "关闭时是否销毁",
    type: "boolean",
    defaultVal: "true"
  },
  {
    key: "13",
    para: "initData里的customButton",
    statement: "自定义按钮名称，放在最下面和确定取消一起",
    type: "string",
    defaultVal: "null"
  },
  {
    key: "14",
    para: "initData里的customFun",
    statement: "自定义按钮的事件",
    type: "function",
    defaultVal: "null"
  },
  {
    key: "16",
    para: "initData里的okText",
    statement: "确认按钮的文字",
    type: "string",
    defaultVal: ""
  }
];

//组件属性配置
const columns2 = [
  {
    title: "参数",
    dataIndex: "para"
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
    statement: "弹出表单的配置项",
    type: "object",
    defaultVal: ""
  },
  {
    key: "2",
    para: "modalVisible",
    statement: "弹出框是否可见",
    type: "boolean",
    defaultVal: ""
  }
];

export default class PopFormDemo extends CodeStatus {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalVisible2: false,
      visible: false
    };
  }

  initData = () => {
    return {
      title: "标题",
      itemList: [
        {
          name: "文本框",
          keyName: "text",
          type: "text",
          rules: [
            { required: true, message: "请填写", whitespace: true },
            {
              validator: (rule, value, callback, form) => {
                console.log(form);
                if (value && value !== form.getFieldValue("newPwd")) {
                  callback("两次密码不一致！");
                } else {
                  callback();
                }
              }
            }
          ],
          placeholder: "请输入",
          onChange: (e, form) => {
            console.log(e.target, e.target.value, form);
          }
        },
        {
          name: "数字框",
          keyName: "number",
          type: "number",
          rules: [{ required: true, message: "请填写" }],
          placeholder: "请输入"
        },
        {
          name: "密码框",
          keyName: "password",
          type: "password",
          rules: [{ required: true, message: "请填写", whitespace: true }],
          placeholder: "请输入",
          onChange: (e, form) => {
            console.log(e.target, e.target.value, form);
          }
        },
        {
          name: "验证码",
          keyName: "verify",
          type: "verify",
          rules: [{ required: true, message: "请填写", whitespace: true }],
          placeholder: "请输入",
          onSearch: (e, form, callBack) => {
            console.log(e);
            callBack();
          }
        },
        {
          name: "文本域",
          keyName: "textarea",
          type: "textarea",
          rules: [{ required: true, message: "请填写", whitespace: true }],
          placeholder: "请输入",
          onChange: (e, form) => {
            console.log(e.target, e.target.value, form);
          }
        },
        {
          name: "上传文件",
          keyName: "file",
          type: "file",
          rules: [{ required: true, message: "请上传" }],
          placeholder: "请上传",
          onChange: (e, form) => {
            console.log(e.target, e.target.value, form);
          }
        },
        {
          name: "单选框",
          keyName: "radio",
          type: "radio",
          options: [
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" },
            { value: "1", label: "先测试" }
          ],
          rules: [{ required: true, message: "请选择" }],
          placeholder: "请选择"
        },
        {
          name: "复选框",
          keyName: "checkbox",
          type: "checkbox",
          options: [
            { value: "1", label: "先测试" },
            { value: "2", label: "先测试" }
          ],
          rules: [{ required: true, message: "请选择" }],

          placeholder: "请选择"
        },
        {
          name: "下拉框",
          keyName: "select",
          type: "select",
          options: [
            {
              value: "1",
              label: "先测试"
            },
            {
              value: "2",
              label: "先测试"
            }
          ],
          rules: [{ required: true, message: "请选择" }],
          placeholder: "请选择",
          onChange: value => {
            this.setState({
              visible: value === "1"
            });
          }
        },
        {
          name: "日期",
          keyName: "date",
          type: "date",
          options: [
            {
              value: "1",
              label: "先测试"
            }
          ],
          rules: [{ required: true, message: "请选择" }],
          placeholder: "请选择",
          visible: this.state.visible
        },
        {
          name: "周",
          keyName: "week",
          type: "week",
          options: [
            {
              value: "1",
              label: "先测试"
            }
          ],
          rules: [{ required: true, message: "请选择" }],
          placeholder: "请选择"
        },
        {
          name: "月",
          keyName: "month",
          type: "month",
          options: [
            {
              value: "1",
              label: "先测试"
            }
          ],
          rules: [{ required: true, message: "请选择" }],
          placeholder: "请选择"
        },
        {
          name: "时间",
          keyName: "datetime",
          type: "datetime",
          options: [
            {
              value: "1",
              label: "先测试"
            }
          ],
          rules: [{ required: true, message: "请选择" }],
          placeholder: "请选择"
        },
        {
          name: "自定义编辑器",
          keyName: "editor",
          type: "custom",
          rules: [{ required: true, message: "请填写" }],
          render: () => <WangEditor serverUrl="http://192.1687.64:16089" />
        },
        {
          name: "自定义组合",
          type: "multiCustom",
          keyName: "message",
          itemStyle: { marginBottom: 0 },
          render: form => {
            const { getFieldDecorator } = form;
            return (
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "center"
                }}
              >
                <FormItem style={{ marginRight: 16 }}>
                  {getFieldDecorator("messageType", {
                    rules: [{ required: true, message: "请选择" }],
                    initialValue: ""
                  })(
                    <CheckTagGroup
                      tags={[
                        { value: "0", label: ">" },
                        { value: "1", label: "<" },
                        { value: "2", label: "=" }
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
                  {getFieldDecorator("messageNum", {
                    rules: [{ required: true, message: "请输入" }],
                    initialValue: ""
                  })(<InputNumber min={0} placeholder="请输入" />)}
                </FormItem>
              </div>
            );
          }
        }
      ],
      onCancel: () => {
        this.setState({ modalVisible: false });
      },
      onOk: values => {
        console.log(values, "123");
      },
      modalWidth: 800
    };
  };

  initData2 = () =>{
    return {
        title: "标题",
        itemList: [
            {
                name: "文本框",
                keyName: "text",
                type: "text",
                rules: [
                    {required: true, message: "请填写", whitespace: true},
                    {
                        validator: (rule, value, callback, form) => {
                            console.log(form);
                            if (value && value !== form.getFieldValue("newPwd")) {
                                callback("两次密码不一致！");
                            } else {
                                callback();
                            }
                        }
                    }
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
            
        ],
        onCancel: () => {
            this.setState({modalVisible2: false})
        },
        onOk: (values) => {
            console.log(values, "123")
        },
        modalWidth: 800
    }
  }

  render() {
    const { isCodeCollpase } = this.state;
    return (
      <div>
        <h2>以下是 PopForm 示例：</h2>
        <div className="fb">
          <div>
            <Button
              onClick={() => {
                this.setState({ modalVisible: true });
              }}
              type="primary"
            >
              复杂版
            </Button>
            <PopForm
              initData={this.initData()}
              modalVisible={this.state.modalVisible}
            >
              <span>完善信息后可用新验证登录</span>
            </PopForm>
            {this.controlCode("complex")}
            <CodeLight
              isCodeCollpase={isCodeCollpase}
              codeString={codeStringC()}
              id="complex"
            />
          </div>
          {/* 简单版 */}
          <div>
            <Button
              onClick={() => {
                this.setState({ modalVisible2: true });
              }}
              type="primary"
            >
              简单版
            </Button>
            <PopForm
              initData={this.initData2()}
              modalVisible={this.state.modalVisible2}
            >
              <span>完善信息后可用新验证登录</span>
            </PopForm>
            {this.controlCode("easy")}
            <CodeLight
              isCodeCollpase={isCodeCollpase}
              codeString={codeStringE()}
              id="easy"
            />
          </div>
        </div>
        <h2>组件属性</h2>
        <Doc col={columns2} data={data2} />
        <h2>配置字段名</h2>
        <Doc col={columns} data={data} />
      </div>
    );
  }
}
