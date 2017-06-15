/*
Реализовать веб-сервер,
отображающий список записей и позволяющий добавлять новые
и удалять старые
*/

var express = require('express');
var app = express();
var bodyParser= require('body-parser')
var data = require('./data.json');
var fs = require('fs');
var chars = data.data;
var nextID = data.meta.next_id;

console.log(nextID);

app.listen(7700, function(){
	console.log('Listen on 7700!');
});

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'jade');

//all records
/*
app.get('/records', function(req, res){
	res.send(chars);
});
*/
//all records
app.get('/records', function(req, res){
	//console.log(chars);
	res.render('list', {title: 'List', list: chars});
});

//form for new record
app.get('/records/new', function(req, res){
	res.render('form', {title: 'New List'});
});
//add new records
app.post('/records', function(req, res) {
	var caption = req.body.caption;
	var value = req.body.value;
	var id = nextID++;
	chars.push({
		id: id,
		Caption: caption,
		Value: value		
	});
	res.render('list', {title: 'List', list: chars});


});
//edit record, form for it
app.get('/records/:id', function(req, res){
	var id = req.params.id;
	item = chars.find(function(item){
		return item.id == id;
	});
	console.log(item);
	res.render('item', {item: item});
});

//edit record, update
app.post('/records', function(req,res){
	var caption = req.body.caption;
	var value = req.body.value;
	var id = req.body.id;
	console.log(id);
	item = chars.find(function(item){
		return item.id == id;
	});
	item.Caption = caption;
	item.Value = value;
	//res.send('UPDATE');
	
	fs.writeFile('./data.json',		
		JSON.stringify(
			{
			meta:{next_id: nextID},
			data: chars
			}, 4, 
			function(err){
				if(err) console.error(err);
			})
	);
	
	res.render('list', {title: 'List', list: chars});
	
});


//delete record
/*
app.get('/records/:id', function(req, res){
	var id = req.params.id;
	console.log('DELETE id: ' +id);
	deleteItem(id, function(err){
		if (err){
			res.statusCode = 500;
			res.send(err.message);
		}
	});
});

function deleteItem(id, callback){
	try{
		item = data.filter(function(item){
		return item.id == id;
	});
		console.log(item);
		console.log(data.indexOf(item));
		data.splice(data.indexOf(item), 1);
		
		callback();
	}
	catch(e){
		callback(e);
	}
};
*/

app.get('/records/:id/delete', function(req, res) {
	var id = req.params.id;
	console.log('DELETE id: ' +id);
	item = chars.find(function(item){
		return item.id == id;
	});
	if (!item){
		callback(new Error('Not found!'));
		return;
	}
	//console.log((item));
	//console.log(chars.indexOf(item));
	chars.splice(chars.indexOf(item), 1);
	//res.send('DELETE');

	fs.writeFile('./data.json',		
		JSON.stringify(
			{
			meta:{next_id: nextID},
			data: chars
			}, 4, 
			function(err){
				if(err) console.error(err);
			})
	);
	
	res.redirect('/records');
	//нужно додумать маршрутизацию
});		


