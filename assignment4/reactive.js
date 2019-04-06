var http = require('http');
var fs = require('fs');
var url = require('url');
const {fork} = require('child_process');

http.createServer(function (req, res) {
    var parsed = url.parse(req.url, true);
    var path = parsed.query.url;

    const childProc = fork('child.js');

    childProc.send(path);

    childProc.on('message' , data =>{
        if(data==='the_end'){
            res.end(Buffer.from(data));
        }else{
            res.write(Buffer.from(data));
        }
    });

}).listen(7070, ()=>console.log('up and running at 7070'));