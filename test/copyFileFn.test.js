const copy = require('../lib/copyFileFn');
const fsPromises = require('fs').promises;


describe('tests copy function', () => {
  it('passes a source and destination path into the copy function, tests that the contents of the copied file are the same as that of the original', () => {
    return copy('./lib/write.txt', './lib/write-copy.js')
      .then(() => {
        return fsPromises.readFile('./lib/write-copy.js', { encoding: 'utf8' })
          .then(result => {
            expect(result).toEqual(fsPromises.readFile('./lib/write.txt'));
          });
      });
  });
});
