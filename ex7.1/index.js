/*Реализовать веб-сервер, отображающий
список записей с поддержой пейджинга
(count,offset)
*/

var express = require('express');
var app = express();
var data = require('./data.json');

console.log(data);

app.listen(7700, function(){
	console.log('Listen on 7700!');
});

app.get('/data', function(req,res){
	
	var offset = req.query.offset;
	var count = req.query.count;
	
	var subdata = data.slice(offset,count);
		
	res.json(subdata);
	
});