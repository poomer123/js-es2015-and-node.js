const fs = require('fs')
const path = require('path')

const filepath = path.resolve(__dirname, '..', 'public', 'index.html')
const markup = fs.readFileSync(filepath, 'utf8')

module.exports = (req, res, next) => {
    res.send(markup)
}