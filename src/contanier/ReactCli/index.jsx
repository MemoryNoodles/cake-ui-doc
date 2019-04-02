import React from "react"
import {Route} from "react-router-dom";
import { Layout } from 'antd';
import Loadable from "react-loadable";
import "../../index.less"
import AsideMenu from "./Aside/asideMenu"  
import MyLoadingComponent from "../../components/loadComponents";

const {  Content } = Layout;

const routes = [
    {
        path: "cli",
        component: Loadable({
            loader: () =>
                import("./Content/Cli/cli"),
            loading: MyLoadingComponent
        }),
         isExact: true
    },
    {
        path: "autoConfig",
        component: Loadable({
            loader: () =>
                import("./Content/AutoConfig/autoConfig"),
            loading: MyLoadingComponent
        }),
         isExact: true
    },
    {
        path: "autoFile",
        component: Loadable({
            loader: () =>
                import("./Content/AutoFile/autoFile"),
            loading: MyLoadingComponent
        }),
        isExact: true
    }
];

export default class Contanier extends React.Component{
    render(){
        const {match} = this.props;
        
        const RouteWithSubRoutes = route => (
            <Route
                path={`${match.url}/${route.path}`}
                render={props => <route.component {...props} routes={route.routes}/>}
            />
        )
        return <Layout>
                    <AsideMenu {...this.props}/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }}>
                            {routes.map((route) => (
                                    <RouteWithSubRoutes key={route.path} {...route} />
                                ))}
                        </Content>
                    </Layout>
                </Layout>
    }
}


