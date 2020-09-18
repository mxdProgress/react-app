import React , { Component, Fragment } from 'react';
import { Form,Input, Button,Table ,Switch,message,Modal} from 'antd';
import { GetList,Delete } from '../../api/department';
import Store from '../../store/Index';
import { addstatus } from '../../store/action/ConfigReducer'
import { Link } from 'react-router-dom';


class depHoem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber:1,
            pageSize:10,
            dataSource : [],
            keyWord:'',
            selectedRowKeys:[],
            visible:false,
            id:'',
            confirmLoading :false,
            columns : [
                {
                    title: '部门名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '禁启用',
                    dataIndex: 'status',
                    key: 'status',
                    render:(text,currentRow)=>{
                        return <Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked={currentRow.status==="1" ? true : false} />
                    }
                },
                {
                    title: '人员数量',
                    dataIndex: 'number',
                    key: 'number',
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    width:220,
                    render:(text,currentRow)=>{
                        return(
                            <div className="inline-button">
                                <Button type="primary">
                                    <Link to={{pathname:'/index/department/add', state:{id:currentRow.id}}}>编辑</Link>
                                </Button>
                                <Button onClick={()=>this.deleteFun(currentRow.id)}>删除</Button>
                            </div>
                        )
                    }
                }
            ]
        }
    }
    componentDidMount(){
        this.getListFun();
        Store.subscribe(()=>{
            console.log(Store.getState())
        })
        Store.dispatch(addstatus('所有','all'))
    }
    

    getListFun = () => {
        const requestData = {
            pageNumber : this.state.pageNumber,
            pageSize : this.state.pageSize
        }
        if(this.state.keyWord){
            requestData.name = this.state.keyWord
        }
        GetList(requestData).then(res=>{
            const data = res.data.data.data
            if(data.length > 0){
                this.setState({
                    dataSource:data
                })
            }
            

        }).catch()
    }
    deleteFun(id) {
        if(!id)return false
        this.setState({
            visible:true,
            id:id
        })
    }
    onFinish = values => {
        this.setState({
            keyWord:values.username,
            pageSize:10,
            pageNumber:1
        })
        this.getListFun()

    }   
    checkBox = (selectedRowKeys) =>{
        this.setState({selectedRowKeys})
        console.log(selectedRowKeys)

    }
    handleOk = () =>{
        this.setState({
            confirmLoading: true,
         });
         Delete({id:this.state.id}).then(res=>{
            if(res.data.resCode==0){
                message.success(res.data.message)
                this.getListFun()
                this.setState({
                    confirmLoading:false,
                    id:'',
                    visible:false
                })
            }
        })
    }
    handleCancel = () => {
        this.setState({
          visible: false,
        });
      };
    render() {
        const rowSelection = {
            onChange:this.checkBox
        }
        return (
            <Fragment>
            <Form  name="" layout="inline" onFinish={this.onFinish}>
                <Form.Item
                name="username"
                label="部门名称"
                >
                    <Input placeholder="部门名称" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary"  htmlType="submit" >搜索</Button>
                </Form.Item>
            </Form>
            <div style={{marginTop:"30px"}}></div>
            <Table dataSource={this.state.dataSource} columns={this.state.columns}  bordered rowKey="id" size="small" rowSelection={{...rowSelection}}/>
            <Modal
                title="删除信息"
                visible={this.state.visible}
                onOk={this.handleOk}
                cancelText="取消"
                okText="确认"
                confirmLoading={this.state.confirmLoading}
                onCancel={this.handleCancel}
                >
                <p>确认删除吗？<span style={{color:'#ff0000'}}>删除后将无法恢复！！</span></p>
            </Modal>
            </Fragment>
        )
    }
}

export default depHoem;