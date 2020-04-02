const express = require('express')
const router = express.Router()

const userControl = require('../controllers/userControl')

router.post('/register', userControl.register)
router.post('/login', userControl.login)
router.post('/googlelogin', userControl.googleSignin)

module.exports = router