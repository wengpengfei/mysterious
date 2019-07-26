const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname, '../../src'),
  entry: {
    app: './manager/main.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': './manager'
    },
    extensions: ['.js', '.json', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackBar()
  ],
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.scss$/, loader: 'sass-loader' }
    ]
  }
}