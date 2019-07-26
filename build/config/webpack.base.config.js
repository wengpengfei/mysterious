const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const util = require('../util')

module.exports = {
  context: path.resolve(__dirname, '../../src'),
  entry: {
    app: util.resolve('main.js')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': require('path').resolve(__dirname, `../../src/${process.env.BASE}`)
    },
    extensions: ['.js', '.json', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.scss$/, loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      {
        test: /\.(ttf|woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {}
      }
    ]
  }
}