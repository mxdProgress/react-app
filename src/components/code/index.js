import React , {Component} from "react";
import { Button , message} from 'antd';
import { getCodes} from '../../api/account'
let timer = null;

class Code extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            loadingStatus:false,
            codeText:'获取验证码',
            codeDisabled:false,
            module:''
        }
    }

    //这个生命周期的功能就是将传入的props映射到state上面 如果不映射则需要返回null
    static getDerivedStateFromProps(props, state){
         return props;
    }

    //获取验证码
    getCode = () => {
        if(!this.state.username){
            message.warning('邮箱不能为空！');
            return false;
        }
        this.setState({
            loadingStatus:true,
            codeText:'发送中'
        })
        const pam = {
            username:this.state.username,
            module:this.state.module
        }
        getCodes(pam).then(res=>{
            message.success(res.data.message)
            this.count()
        }).catch(err=>{
            this.setState({
                loadingStatus:false,
                codeText:'重新获取'
            })
        })
    }

    //倒计时
    count = () => {
        let sec = 60;
        this.setState({
            loadingStatus: false,
            codeText: `${sec}S`,
            codeDisabled: true
        })

        timer = setInterval(()=>{
            sec--;
            this.setState({
                codeText: `${sec}S`,
            })

            if(sec <= 0){
                clearInterval(timer);
                this.setState({
                    codeText:'重新获取',
                    codeDisabled:false
                })
                return false;
            }
        },1000)
    }

    componentWillUnmount = () =>{
        clearInterval(timer);
    }

    render(){
        const {codeDisabled , loadingStatus , codeText } = this.state;
        return <Button type="danger" disabled={codeDisabled} loading={loadingStatus} block onClick={this.getCode}>{codeText}</Button>
    }

}

export default Code;