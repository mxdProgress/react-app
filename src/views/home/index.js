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

    toggleCollapsed = () =>{
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        })
        sessionStorage.setItem('refreshMenu',collapsed)
    }

    //刷新页面时记录菜单是否隐藏
    componentDidMount(){
        const collapsed = JSON.parse(sessionStorage.getItem('refreshMenu'));
        this.setState({
            collapsed
        });
    }
    


    render(){
        return (
            <Layout style={{height:'100vh'}}>
                <Sider width={200}  collapsible  collapsed={this.state.collapsed}  trigger={null}>
                    <SiderLayer  collapsed={this.state.collapsed}/>
                </Sider>

                <Layout>
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <HeaderLayer toggleCollapsed={this.toggleCollapsed} />
                    </Header>
                    <Content className="site-layout-background">
                        <ContentLayer />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Home;