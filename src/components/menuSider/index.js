import React, { Component , Fragment} from 'react';
import { Link , withRouter} from 'react-router-dom';
import Router from '../../router/index';
import { Menu  } from 'antd';
import { UserOutlined} from '@ant-design/icons';
const { SubMenu} = Menu;

class MenuSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys:[],
            openKeys:[]
        };
    }

    componentDidMount(){
       const pathName = this.props.location.pathname;
       const menuKey = pathName.split('/').slice(0,3).join('/');
        this.setState({
            selectedKeys:[pathName],
            openKeys:[menuKey]
        })
    }

    //无子菜单渲染
    renderMenu = ({title,key}) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>{title}</Link> 
            </Menu.Item>
        )
    }

    //有子菜单渲染
    renderSubMenu = ({title,key,child}) => {
        return (
            <SubMenu key={key} icon={<UserOutlined />} title={title}>
                {child && child.map(item => {
                    return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
                })}
            </SubMenu>
        )
    }

    //菜单点击聚焦背景色
    menuToggle = (key) => {
        const { keyPath } = key;
        this.setState({
            selectedKeys:[keyPath[0]],
            openKeys:[keyPath[1]]
        });
    }

    //菜单切换
    openMenu = (openKeys) =>{
        this.setState({
            openKeys:[openKeys[1]]
        })
    }

    render(){
        const {openKeys , selectedKeys } = this.state;
        return(
            <Fragment>
                    <Menu
                    onOpenChange = {this.openMenu}
                    onClick={this.menuToggle}
                    theme="dark"
                    mode="inline"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            Router && Router.map( firstItem => {
                                return  firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem);
                            })
                        }
                    </Menu>
                    
            </Fragment>
        )
    }
       
}
export default withRouter(MenuSider);


/**
 * withRouter  作用： history, location, match将这三个对象添加props中
*/