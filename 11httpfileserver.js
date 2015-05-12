var http = require('http');
var fs = require('fs');
var net = require('net');

var server = http.createServer(function (req, res) {
	// request handling logic ...
});

server.listen(process.argv[2]);
