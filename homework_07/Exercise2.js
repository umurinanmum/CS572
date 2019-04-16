'use strict'
const cors = require('cors');
const express = require('express');
const url = require('url');
const app = express();
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const jsonParser = express.json()
const uri = "mongodb+srv://tugrul:123@hw7-grfgj.mongodb.net/test?retryWrites=true";
const MongoClient = require('mongodb').MongoClient;

app.use(cors());
var loggerStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
// setup the logger
app.use(logger('combined', { stream: loggerStream }));


let db;
const client = new MongoClient(uri, { useNewUrlParser: true });
// Initialize connection once
client.connect(err => {
  if(err) throw err;

  db = client.db("homework07").collection("lectures");

  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");
});


app.get('/favicon.ico', (req, res) => {
  const url_obj = url.parse(req.url, true);
  if (url_obj.path === '/favicon.ico')
    res.end();

});

app.get('/lectures', async (req, res)=> {
    const result = await db.find().toArray();
    res.json(result);
});

app.post('/lectures/:q',jsonParser, async (req, res)=> {
  const result = await db.find({"lecture":req.params.q}).toArray();
  res.json(result);
});

app.post('/lectures',jsonParser, async (req, res)=> {
  const result = await db.save(req.body);
  res.json(result);
});

app.put('/lectures',jsonParser, async (req, res)=> {
  const result = await db.findOneAndReplace({},{"lecture":req.body.lecture,"course":req.body.course});
  res.json(result);
});

app.delete('/lectures',jsonParser, async (req, res)=> {
  const result = await db.deleteOne({lecture:req.body.lecture});
  res.json(result);
});