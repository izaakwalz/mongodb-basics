const assert = require('assert');

exports.find_movies = async (db, err) => {
  const collection = db.collection('myMovies');

  const find_one = await collection.findOne({ movie: 'The Banker' });

  const a = {
    success: true,
    message: '(a)',
    a: find_one
  };
  console.log(a);
};

exports.seven = { rating: 7 };

exports.projection_query = {
  projection: { _id: 0, rating: 0, year: 0 }
};
