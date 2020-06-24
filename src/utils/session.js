export const setToken = (val) => {
    sessionStorage.setItem('token', val);
}

export const getToken = () => {
    return sessionStorage.getItem('token');
}