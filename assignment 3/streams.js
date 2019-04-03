var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {

    fs.createReadStream('./data.html').pipe(res);

}).listen(8083);