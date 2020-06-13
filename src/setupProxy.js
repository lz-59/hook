const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/aps', {
        target: 'http://134.175.115.202',
        changeOrigin: true,
        pathRewrite: {
          '^/aps': '' 
        }
      })
    )
}