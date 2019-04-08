import React from "react"
import { Layout } from 'antd';
const { Content } = Layout;

export default ()=>{
    return <Layout>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }}>
                       <h1 style={{fontSize:"22px"}}>手机软件方向：react-native、H5....</h1>
                    </Content>
                </Layout>
            </Layout>
}