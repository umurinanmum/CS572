var http = require('http');
var os = require('os');

function checkSystem(){



}

http.createServer(function (req, res) {
    
    res.write('checking your system...');


}).listen(7071, ()=>console.log('up and running at 7071'));