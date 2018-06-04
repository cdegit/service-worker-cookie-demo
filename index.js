var express = require('express')
var app = express()

const attachCookie = (url, cookie, value) => (req, res, next) => {
    if (req.url === url) {
        res.cookie(cookie, value)
    }
    next()
}

app.use(attachCookie('/', 'test-cookie', 'val'))
app.use(express.static('public'))

app.listen(3000)
