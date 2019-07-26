const path = require('path')
module.exports = {
  resolve (_path) {
    return `./${path.join(process.env.BASE, _path)}`

  }
}