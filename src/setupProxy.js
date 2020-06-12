const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(process.env.REACT_APP_API, createProxyMiddleware({
        target: process.env.REACT_APP_BASEURL,
        changeOrigin: true,
        pathRewrite: {
            [`^${process.env.REACT_APP_API}`]: ""
        }
    }));
};