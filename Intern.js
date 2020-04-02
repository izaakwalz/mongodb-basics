let mongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://localhost:27017/';
mongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err;
  let database = db.db('walz');
  database.createCollection('interns', (err, res) => {
    if (err) throw err;
    console.log('Interns collection created');
    db.close();
  });
});
