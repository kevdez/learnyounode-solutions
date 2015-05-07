var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(filePath, function(err, list){
	for (var i = 0; i < list.length; i++) {
		if('.'+fileExt == path.extname(list[i]))
			console.log(list[i]);
	};
});