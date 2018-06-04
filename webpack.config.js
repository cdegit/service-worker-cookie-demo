const path = require('path')

module.exports = {
    mode: 'development',
    entry: './worker',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'worker.js'
    }
}
