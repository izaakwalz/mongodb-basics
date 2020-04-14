const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const add_movies = require('./Interns');
const {
  first_element,
  second_element,
  third_element,
} = require('./findInterns');
const update_movies = require('./updateInterns');

// #database name
const dbName = 'movieCollection';
// #database url
let dbUrl = 'mongodb://localhost:27017/';

mongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, db) => {
  assert.equal(null, err);
  if (err) throw err;
  let database = db.db(dbName);
  add_movies(database, () => {
    db.close();
  });
  first_element(database, () => {
    second_element(database, () => {
      third_element(database, () => {
        update_movies(database, () => {
          db.close();
        });
      });
    });
  });
});
