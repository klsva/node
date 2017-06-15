/*
Вывести на экран зависимости, указанные в файле
package.json
*/

var pkg = require('./package.json');
var dep = pkg.dependencies;

//console.log(dep);
for (var key in dep) {
	console.log(key + ': ' + dep[key]);
}