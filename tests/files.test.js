const fsPromises = require('fs').promises;

const copy = require('../copy');
const readFilePromise = require('../readFilePromise');

describe('test copy function', () => {
  it('reads a file and writes the file', () => {

    const src = './write.md';
    const dest = './copiedTest.md';

    return copy(src, dest)
      .then(() => {
        return fsPromises.readFile(dest, { encoding: 'utf8' });
      })
      .then(data => {
        expect(data).toEqual('this is a test');
      });
  });
});
