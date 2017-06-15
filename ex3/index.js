/*
Прочитать из двух файлов числа,
наити их сумму, вывести в файл output.txt
*/

var fs = require('fs');
var filename1 = process.argv[2];
var filename2 = process.argv[3];

fs.readFile(filename1, function(err, data1){
	if(err) throw err;

	fs.readFile(filename2, function(err, data2){
	if(err) throw err;

		var sum = Number(data1)+Number(data2);

		fs.writeFile('output.txt', sum, function(err){
			if(err) throw err;
			console.log('Done!');
		});

	});
});