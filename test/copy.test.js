const fs = require('fs');
const fsPromises = require('fs').promises;
const { copy } = require('../lib/copy');

describe('Copy function', () => {
  beforeEach(done => {
    fs.unlink('./hi-copy.txt', done);
  });

  it('can copy a file', () => {
    return copy('./hi.txt', './hi-copy.txt')
      .then(() => {
        return fsPromises.readFile('./hi-copy.txt', { encoding: 'utf8' });
      })
      .then(result => {
        expect(result).toEqual('Hi\n');
      });
  });
});
