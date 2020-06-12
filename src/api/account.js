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
 * 登录接口 
 */

export function getCodes(data) {
    return service.request({
        url: "/getSms/",
        method: 'POST',
        data: data,
    })
}