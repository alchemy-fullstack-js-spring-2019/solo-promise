const copy = require('./lib/copyFile.js');
const fsPromises = require('fs').promises;

describe('copy function', () => {

  afterEach(() => {
    return fsPromises.unlink('./copy.txt');
  });

  it('can copy a file', () => {
    return copy('./test.txt', './copy.test.js')
      .then(() => {
        return fsPromises.readFile('./copy.txt', { encoding: 'utf8' });
      })
      .then(result => {
        expect(result).toEqual('hi\n');
      });
  });
});

