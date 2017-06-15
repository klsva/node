/*
Написать программу, которая по переданному имени текстового файла
выводит количество букв в нем
*/

var fs = require('fs');
var filename = process.argv[2];
var target = ' ';
var sum = 0;

fs.readFile(filename, function(err, data){
	if(err) throw err;
 	var pos = -1;
	while ((pos = data.indexOf(target, pos + 1)) != -1) {
  		sum+=1;
	}
 console.log(data.length-sum);
 console.log(sum);
});
