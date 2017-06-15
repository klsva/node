/*Реализовать веб сервис,
бросающий шестигранный кубик
*/

var http = require('http');
var server = http.createServer();
var port = 7700;

server.listen(7700);
console.log('Server is running on port '+port);

server.on('request', function(req, res){
	if(req.url == '/cube'){
		var num = Math.floor(Math.random()*6)+1;
		res.end(String(num));
		console.log('Result: '+num);
	} else {
		res.statusCode = 404;
		res.end('Ooops!');
		console.log('Result: ' + num);
	}
});
