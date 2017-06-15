/*Реализовать веб-сервер, осуществляющий фильтр записей
на основе параметров в query
*/

var express = require('express');
var app = express();
var data = require('./data');

app.listen(7700, function(){
	console.log('Listan on 7700!');
});

app.get('/filter', function(req,res){
	var filter1 = req.query.filter1;
	var filter2 = req.query.filter2;
	
	subdata1 = data.filter(function(item){
		return item.Value == filter1;
	});
	
	subdata2 = subdata1.filter(function(item){
		return item.Caption == filter2;
	});
	
	res.json(subdata2);
});
