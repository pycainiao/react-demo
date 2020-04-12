const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/web',
        createProxyMiddleware({
            // target: 'http://183.2.181.238:32097/web', //
            target: 'http://127.0.0.1:8088/api/v1', //
            changeOrigin: true,
            pathRewrite: {
                '^/web': '/'
            }
        })
    );
};
