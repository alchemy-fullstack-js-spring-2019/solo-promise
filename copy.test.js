const fsPromises = require('fs').promises;
const copy = require('./copy.js');

describe('copy function', () => {

  afterEach(() => {
    return fsPromises.unlink('./copy.txt');
  });

  it('can copy a file', () => {
    return copy('./package.json', './copy.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./test.txt', { encoding: 'utf8' }),
          fsPromises.readFile('./copy.txt', { encoding: 'utf8' })
        ]);
      })
      .then(() => {
        expect('./copy.txt');
      });
  });
});
