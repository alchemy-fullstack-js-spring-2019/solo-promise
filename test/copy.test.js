const fsPromises = require('fs').promises;
const copy = require('../lib/copy');

describe('promises copy function', () => {
  afterEach(() => {
    return fsPromises.unlink('./copy-test.txt');
  });

  it('can copy a file', () => {
    return copy('./test.txt', './copy-test.txt')
    .then(() => {
      return Promise.all([
        fsPromises.readFile('./test.txt', { encoding: 'utf8' }),
        fsPromises.readFile('./copy-test.txt', { encoding: 'utf8' })
      ]);
    })
    .then(([expected, result]) => {
      expect(expected).toEqual(result);
    });
  });
}); 
