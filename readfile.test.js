const readPromise = require('./readFile');

describe('read a promise',  () => {
  return readPromise('./stuff.text')
    .then(data => {
      expect(data).toEqual('it puts the lotion in the basket\n');
    });
});
