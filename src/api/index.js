var express = require('express')
  , router = express.Router()

router.use('/users', require('./users'))
// router.use('/cars', require('./cars'))

module.exports = router
