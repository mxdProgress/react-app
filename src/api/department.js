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