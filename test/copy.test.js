const fsPromises = require('fs').promises;
const { copy } = require('../lib/copy');

describe('Copy function', () => {
  afterEach(() => {
    return fsPromises.unlink('./hi-copy.txt');
  });

  it('can copy a file', () => {
    return copy('./hi.txt', './hi-copy.txt')
      .then(() => {
        return fsPromises.readFile('./hi-copy.txt', { encoding: 'utf8' });
      })
      .then(result => {
        expect(result).toEqual('hi\n');
      });
  });
});
