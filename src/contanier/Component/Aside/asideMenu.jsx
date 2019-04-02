import React from "react"
import { Link } from "react-router-dom"
import {
    Layout, Menu,  Icon,
} from 'antd';
  
const { SubMenu } = Menu;
const { Sider } = Layout;


const menus =[
    {
        url:"searchForm",
        text:"表单搜索"
    },
    {
        url:"popForm",
        text:"弹出表单"
    },
    {
        url:"form",
        text:"表单"
    },
    {
        url:"table",
        text:"表格"
    },
    {
        url:"tagGroup",
        text:"tag标签"
    },
    {
        url:"draggle",
        text:"拖拽"
    },
    {
        url:"editor",
        text:"编辑器"
    },
    {
        url:"transferTag",
        text:"穿梭框"
    },
    {
        url:"photoView",
        text:"查看图片"
    }
];
const echartsMenu = [
    {
        url:"pieChart",
        text:"饼状图"
    },
    {
        url:"lineChart",
        text:"柱状图"
    },
    {
        url:"barChart",
        text:"条形图"
    },
    {
        url:"ringChart",
        text:"环状图"
    },
];
export default class AsideMenu extends React.Component{
    render(){
        const {match} = this.props;
        return   <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" title={<span><Icon type="table" />范例</span>}>
                        {
                            menus.map((item, index)=>{
                             return <Menu.Item key={index} ><Link to={`${match.url}/${item.url}`}>{item.text}</Link></Menu.Item>
                            })
                        }
                    </SubMenu> 
                    <SubMenu key="sub2" title={<span><Icon type="pie-chart" />图表</span>}>
                        {
                            echartsMenu.map((item, index)=>{
                             return <Menu.Item key={index} ><Link to={`${match.url}/${item.url}`}>{item.text}</Link></Menu.Item>
                            })
                        }
                    </SubMenu> 
                    </Menu>
                </Sider>
    }
}