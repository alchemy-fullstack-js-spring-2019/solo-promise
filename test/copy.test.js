const copy = require('../lib/copy');
const fsPromises = require('fs').promises;

describe('copy function', () => {

  afterEach(() => {
    return fsPromises.unlink('./copy-fn-test.txt');
  });

  it('copies promis test file into copy-fn-test.txt', () => {
    const srcFile = './promise-write-test.txt';
    const destFile = './copy-fn-test.txt';
    return copy(srcFile, destFile)
      .then(() => {
        return fsPromises.readFile('./copy-fn-test.txt', { encoding: 'utf8' })
          .then(result => {
            expect(result).toEqual('o hey there hi there');
          });
      });
  });

});

