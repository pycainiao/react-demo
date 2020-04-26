const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api/v1',
        createProxyMiddleware({
            target: 'http://134.175.88.138:8088/api/v1/', //
            // target: 'http://127.0.0.1:8088/api/v1/', // 本地服务器
            changeOrigin: true,
            pathRewrite: {
                '^/api/v1': '/'
            }
        })
    );
};
