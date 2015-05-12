var net = require('net');

// 'YYYY-MM-DD hh:mm'
var server = net.createServer(function (socket) {
	var now = new Date();
	var month = (now.getMonth() < 10) ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
	var date = (now.getDate() < 10) ? "0" + now.getDate() : now.getDate();
	var result = now.getFullYear() + "-" 
	+ month + "-"
	+ date + " "
	+ now.getHours() + ":"
	+ now.getMinutes() + "\n";
	socket.end(result);

});

server.listen(process.argv[2]);

