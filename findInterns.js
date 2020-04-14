const assert = require('assert');
//  find interns (a)
exports.first_element = async (db, cb) => {
  const collection = db.collection('myMovies');
  await collection.findOne({ movie: 'The Banker' }, (err, result) => {
    assert.equal(err, null);
    const data = {
      status: 'ok',
      result: result,
    };
    console.log(data);
    cb(result);
  });
};

//  find interns (b)
exports.second_element = async (db, cb) => {
  const collection = db.collection('myMovies');
  await collection.find({ rating: 7 }).toArray((err, result) => {
    assert.equal(err, null);
    const data = {
      status: 'ok',
      length: result.length,
      result: result,
    };
    console.log(data);
    cb(result);
  });
};

//  find interns (c)
exports.third_element = async (db, cb) => {
  const collection = db.collection('myMovies');
  await collection
    .find({}, { projection: { _id: 0, rating: 0, year: 0 } })
    .toArray((err, result) => {
      assert.equal(err, null);
      const data = {
        status: 'ok',
        length: result.length,
        result: result,
      };
      console.log(data);
      cb(result);
    });
};
