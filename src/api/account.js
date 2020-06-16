import service from '../utils/request';

/**
 * 登录接口 
 */

export function login(data) {
    return service.request({
        url: "/login/",
        method: 'POST',
        data: data,
    })
}

/**
 * 验证码接口 
 */

export function getCodes(data) {
    return service.request({
        url: "/getSms/",
        method: 'POST',
        data: data,
    })
}
/**
 * 注册接口 
 */

export function register(data) {
    return service.request({
        url: "/register/",
        method: 'POST',
        data: data,
    })
}