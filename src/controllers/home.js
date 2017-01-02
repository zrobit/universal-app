var express = require('express');

var home = express.Router();
var User = global.collections.user

home.get('/', function(req, res,next){
  let context = {state: 'hola', root:'roooootaaaa'}
  res.render('home', context)
  // User.create({name:'holaaaa'})
  //   .then(function(user){
  //     res.json(user);

  //   })
  //   .catch(next)
})

module.exports = home;
