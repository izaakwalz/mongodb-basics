let mongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://localhost:27017/walz';
mongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err;
  console.log('Database created by walz');
  db.close();
});
// { useUnifiedTopology: true } given error
