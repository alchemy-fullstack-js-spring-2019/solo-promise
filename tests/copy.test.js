const copy = require('../copy');
const fsPromises = require('fs').promises;

describe('copy test', () => {
  it('copies a file and returns the data', () => {
    const src = './newFile.txt';
    const dest = './copiedFile.txt';
    return copy(src, dest)
      .then(() => fsPromises.readFile(dest, 'utf8'))
      .then(data => {
        expect(data).toEqual('This Is a New File');
      });
  });
});
