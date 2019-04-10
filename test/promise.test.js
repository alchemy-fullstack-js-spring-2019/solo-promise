const readPromise = require('../lib/promise');

describe('read promise', () => {
  it('reads a file', () => {
    return readPromise('./letters.txt')
      .then(data => {
        expect(data).toEqual('HEY THERE hello there\n');
      });
  });
});
