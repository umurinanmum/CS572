var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {

    var data = fs.readFileSync(path.join(__dirname, 'data.html'));

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

}).listen(8082);