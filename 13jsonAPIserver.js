var http = require('http');
var url = require('url');

// requests like:
// "/api/parsetime?iso=2013-08-10T12:10:15.474Z"
// or
// "/api/unixtime?iso=2013-08-10T12:10:15.474Z"

var server = http.createServer(function (req, res) {
	if (req.method != 'GET')
		return res.end('send me a GET\n');

	res.writeHead(200, { 'Content-Type' : 'application/json'});

	var requestObj = url.parse(req.url, true);
	if (requestObj.pathname == '/api/parsetime') {
		var date = new Date (requestObj.query.iso);
		res.end(JSON.stringify({
			'hour'		:	date.getHours(),
			'minute'	:	date.getMinutes(),
			'second'	:	date.getSeconds()
			}));
	} else if (requestObj.pathname == '/api/unixtime') {
		var date = new Date (requestObj.query.iso);
		res.end(JSON.stringify({ "unixtime" : date.getTime()}));
	}
});
server.listen(process.argv[2]);

console.log("Server running at http://127.0.0.1:" + process.argv[2] + "/");