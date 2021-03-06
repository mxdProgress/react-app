import axios from 'axios';
import { getCookie, getUsername } from './cookie';
import { message } from 'antd';


//第一步 创建实例
var service = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 15000,
});

//第二步 请求拦截
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    console.log(getCookie('token'))
    config.headers['Token'] = getCookie()
    config.headers['Username'] = getUsername()
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//第三步 响应拦截
service.interceptors.response.use(function(response) {
    // 对响应数据做点什么'
    console.log(response);
    const data = response.data;
    if (data.resCode === 0) {
        return response;
    } else {
        message.info(data.message);
    }

}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;