var express = require('express');
var app = express();

var router = require('./router')



app.use(router)

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.listen(3000, function () {
  console.log('Server is Ready');
});
