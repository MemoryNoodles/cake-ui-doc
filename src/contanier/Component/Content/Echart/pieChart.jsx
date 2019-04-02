import React from "react";
import { MyRecharts } from "cake-ui";
import {  message } from "antd"
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"

var  codeString = `

const pieOption = {
    // width: 700, //宽
    // height: 500, //高
    // legend: true, //图例
    //colors: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "blue", "red"], //扇形颜色
    pies: [
        {
            name: "金额",
            value: "pv",
            // cx:350, //圆心X轴
            // cy:250, //圆心Y轴
            // innerRadius:0,      //内径
            // outerRadius:200,    //外径
            // onClick: e => {
            //     console.log(e);
            // },
            // animationDuration: 1000 //动画持续时间
        }
    ],
    data: [
        //传入数据
        {
            name: "18年08月",
            uv: 3500,
            pv: 2400,
            amt: 2400
        },
        {
            name: "18年09月",
            uv: 4200,
            pv: 1398,
            amt: 2210
        },
        {
            name: "18年10月",
            uv: 3800,
            pv: 9800,
            amt: 2290
        },
        {
            name: "18年11月",
            uv: 3800,
            pv: 3908,
            amt: 2000
        },
        {
            name: "18年12月",
            uv: 5000,
            pv: 4800,
            amt: 2181
        },
        {
            name: "19年01月",
            uv: 5000,
            pv: 3800,
            amt: 2500
        }
    ]
};

export default class MyRechartsDemo extends React.Component {
    render() {
        return (
            <div>
                <MyRecharts option={pieOption} type="line" />
            </div>
        );
    }
}

`;


const pieOption = {
    // width: 700, //宽
    // height: 500, //高
    // legend: true, //图例
    //colors: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "blue", "red"], //扇形颜色
    pies: [
        {
            name: "金额",
            value: "pv",
            // cx:350, //圆心X轴
            // cy:250, //圆心Y轴
            // innerRadius:0,      //内径
            // outerRadius:200,    //外径
            // onClick: e => {
            //     console.log(e);
            // },
            // animationDuration: 1000 //动画持续时间
        }
    ],
    data: [
        //传入数据
        {
            name: "18年08月",
            uv: 3500,
            pv: 2400,
            amt: 2400
        },
        {
            name: "18年09月",
            uv: 4200,
            pv: 1398,
            amt: 2210
        },
        {
            name: "18年10月",
            uv: 3800,
            pv: 9800,
            amt: 2290
        },
        {
            name: "18年11月",
            uv: 3800,
            pv: 3908,
            amt: 2000
        },
        {
            name: "18年12月",
            uv: 5000,
            pv: 4800,
            amt: 2181
        },
        {
            name: "19年01月",
            uv: 5000,
            pv: 3800,
            amt: 2500
        }
    ]
};

export default class MyRechartsDemo extends CodeStatus{
    render() {
        const { isCodeCollpase } = this.state;
        return (
            <div>
                <MyRecharts option={pieOption} type="pie" />
                {this.controlCode()}
                <CodeLight  isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                <h2>参数请参照echart官网</h2>
            </div>
        );
    }
}
