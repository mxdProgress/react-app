import service from '../utils/request';

/**
 * 部门添加 
 */

export function depAddForm(data) {
    return service.request({
        url: "/department/add/",
        method: 'POST',
        data: data,
    })
}


/**
 * 部门列表
 */

export function GetList(data) {
    return service.request({
        url: "/department/list/",
        method: 'POST',
        data: data,
    })
}
/**
 * 部门删除
 */

export function Delete(data) {
    return service.request({
        url: "/department/delete/",
        method: 'POST',
        data: data,
    })
}