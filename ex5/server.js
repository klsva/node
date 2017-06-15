/*Реализовать эхо-сервер,
эхо-сервер на путь /echo отвечает сообщением,
которое отправлено в query*/

var express = require('express');
var app = express();

 

app.listen(7700, function () {
  console.log('Example app listening on port 7700!')
})

app.get('/echo', function(req,res){
	res.send(req.query.say);	
});