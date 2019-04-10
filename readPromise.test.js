const readFilePromise = require('./readPromise.js');
describe('read promise', () => {
  it('reads a file', () => {
    return readFilePromise('./test.txt')
      .then(data => {
        expect(data).toEqual('HI\n');
      });
  });
});
