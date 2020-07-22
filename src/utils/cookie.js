import cookie from 'react-cookies';

const token = "token";
const username = "username";
export function setCookie(value) {
    cookie.save(token, value)
}

export function getCookie() {
    return cookie.load(token)
}

export function setUsername(value) {
    cookie.save(username, value)
}

export function getUsername() {
    return cookie.load(username)
}