/*Реализовать тайм-сервер, отображающий текущее время
*/

var http = require('http');
var server = http.createServer();
var port = 7700;

server.listen(7700);
console.log('OK on 7700');

server.on('request', function(req,res){
	if(req.url == '/date'){
		var date = new Date().toLocaleString();
		res.end(date);
		console.log('REsult: '+date);
	}else{
		res.statusCode = 404;
		res.end('Oooops!');
		console.log(date);
	}
});


