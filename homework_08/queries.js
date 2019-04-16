const uri="mongodb://localhost:27017";
const MongoClient = require('mongodb').MongoClient;

let db;
const client = new MongoClient(uri, { useNewUrlParser: true });
// Initialize connection once
client.connect(err => {
  if(err) throw err;

  db = client.db("homework08").collection("restaurants");

  //q1
  db.find({}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q2
  db.find({}).project({restaurant_id:1,name:1,district:1,cuisine:1}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q3
  db.find({}).project({restaurant_id:1,name:1,district:1,cuisine:1,_id:0}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q4
  db.find({}).project({_id:0,restaurant_id:1,'address.zipcode':1,name:1}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q5
  db.find({district:'Bronx'}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q6
  db.find({district:'Bronx'}).limit(5).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q7
  db.find({district:'Bronx'}).skip(5).limit(5).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q8
  db.find({'address.coord': {$lt: -95.754168}}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q9
  db.find({cuisine: {$ne:'American '},'grades.score':{$gte: 70},'address.coord': {$lt: -65.754168}}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q10
  db.find({name: { $regex:'^Wil'}}).project({restaurant_id:1,name:1,district:1}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q11
  db.find({name: { $regex:'ces$'}}).project({restaurant_id:1,name:1,district:1}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q12
  db.find({name: { $regex:'Reg'}}).project({restaurant_id:1,name:1,district:1}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q13
  db.find({district:'Bronx',cuisine:{$in:['American ','Chinese']}}).toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q14
  db.find({district:{$in: ['Bronx',"Brooklyn","Queens","Staten Island"]},cuisine:{$in:['American ','Chinese']}})
    .project({restaurant_id:1,name:1,district:1,cuisine:1})
    .toArray((err,doc) => {
    console.log(doc);
  });

  console.log("########################");

  //q15
  db.find({district:{$in: ['Bronx',"Brooklyn","Queens","Staten Island"]},cuisine:{$in:['American ','Chinese']}})
    .project({restaurant_id:1,name:1,district:1,cuisine:1})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");

  //q16
  db.find({grades:{$elemMatch:{score:{$lt:10}}}})
    .project({restaurant_id:1,name:1,district:1,cuisine:1,grades: 1})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");

  //q17
  db.find({'address.coord.1':{$gt:42,$lt:52}})
    .project({restaurant_id:1,name:1,address:1})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");


  //q18
  db.find({})
    .project({restaurant_id:1,name:1,address:1})
    .sort({"name":1})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");

  //q19
  db.find({})
    .project({restaurant_id:1,name:1,address:1})
    .sort({"name":-1})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");


  //q20
  db.find({})
    .project({restaurant_id:1,name:1,district:1,cuisine:1})
    .sort({"district":-1,"cuisine":1})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");

  //q21
  db.find({"address.street":{$exists:true}})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");

  //q22
  db.find({"address.coord":{ $type : "double" }})
    .toArray((err,doc) => {
      console.log(doc);
    });

  console.log("########################");

  //q23
  db.find({name: { $regex:'^Mad'}})
    .project({name:1,district:1,'address.coord':1,cuisine:1})
    .toArray((err,doc) => {
      console.dir(doc);
    });

  console.log("########################");
});
