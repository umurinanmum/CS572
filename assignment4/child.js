var fs = require('fs');

const readFromFile = (filePath) => {
    var readStream = fs.createReadStream("./" + filePath);
    readStream.on('data', function (chunk) {
        process.send(chunk);
    }).on('end', function () {
        process.send('the_end');
    });
};


process.on('message', (msg) => {
    readFromFile(msg);
});