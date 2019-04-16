const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01";
let db;
const client = new MongoClient(uri, {useNewUrlParser: true});
// Initialize connection once
client.connect(err => {
  if (err) throw err;
  db = client.db("homework01").collection("data");
});

app.get('/secret', async (req, res) => {
  const result = await db.findOne();
  var encryptor = require('simple-encryptor')(result.key);
  var decrypted = encryptor.decrypt(result.message);
  res.json(decrypted);
});

app.listen(3000, () => {
    console.log('listening on 3000')
});
