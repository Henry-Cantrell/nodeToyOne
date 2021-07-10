var http = require('http')
var dt = require('./dateModule')

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write("The current date and time are: " + dt.myDateTime());
	res.end();
}).listen(8000);