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
        path: "searchForm",
        component: Loadable({
            loader: () =>
                import("./Content/SearchForm/searchForm"),
            loading: MyLoadingComponent
        }),
         isExact: true
    },
    {
        path: "payAttention",
        component: Loadable({
            loader: () =>
                import("./Content/PayAttention/payAttention"),
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
                import("./Content/Draggle/draggle"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    
    {
        path: "form",
        component: Loadable({
            loader: () =>
                import("./Content/Form/form"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "table",
        component: Loadable({
            loader: () =>
                import("./Content/Table/table"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "editor",
        component: Loadable({
            loader: () =>
                import("./Content/Editor/editor"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "transferTag",
        component: Loadable({
            loader: () =>
                import("./Content/TransferTag/transferTag"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "lineChart",
        component: Loadable({
            loader: () =>
                import("./Content/Echart/lineChart"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "pieChart",
        component: Loadable({
            loader: () =>
                import("./Content/Echart/pieChart"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "barChart",
        component: Loadable({
            loader: () =>
                import("./Content/Echart/barChart"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "ringChart",
        component: Loadable({
            loader: () =>
                import("./Content/Echart/ringChart"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "photoView",
        component: Loadable({
            loader: () =>
                import("./Content/PhotoView/photoView"),
            loading: MyLoadingComponent
        }),
        isExact: true
    },
    {
        path: "popForm",
        component: Loadable({
            loader: () =>
                import("./Content/PopForm/popForm"),
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


