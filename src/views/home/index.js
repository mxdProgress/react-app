import React, { Component } from 'react';
import { Layout } from 'antd';
import '../home/index.scss';
import SiderLayer from '../../components/sider/index'
import HeaderLayer from '../../components/header/index'
import ContentLayer from '../../components/content/index'
const { Header, Sider, Content } = Layout;

class Home extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }


    render(){
        return (
            <Layout style={{height:'100vh'}}>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <HeaderLayer />
                </Header>
                <Layout>
                    <Sider width={200}  className="site-layout-background">
                        <SiderLayer />
                    </Sider>
                    <Content className="site-layout-background">
                        <ContentLayer />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Home;