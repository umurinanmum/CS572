'use strict'

const express = require('express');
const cors = require('cors');
var app = express();
const url = require('url');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const uri="mongodb://localhost:27017";
const port = process.env.port || 3000;
const MongoClient = require('mongodb').MongoClient;
app.use(cors());
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(logger('combined', { stream: accessLogStream }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

let db;
const client = new MongoClient(uri, {useNewUrlParser: true});
// Initialize connection once
client.connect(err => {
    if (err) throw err;
    db = client.db("mwa").collection("homework8");
});

app.post('/insert', (req, res) => {
    db.insertOne(req.body, (err, data) => {
        if (err)
            res.json(err)
        else
            res.json(data);
    });
})


app.post('/search', (req, res) => {

    db.find(
      {
          'name':(req.body.name===undefined)?{$not:{$eq:""}}:`${req.body.name}`,
          'category': `${req.body.category}`,
          'location':
            {$near:
                  {
                      $geometry:
                        { type: "Point", coordinates: [-91.9665342, 41.017654] },
                      $maxDistance: 100
                  }

            }
      }
    ).limit(3)
      .toArray(function (err, result) {
          if (err)
              res.json(err)
          else
              res.json(result);
      });

})
//{"name":"Hyvee","category":"Rest","location":[{"long":"41.011239"},{"lang":"-91.9684817,17"}]}

app.listen(3000);
console.log('Listening port 3000');
