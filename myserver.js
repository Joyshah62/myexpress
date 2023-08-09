var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.end("hello");

}).listen(4444);

console.log("server started");
