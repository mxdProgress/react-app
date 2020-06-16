import React, { Component, Fragment } from "react";
import { Form, Input, Button, Row, Col , message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { CheckPassWord } from '../../utils/validator';
import {login } from '../../api/account';
import Code from "../../components/code";
import CryptoJs from "crypto-js";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            module:'login',
            password:'',
            code:'',
            loadingStatus:false,
            codeDisabled:false
        }
    }
    //email改变事件
    emailChange = (e) => {
        this.setState({
            username:e.target.value
        })
    }

    //密码改变事件
    passwordChange = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    //验证码改变事件
    codeChange = (e) => {
        this.setState({
            code:e.target.value
        })
    }

    //表单提交
    onFinish = values => {
        let requestData = {
            username:this.state.username,
            password:CryptoJs.MD5(this.state.password).toString(),
            code:this.state.code
        }
        this.setState({
            loadingStatus:true,
            codeDisabled:true
        })
        login(requestData).then(res=>{
            let data = res.data;
            if(data.resCode==0){
                message.success(data.message);
            }else{
                message.warning(data.message);
            }
            this.setState({
                loadingStatus:false,
                codeDisabled:false
            })
        }).catch(err=>{
            this.setState({
                loadingStatus:false,
                codeDisabled:false
            })
        });
    };

    //点击切换登录注册
    toggleForm = () => {
        this.props.switchForm('register')
    }

    render(){
        const {codeDisabled , loadingStatus} =this.state;
        return (
            <Fragment>
                <div className="formHeader">
                        <h4>登录</h4>
                        <span onClick={this.toggleForm}>账号注册</span>
                    </div>
                    <div className="formContent">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item name="email" rules={
                                [{ required: true, message: '邮箱不能为空!' },
                                { type:'email', message: '邮箱格式不正确!' }]
                                }>
                                <Input onChange={this.emailChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                            </Form.Item>
                            <Form.Item name="password" rules={
                                [{ required: true, message: '密码不能为空!' },
                                // {min:6,message:'密码不能小于6位!'},
                                // {max:20,message:'密码不能大于20位!'},
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if(!CheckPassWord(value)){
                                                return Promise.reject('必须为字母加数字加特殊符号且长度不小于8位!');
                                            }else{
                                                return Promise.resolve();
                                            }
                                        },
                                    }),
                                ]
                                }>
                                <Input onChange={this.passwordChange} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
                            </Form.Item>
                            <Form.Item name="code" rules={[{ required: true, message: '验证码不能为空!' }]} >
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input onChange={this.codeChange} prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="验证码" />
                                    </Col>
                                    <Col span={9}>
                                        <Code username = {this.state.username} module={this.state.module}/>
                                        {/* <Button type="danger" disabled={codeDisabled} loading={loadingStatus} block onClick={this.getCode}>{codeText}</Button> */}
                                    </Col>
                                </Row>
                                
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" isabled={codeDisabled} loading={loadingStatus} className="login-form-button">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
            </Fragment>
        )
    }
}

export default Login;