const express = require('express')
const router = express.Router()

const newControl = require('../controllers/newControl')

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.get('/show', authentication, newControl.show)
router.get('/show/:id', authentication, newControl.showOne)
router.post('/create', authentication, newControl.create)
router.put('/edit/:id', authentication, authorization, newControl.edit)
router.delete('/delete/:id', authentication, authorization, newControl.delete)


module.exports = router