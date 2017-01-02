var express = require('express')
  , router = express.Router()

router.use('/', require('./home'))
// router.use('/about', require('./about'))

module.exports = router
