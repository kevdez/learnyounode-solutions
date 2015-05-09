var http = require('http');
var bl = require('bl');

var count = 3;

var results = [];

function printResults () {
	for (var i = 0; i < 3; i++)
		console.log(results[i]);
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response){
		response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);

			results[index] = data.toString();
			count = count - 1;

			if (count == 0)
				printResults();
		}))
	})
}

for(var i = 0; i < 3; i++) {
	httpGet(i);
}