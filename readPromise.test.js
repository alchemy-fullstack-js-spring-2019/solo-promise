const readPromise = require('./readPromise.js');

describe('read promise', () => {
  it('reads a file', () => {
    return readPromise('./write-by-promise.txt')
      .then(data => {
        expect(data).toEqual('This is a string that will be writed');
      });
  });
});