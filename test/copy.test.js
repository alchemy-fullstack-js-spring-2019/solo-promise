const fsPromises = require('fs').promises;
const copy = require('../lib/copy');

const source = '1_promises.md';
const destination = '1_promises-copy.md';

describe('copy function using promises', () => {
  afterEach(() => {
    fsPromises.unlink(destination);
  });
  
  it('copies a file', () => {
    copy(source, destination)
      .then(() => Promise.all([
        fsPromises.readFile(source),
        fsPromises.readFile(destination)
      ]))
      .then(([expected, result]) => expect(result).toEqual(expected));
  });
});
