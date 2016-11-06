const MongoClient = require('mongodb').MongoClient;

 MongoClient.connect('mongodb://localhost/globetrotter', (err, db) => {
    if (err) {
      return console.dir(err);
    }
 }