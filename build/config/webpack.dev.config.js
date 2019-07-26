const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    quiet: true,
    hot: true,
    compress: true,
    proxy: {},
    overlay: true
  }
})