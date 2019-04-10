const readFilePromise = require('../promise');

describe('read promise', () => {
  it('reads a file', () => {
    return readFilePromise('./newFile.txt')
      .then(data => {
        expect(data).toEqual('This Is a New File');
      });
  });
});
