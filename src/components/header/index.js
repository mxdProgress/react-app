import React , {Component,Fragment} from 'react';
import {MenuFoldOutlined } from '@ant-design/icons';

class Header extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    toggle = () => {
        this.props.toggleCollapsed()
        
    }

    render(){
        return(
            <Fragment>
                <span style={{fontSize:'20px', cursor:'pointer', margin:'0 0 0 20px'}}  onClick={this.toggle}><MenuFoldOutlined /></span>
            </Fragment>
        )
    }
}

export default Header;