const fs = require('fs')

module.exports = (on, config) => {
  on('task', {
    listFiles (dir) {
      return fs.readdirSync(dir)
    }
  })
}
