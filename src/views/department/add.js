import React, { Component } from 'react';
import { Form, Input, InputNumber ,Radio ,Button,message } from 'antd';
import { depAddForm,editor } from '../../api/department';
class depAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            layout:{
                labelCol: { span: 3 },
                wrapperCol: { span:20 },
           },
           loading:false
        }
    }
    componentDidMount(){
        if(!this.props.location.state) return false;
        this.getEditFun()
    }

    getEditFun = () => {
        editor({id:this.props.location.state.id}).then((res)=>{
            console.log(res)
            if(res.status==200){
                const data=res.data.data
                this.refs.form.setFieldsValue(data) 
            }
        })
    }

    onFinish = (value) => {
        this.setState({loading:true})
        depAddForm(value).then((res)=>{
            this.setState({loading:false})
            const data = res.data;
            if(data.resCode==0){
                message.success(data.message);
            }
        }).catch()
    }

    render() {
        return (
               <Form
                    {...this.state.layout}
                    name="form"
                    ref="form"
                    initialValues={{ number: 0 ,status:true}}
                    onFinish={this.onFinish}
                    >
                    <Form.Item
                        label="部门名称"
                        name="name"
                        rules={[{ required: true, message: '部门名称必填!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="人员数量"
                        name="number"
                    >
                        <InputNumber min={1} max={100}/>
                    </Form.Item>
                    <Form.Item
                        label="启禁用"
                        name="status"
                    >
                        <Radio.Group>
                            <Radio value={true}>启用</Radio>
                            <Radio value={false}>禁用</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="描述"
                        name="content"
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item style={{'textAlign':"center"}}>
                        <Button type="primary"  htmlType="submit" loading={this.state.loading}>提交</Button>
                    </Form.Item>
                </Form>
        )
    }
}

export default depAdd;