const assert = require('assert');

const add_movies = async (db, cb) => {
  // create myMovies collection
  const collection = db.collection('myMovies');
  // insert movies to collection
  try {
    const documents = [
      { movie: 'The Banker', year: '2020', rating: 8 },
      { movie: 'Bad Boys', year: '2020', rating: 7 },
      { movie: 'The Hunt', year: '2020', rating: 7 },
      { movie: 'Bloodshoot', year: '2020', rating: 7.5 },
      { movie: 'First Cow', year: '2020', rating: 6.5 }
    ];

    await collection.insertMany(documents, (err, result) => {
      assert.equal(err, null);
      assert.equal(5, result.result.n);
      assert.equal(5, result.ops.length);
      if (err) throw err;
    });
    const info = {
      success: true,
      message: 'Movies collection',
      count: documents.length,
      data: documents
    };
    console.log(info);
  } catch (err) {
    console.log(err);
  }
};

module.exports = add_movies;
