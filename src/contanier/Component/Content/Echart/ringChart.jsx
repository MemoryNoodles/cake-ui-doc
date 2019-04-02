import React, { Component } from "react";
import {MyEcharts} from "cake-ui"; // eslint-disable-line\
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"

var  codeString = `

class MyEchartsTest extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },

            series: [
                {
                    name:'星座',
                    type:'pie',
                    selectedMode: 'single',
                    radius: ['50%', '70%'],

                    label: {
                        normal: {
                            position: 'out',
                            fontSize: 20,
                            color:'',
                            fontFamily:'Microsoft Yahei'
                        }
                    },
                    data:[
                        {value:4, name:'双子座'},
                        {value:3, name:'白羊座'},
                        {value:3, name:'金牛座'},
                        {value:2, name:'天蝎座'},
                        {value:2, name:'双鱼座'},
                        {value:2, name:'处女座'},
                        {value:2, name:'射手座'},
                        {value:1, name:'摩羯座'},
                        {value:1, name:'天秤座'},
                        {value:1, name:'水瓶座'},
                        {value:1, name:'狮子座'}
                    ]
                },
                {
                    name:'姓名',
                    type:'pie',
                    hoverAnimation:false,
                    cursor:"default",
                    radius: ['30%', '40%'],
                    label: {
                        show:false
                    },
                    data:[
                        {value:1, name:'1'},
                    ],
                    tooltip:{
                        show:false
                    }
                },
                {
                    name:'部门',
                    type:'pie',
                    hoverAnimation:false,
                    radius: ['0%', '30%'],
                    label: {
                        normal: {
                            position: 'center',
                            fontSize: 22,
                            fontFamily:'Microsoft YaHei',
                            color:'#80F0E3'
                        }
                    },
                    tooltip:{
                        show:false
                    },
                    data:[
                        {value:22, name:'QQ部'}
                    ]
                }
            ]
        };
        return (
            <div style={{height:600}} >
                <h1>echarts实例</h1>
                <MyEcharts option={option} />
            </div>
        );
    }
}

`;

class MyEchartsTest extends CodeStatus{
    render() {
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },

            series: [
                {
                    name:'星座',
                    type:'pie',
                    selectedMode: 'single',
                    radius: ['50%', '70%'],

                    label: {
                        normal: {
                            position: 'out',
                            fontSize: 20,
                            color:'',
                            fontFamily:'Microsoft Yahei'
                        }
                    },
                    data:[
                        {value:4, name:'双子座'},
                        {value:3, name:'白羊座'},
                        {value:3, name:'金牛座'},
                        {value:2, name:'天蝎座'},
                        {value:2, name:'双鱼座'},
                        {value:2, name:'处女座'},
                        {value:2, name:'射手座'},
                        {value:1, name:'摩羯座'},
                        {value:1, name:'天秤座'},
                        {value:1, name:'水瓶座'},
                        {value:1, name:'狮子座'}
                    ]
                },
                {
                    name:'姓名',
                    type:'pie',
                    hoverAnimation:false,
                    cursor:"default",
                    radius: ['30%', '40%'],
                    label: {
                        show:false
                    },
                    data:[
                        {value:1, name:'1'},
                    ],
                    tooltip:{
                        show:false
                    }
                },
                {
                    name:'部门',
                    type:'pie',
                    hoverAnimation:false,
                    radius: ['0%', '30%'],
                    label: {
                        normal: {
                            position: 'center',
                            fontSize: 22,
                            fontFamily:'Microsoft YaHei',
                            color:'#80F0E3'
                        }
                    },
                    tooltip:{
                        show:false
                    },
                    data:[
                        {value:22, name:'QQ部'}
                    ]
                }
            ]
        };
        const { isCodeCollpase } = this.state
        return (
            <div >
                <h1>echarts实例</h1>
                <MyEcharts option={option} />
                {this.controlCode()}
                <CodeLight  isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                <h2>参数请参照echart官网</h2>
            </div>
        );
    }
}
export default MyEchartsTest;
