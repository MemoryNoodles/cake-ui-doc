import React from "react"
import { Link } from "react-router-dom"
import {
    Layout, Menu,  Icon,
} from 'antd';
  
const { SubMenu } = Menu;
const { Sider } = Layout;


const menus =[
    {
        url:"cli",
        text:"脚手架命令"
    },
    {
        url:"autoConfig",
        text:"自动化配置"
    },
    {
        url:"autoFile",
        text:"自动化菜单"
    }
];

export default class AsideMenu extends React.Component{
    render(){
        const {match} = this.props;
        return   <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['0']}
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
                    </Menu>
                </Sider>
    }
}