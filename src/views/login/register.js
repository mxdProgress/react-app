import React,{Component,Fragment} from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Code from "../../components/code";


class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            username:''
        }
    }

    emailChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }

    onFinish = values => {
        console.log('Received values of form: ', values);
    };

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
                            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                                <Input onChange={this.emailChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                            </Form.Item>
                            <Form.Item name="passwords" rules={[{ required: true, message: 'Please input your passwords!' }]} >
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="passwords" />
                            </Form.Item>
                            <Form.Item name="code" rules={[{ required: true, message: 'Please input your code!' }]} >
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="number" placeholder="code" />
                                    </Col>
                                    <Col span={9}>
                                       <Code username={this.state.username} />
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