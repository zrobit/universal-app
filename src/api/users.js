var express = require('express');

var user = express.Router();

user.get('/', function(req, res,next){
  res.json({hola: 'mundo'})

})

// function user(req, res, next){
//   res.json({saludo: 'hola'})
// }

module.exports = user;
