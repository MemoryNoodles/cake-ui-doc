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
        url:"tagGroup",
        text:"tag标签"
    },
    {
        url:"draggableModa",
        text:"拖拽"
    },
    {
        url:"echarts",
        text:"图表"
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
        url:"editor",
        text:"编辑器"
    }
];
export default class AsideMenu extends React.Component{
    render(){

        return   <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" title={<span><Icon type="user" />范例</span>}>
                        {
                            menus.map((item, index)=>{
                             return <Menu.Item key={index} ><Link to={item.url}>{item.text}</Link></Menu.Item>
                            })
                        }
                    </SubMenu> 
                    </Menu>
                </Sider>
    }
}