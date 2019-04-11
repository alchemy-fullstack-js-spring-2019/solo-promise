const copy = require('../copy');
const fsPromises = require('fs').promises;

const options = {
  encoding: 'utf8'
};

describe('copy using promise function', () => {
  const src = './test.txt';
  const dst = './copy.txt';
  
  it('copies using fsPromise', () => {
    return copy(src, dst)
      .then(() => {
        return fsPromises.readFile(dst, options);
      })
      .then(result => {
        expect(result).toBe('hi there\n');
      });
  });

  afterEach(() => {
    return fsPromises.unlink(dst);
  });
});
