import React, { Component, Fragment } from 'react';
import './index.scss';


import LoginForm from './login'
import RegisterForm from './register'

class Login extends Component {
    constructor(){
        super();
        this.state={
            formType:'login'
        }
    }
    switchForm = (values) =>{
        console.log(values)
        this.setState({
            formType:values
        })
    }
    render(){
        return (
            <Fragment>
                <div className="formWrap"> 
                    {this.state.formType === 'login' ? <LoginForm switchForm={this.switchForm}></LoginForm> : <RegisterForm switchForm={this.switchForm}></RegisterForm>}
                </div>
            </Fragment>
        )
    }
}

export default Login;