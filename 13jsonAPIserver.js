var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	if (req.method != 'GET')
		return res.end('send me a GET\n');

	res.writeHead(200, { 'Content-Type' : 'application/json'});

	var requestObj = url.parse(req.url, true);
	if (requestObj.pathname == '/api/parsetime') {
		var date = new Date (requestObj.query.iso);
		var jsonObject = {
			'hour'		:	date.getHours(),
			'minute'	:	date.getMinutes(),
			'second'	:	date.getSeconds()
			};
		res.end(JSON.stringify(jsonObject));
	} else if (requestObj.pathname == '/api/unixtime') {
		var date = new Date (requestObj.query.iso);

		res.end(JSON.stringify({ "unixtime" : date.getTime()}));
	}
});

server.listen(process.argv[2]);
