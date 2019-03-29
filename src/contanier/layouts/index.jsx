import React from "react"
import Aside from "./Aside"
import {
    Layout
} from 'antd';
  
const { Header, Content } = Layout;

export default class App extends React.Component{
    render(){
        return <Layout>
                    <Header className="header">
                       <div className="logo" ><img src="./src/asset/images/logo.svg" />cake-ui-doc</div>
                    </Header>
                    <Layout>
                    
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }}
                        >
                        Content
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
    }
}


