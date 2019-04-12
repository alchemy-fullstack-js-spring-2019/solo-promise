const { readPromise } = require('../lib/readPromise');

describe('readPromise function', () => {
  it('reads a file', () => {
    return readPromise('./hi.txt')
      .then(data => {
        expect(data).toEqual('hi\n');
      });
  });
});
