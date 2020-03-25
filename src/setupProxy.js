const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/web',
        createProxyMiddleware({
            target: 'http://183.2.181.238:32097/web', //
            changeOrigin: true,
            pathRewrite: {
                '^/web': '/'
            }
        })
    );
};
