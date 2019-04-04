import React from "react"
import { Layout } from 'antd';
const { Content } = Layout;

export default class Contanier extends React.Component{
    render(){
        return <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }}>
                          <h1>使用组件</h1>
                          <pre>
                              <code>npm i cake-ui -g</code>
                          </pre>
                        </Content>
                    </Layout>
                </Layout>
    }
}


