const fsPromises = require('fs').promises;
const copy = require('../lib/copy');

describe('promises copy function', () => {
  afterEach(() => {
    return fsPromises.unlink('./copy.txt');
  });

  it('can copy a file', () => {
    return copy('./test.txt', './copy.txt')
    .then(() => {
      return fsPromises.readFile('./copy.txt', { encoding: 'utf8' });
    })
    .then(result => {
      expect(result).toEqual('hi\n');
    })
  });
}); 
