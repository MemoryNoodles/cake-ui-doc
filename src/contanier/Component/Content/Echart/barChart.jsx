import React from "react";
import { MyRecharts } from "cake-ui";
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"

var  codeString = `

const barOption = {
    // width: 700, //宽
    // height: 500, //高
    // margin: { left: 30, top: 30, right: 30, bottom: 30 }, //margin
    // x: {
    //     //x轴
    //     tick:{
    //         fill:"red"
    //     },
    //     padding: { left: 30, right: 30 },
    //     lineColor: "blue", //x轴颜色
    //     color: "blue", //x轴刻度颜色
    //     fontSize: 16 //x轴刻度字体大小
    // },
    // y: {
    //     //y轴
    //     tick: true, //刻度
    //     tickLine: true //刻度线
    // },
    bars: [
        //线形图的线
        {
            name: "金额",
            value: "uv",
            //closeAnimation: true //关闭动画
        },
        // {
        //     name: "阿重拍",
        //     value: "pv",
        //     bar: {
        //         barColor: "blue" //线的颜色
        //     },
        //     onClick: e => {
        //         console.log(e);
        //     },
        //     label: {
        //         color: "blue" //数据颜色
        //     },
        //     animationDuration: 1000 //动画持续时间
        // }
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
                <MyRecharts option={barOption} type="bar" />
            </div>
        );
    }
}

`;

const barOption = {
    // width: 700, //宽
    // height: 500, //高
    // margin: { left: 30, top: 30, right: 30, bottom: 30 }, //margin
    // x: {
    //     //x轴
    //     tick:{
    //         fill:"red"
    //     },
    //     padding: { left: 30, right: 30 },
    //     lineColor: "blue", //x轴颜色
    //     color: "blue", //x轴刻度颜色
    //     fontSize: 16 //x轴刻度字体大小
    // },
    // y: {
    //     //y轴
    //     tick: true, //刻度
    //     tickLine: true //刻度线
    // },
    bars: [
        //线形图的线
        {
            name: "金额",
            value: "uv",
            //closeAnimation: true //关闭动画
        },
        // {
        //     name: "阿重拍",
        //     value: "pv",
        //     bar: {
        //         barColor: "blue" //线的颜色
        //     },
        //     onClick: e => {
        //         console.log(e);
        //     },
        //     label: {
        //         color: "blue" //数据颜色
        //     },
        //     animationDuration: 1000 //动画持续时间
        // }
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
                <MyRecharts option={barOption} type="bar" />
                {this.controlCode()}
                <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString}/>
                <h2>参数请参照echart官网</h2>
            </div>
        );
    }
}
