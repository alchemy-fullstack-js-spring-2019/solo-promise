const { copy } = require('./copyfile');
const fsPromises = require('fs').promises;

describe('copy file', () => {
//   afterEach(() => {
//     return fsPromises.unlink('newfiles.js');
//   });

  it('copies a file and returns the promise', () => {
    copy('files.js', 'newfiles.js')
      .then(() => {
        Promise.all([ //waits for all and gives array of refurned values
          fsPromises.readFile('files.js', 'utf8'),
          fsPromises.readFile('newfiles.js', 'utf8'),
        ])
          .then(([file1, file2]) => {
            expect(file1).toEqual(file2);
          });
      });
  });
});
