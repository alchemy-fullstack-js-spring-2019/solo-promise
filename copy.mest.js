const copy = require('./copy.js');
const fsPromises = require('fs').promises;

describe('it can copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./copy.txt');
  });

  it('can copy a file', () => {
    return copy('./test.txt', './copy.txt')
      .then(() => {
        return; 
      });
  });

});


