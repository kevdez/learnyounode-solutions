var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var count = 3;

var data1;
var data2;
var data3;

http.get(url1, function (response) {
	response.pipe(bl(function (err, data) {
		data1 = data.toString();
		count = count - 1;
		if (count == 0) {
	console.log(data1);
	console.log(data2);
	console.log(data3);
}
	}))
});
http.get(url2, function (response) {
	response.pipe(bl(function (err, data) {
		data2 = data.toString();
		count = count - 1;
		if (count == 0) {
	console.log(data1);
	console.log(data2);
	console.log(data3);
}
	}))
});
http.get(url3, function (response) {
	response.pipe(bl(function (err, data) {
		data3 = data.toString();
		count = count - 1;
		if (count == 0) {
	console.log(data1);
	console.log(data2);
	console.log(data3);
}
	}))
});