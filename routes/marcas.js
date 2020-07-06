const express = require('express')
const router = express.Router()
const marcasController = require('../controller/marcasController')

router.get('/',marcasController.index)






 module.exports = router