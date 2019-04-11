const readFilePromise = require('../lib/readFilePromise');

describe('read promise', () => {
  it('reads a file', () => {
    return readFilePromise('./transform.txt')
      .then(data => {
        expect(data).toEqual('this is a test\n');
      });
  });
});
 