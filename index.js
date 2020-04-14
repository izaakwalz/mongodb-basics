const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const add_movies = require('./Interns');
const { find_movies, seven, projection_query } = require('./findInterns');
const dbName = 'movieCollection';

let dbUrl = 'mongodb://localhost:27017/';

mongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err;
  let database = db.db(dbName);
  //   add_movies(database, () => {
  //     db.close();
  //   });
  find_movies(database, (err, res) => {
    s;
    if (err) throw err;
    db.close();
  });
  database
    .collection('myMovies')
    .find(seven)
    .toArray((err, rea) => {
      if (err) throw err;
      const b = {
        success: true,
        message: '(b)',
        b: rea
      };
      console.log(b);
      db.close();
    });

  database
    .collection('myMovies')
    .find({}, projection_query)
    .toArray((err, rea) => {
      if (err) throw err;
      const c = {
        success: true,
        message: '(c)',
        c: rea
      };
      console.log(c);
      db.close();
    });
});
