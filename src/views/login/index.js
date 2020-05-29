import React, { Component, Fragment } from 'react';
import './index.scss';

class Login extends Component {
    constructor(){
        super();
        this.state={}
    }
    render(){
        return (
            <Fragment>
                <div className="formWrap">
                    <div className="formHeader">
                        <h4>登录</h4>
                        <span>账号注册</span>
                    </div>
                    <div className="formContent">

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login;