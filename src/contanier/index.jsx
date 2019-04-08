import React from "react"
import {Route, NavLink} from "react-router-dom";
import { Layout } from 'antd';
import Loadable from "react-loadable";
import "../index.less"
import MyLoadingComponent from "../components/loadComponents";

const { Header } = Layout;
const Component = Loadable({
    loader: () => import('./Component'),
    loading: MyLoadingComponent
})
const Doc = Loadable({
    loader: () => import('./Docs'),
    loading: MyLoadingComponent
})
const ReactCli = Loadable({
    loader: () => import('./ReactCli'),
    loading: MyLoadingComponent
})
const LearnGo = Loadable({
    loader: () => import('./LearnGo/index'),
    loading: MyLoadingComponent
})

export default class Contanier extends React.Component{
  
    componentDidMount(){
       const url = document.location.href.split("#")[1];
        if (url == "/" ) {
            this.props.history.push("/doc")
        }
    }

    render(){
        
        return <Layout>
                    <Header className="header">
                       <div className="logo" ><span></span>cake-ui-doc</div>
                       <div className="headMenu">
                           <NavLink to="/doc" >组件文档</NavLink>
                           <NavLink to="/component/payAttention">组件</NavLink>
                           <NavLink to="/ReactCli/cli">脚手架</NavLink>
                           <NavLink to="/LearnGo">学习方向</NavLink>
                       </div>
                    </Header>
                    <Route path="/doc" component={Doc} />
                    <Route path="/component" component={Component} />
                    <Route path="/reactCli" component={ReactCli} />
                    <Route path="/LearnGo" component={LearnGo} />
                </Layout>
    }
}


