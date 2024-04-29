const jwt = require('jsonwebtoken')
const User = require('../models/user')
const user = async (req, res, next) => {
    const authToken = req.header('Authorization')
    if (!authToken) return res.json('no token')
    const token = authToken.replace('Bearer ', '')
    try {
        const verifayToken = jwt.verify(token, process.env.jwt_Key)
        const user = await User.findById(verifayToken.id)
        req.user = user
        next()
    } catch (e) {
        res.json(e.message)
    }
}

module.exports = { user }