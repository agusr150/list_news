const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
    let { token } = req.headers
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userdata = decoded
        console.log(req.userdata)
        next()
    } catch (err) {
        res.status(400).json('wrong token')
    }
}

module.exports = authentication