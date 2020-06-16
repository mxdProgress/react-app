import React,{Component,Fragment} from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Code from "../../components/code";
import {register } from '../../api/account';
import { CheckPassWord } from '../../utils/validator';
import CryptoJs from "crypto-js";


class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            module:'register',
            password:'',
            code:''
        }
    }

    //email改变事件
    emailChange = (e) =>{
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
        register(requestData).then(res=>{
            let data = res.data;
            if(data.resCode===0){
                message.success(data.message);
                this.toggleForm();
            }
        }).catch(err=>{

        });
    };

    //点击切换登录注册
    toggleForm = () =>{
        this.props.switchForm('login')
    }

    render(){
        return (
            <Fragment>
                <div className="formHeader">
                        <h4>注册</h4>
                        <span onClick={this.toggleForm}>账号登录</span>
                    </div>
                    <div className="formContent">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item name="username" rules={[
                                { required : true, message : '请输入用户名!' },
                                { type : "email", message : "邮箱格式错误!"}
                            ]} >
                                <Input onChange={this.emailChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                            </Form.Item>
                            <Form.Item name="password" rules={[
                                { required: true, message: '请输入密码!' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        const pwd = getFieldValue("passwords");

                                        if(!CheckPassWord(value)){
                                            return Promise.reject('必须为字母加数字加特殊符号且长度不小于8位!');
                                        }
                                        if(pwd && pwd !== value){
                                            return Promise.reject('两次输入密码不正确!');
                                        }

                                        return Promise.resolve();
                                        
                                    },
                                })
                            ]} >
                                <Input onChange={this.passwordChange} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
                            </Form.Item>
                            <Form.Item name="passwords" rules={[
                                { required: true, message: '请输入密码!' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if(getFieldValue('password') == value){
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('两次输入密码不一致!');
                                    },
                                })
                                ]} >
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请重新输入密码" />
                            </Form.Item>
                            <Form.Item name="code" rules={[
                                { required: true, message: '请输入验证码!' },
                                {len:6,message: '验证码6位!'}
                            ]} >
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input onChange={this.codeChange} prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="请输入验证码" />
                                    </Col>
                                    <Col span={9}>
                                       <Code username={this.state.username} module={this.state.module}/>
                                    </Col>
                                </Row>
                                
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                            </Form.Item>
                        </Form>
                    </div>
            </Fragment>
        )
    }
}

export default RegisterForm;