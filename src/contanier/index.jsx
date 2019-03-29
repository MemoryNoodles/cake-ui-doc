import React from "react"
import {Route} from "react-router-dom";
import { Layout } from 'antd';
import Loadable from "react-loadable";
import "../index.less"
import AsideMenu from "./Aside/asideMenu"  
import MyLoadingComponent from "../components/loadComponents";

const { Header, Content } = Layout;

const routes = [
    {
        path: "searchForm",
        component: Loadable({
            loader: () =>
                import("./Content/SearchForm/searchForm"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "tagGroup",
        component: Loadable({
            loader: () =>
                import("./Content/TagGroup/tagGroup"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "draggle",
        component: Loadable({
            loader: () =>
                import("./Content/Draggle/draggle.jsx"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "echart",
        component: Loadable({
            loader: () =>
                import("./Content/Echart/echart.jsx"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
];


export default class Contanier extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {match} = this.props
        console.log( match, 1212)
        const RouteWithSubRoutes = route => (
            <Route
                path={`/${route.path}`}
                render={props => <route.component {...props} routes={route.routes}/>}
            />
        );
        return <Layout>
                    <Header className="header">
                       <div className="logo" ><span></span>cake-ui-doc</div>
                    </Header>
                    <Layout>
                    <AsideMenu />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }}>
                              {routes.map((route) => (
                                    <RouteWithSubRoutes key={route.path} {...route} />
                                ))}
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
    }
}


