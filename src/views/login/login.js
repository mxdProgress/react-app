import React, { Component, Fragment } from "react";
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {login } from '../../api/account';
import Code from "../../components/code";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
        }
    }
    //email改变事件
    emailChange = (e) => {
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }

    //表单提交
    onFinish = values => {
        console.log('Received values of form: ', values);
        login().then(res=>{
            console.log(res)
        }).catch(err=>{

        });
    };
    //点击切换登录注册
    toggleForm = () => {
        this.props.switchForm('register')
    }

    render(){
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
                                <Input onChange={this.emailChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                            </Form.Item>
                            <Form.Item name="password" rules={
                                [{ required: true, message: '密码不能为空!' },
                                // {min:6,message:'密码不能小于6位!'},
                                // {max:20,message:'密码不能大于20位!'},
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || value.length<6) {
                                                return Promise.reject('密码小于6位!');
                                            }else{
                                                return Promise.resolve();
                                            }
                                        },
                                    }),
                                ]
                                }>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                            </Form.Item>
                            <Form.Item name="code" rules={[{ required: true, message: '验证码不能为空!' }]} >
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="number" placeholder="code" />
                                    </Col>
                                    <Col span={9}>
                                        <Code username = {this.state.username} />
                                        {/* <Button type="danger" disabled={codeDisabled} loading={loadingStatus} block onClick={this.getCode}>{codeText}</Button> */}
                                    </Col>
                                </Row>
                                
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
            </Fragment>
        )
    }
}

export default Login;