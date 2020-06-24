import React , {Component,Fragment} from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <Fragment>
                <div className="logo">
                    <div className="logoIcon"></div>
                </div>
            </Fragment>
        )
    }
}

export default Header;