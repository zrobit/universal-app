var express = require('express');
var router = express.Router();
// var isoMiddleware = require('./middleware').isoMiddleware
import { isoMiddleware } from './middleware/iso2';


// router.use('/api', require('./api'))
router.use(isoMiddleware)
// router.use('/', require('./controllers'))


// router.all('/hola', )

module.exports = router
