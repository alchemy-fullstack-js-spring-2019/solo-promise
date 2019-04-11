const { copy } = require('../lib/copyFile.js');
const fsPromises = require('fs').promises;

describe('copy function', () => {

  // afterEach(() => {
  //   return fsPromises.unlink('../lib/copy.txt');
  // });

  it('can copy a file', () => {
    return copy('./lib/interestingtext.txt', './lib/copy.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./lib/interestingtext.txt', { encoding: 'utf8' }),
          fsPromises.readFile('./lib/copy.txt', { encoding: 'utf8' })
        ]);
      })
      .then(([expected, result]) => {
        expect(expected).toEqual(result);
      });
  });
});

