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

export default class Contanier extends React.Component{
  
    componentDidMount(){
        const {match} = this.props;
        if (match.url == "/" ) {
            this.props.history.push("/doc")
        }
    }

    render(){
        
        return <Layout>
                    <Header className="header">
                       <div className="logo" ><span></span>cake-ui-doc</div>
                       <div className="headMenu">
                           <NavLink to="/doc" >文档</NavLink>
                           <NavLink to="/component">组件</NavLink>
                           <NavLink to="/component">脚手架</NavLink>
                       </div>
                    </Header>
                    <Route path="/doc" component={Doc} />
                    <Route path="/component" component={Component} />
                    <Route path="/reactCli" component={ReactCli} />
                </Layout>
    }
}


