import React, { Component,Fragment } from 'react';
import MenuSider from '../../components/menuSider/index';


class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    

  
    render(){
        return(
            <Fragment>
                <div className={["logo" , this.props.collapsed ? "logoWidth":""].join(' ')}>
                    <div className="logoIcon"></div>
                </div> 
                <MenuSider />
            </Fragment>
        )
    }
}

export default Sider;