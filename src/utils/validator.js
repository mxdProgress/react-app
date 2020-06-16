 export const password_validate = /^(?![0-9a-z]+$)(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[\w]).{8,}$/ //必须为字母加数字加特殊符号且长度不小于8位
 export function CheckPassWord(password) {
     return password_validate.test(password)
 }