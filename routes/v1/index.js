const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index.js')

router.get('/', dialogController.home)

router.get('/dialogs', dialogController.dialogs)

router.post('/dialogs', dialogController.dialogp)

module.exports = router