var express = require('express');
var app = express();

app.listen(7700, function () {
  console.log('Example app listening on port 7700!')
})

app.use(express.static('public'));

