const readPromise = require('../lib/readPromise');

describe('read promise test', () => {
  it('reads a file', () => {
    return readPromise('./test-original.txt')
      .then(data => {
        expect(data).toEqual('I am testing this string');
      })
      .catch(err => console.log(err));  
  });
});
