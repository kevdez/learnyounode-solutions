var mymodule = require('./6mymodule');

var filePath = process.argv[2];
var fileExt = process.argv[3];

mymodule(filePath, fileExt, function(err, data){
	if(err)
		return console.error('There was an error:', err);

	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	};
});
