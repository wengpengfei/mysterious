const config = require('./config/webpack.dev.config')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = new Promise((resolve, reject) => {


  portfinder.getPort({
    port: config.devServer.port,
    stopPort: config.devServer.port + 1000
  }, (error, newPort) => {
    if (error) return reject()
    config.devServer.port = newPort

    config.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`You application is running here http://${config.devServer.host}:${config.devServer.port}`],
            notes: ['Some additionnal notes to be displayed unpon successful compilation']
          },
          onErrors: function (severity, errors) {
            // You can listen to errors transformed and prioritized by the plugin
            // severity can be 'error' or 'warning'
          },
          // should the console be cleared between each compilation?
          // default is true
          clearConsole: true,

          // add formatters and transformers (see below)
          additionalFormatters: [],
          additionalTransformers: []
        })
    )

    resolve(config)
  })
})