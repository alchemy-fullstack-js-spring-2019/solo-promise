const copy = require('../lib/copyFileFn');
const fsPromises = require('fs').promises;


describe('tests copy function', () => {
  it('passes a source and destination path into the copy function, tests that the contents of the copied file are the same as that of the original', () => {
    return copy('./lib/write.txt', './lib/write-copy.txt')
      .then(() => {
        return Promise.all([fsPromises.readFile('./lib/write-copy.txt', { encoding: 'utf8' }), fsPromises.readFile('./lib/write.txt', { encoding: 'utf8' })])
          .then(([result1, result2]) => {
            expect(result1).toEqual(result2);
          });
      });
  });
});


