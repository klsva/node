var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, function() {
	console.log('Server is running on http://localhost:3000/');
});

//var countConnection = 0;
/*
io.on('connection', function(socket){
	countConnection+=1;
	socket.name = 'Client '+ id++;
	console.log('%s is connected.', socket.name);
	
	socket.on('disconnect', function(){
		countConnection -=1;
		console.log('Client disconnected');
	});
	
	socket.on('message', function(text){
		console.log("%s: %s", socket.name, text);
		io.emit('message', {
			name: socket.name,
			text: text
		});
	});
});
*/

io.on('connection', function(socket) {
	socket.on('client-message', function(text) {
		console.log('SOCKET SAYS:', text);
		socket.emit('server-message', text);
	});
});