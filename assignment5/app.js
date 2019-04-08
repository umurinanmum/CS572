var express = require('express');
var axios = require('axios');

var app = express();

app.set('trust proxy',true);
app.enable('case sensitive routing');
app.set('strict routing',true);
app.set('x-powered-by',false);


const fetchData = async () => {
    try {
        var data = await axios.get('https://randomuser.me/api/?results=10', { responseType: 'application/json' });
        return data;
    } catch (error) {
        console.error(error)
    }
};

app.get('/users', async function (req, res) {
    var data = await fetchData();
    res.set('Content-Type', 'application/json');
    res.setHeader('Cache-Control','private, max-age:86400');
    res.send(data.data.results);
    res.end();
});


app.listen(6060);