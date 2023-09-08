var http = require('http');
var fs = require('fs');
const express = require('express');
const app = express();
var server = http.createServer(function (req, res){
	var readable = fs.createReadStream("D:/personal/html5up-forty/index.html");
	app.use(express.static("assets"));
	readable.pipe(res);
	return;
});
server.listen(8080);
