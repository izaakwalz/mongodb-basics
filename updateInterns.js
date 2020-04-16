const assert = require('assert');
const update_movies = async (db, cb) => {
  const collection = db.collection('myMovies');
  await collection.findOneAndUpdate(
    { movie: 'The Banker' },
    {
      $set: {
        movie: 'Ford v Ferrari',
        year: '2019',
        rating: 9.5,
      },
    },
    (err, result) => {
      assert.equal(err, null);
      const data = {
        status: 'ok',
        result: result.value,
      };
      console.log(data);
      cb(result);
    }
  );
};

module.exports = update_movies;
