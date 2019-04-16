const fsPromises = require('fs').promises;

const copy = require('./copy.js');

describe('copy function', () => {

  it('exists', () => {
    
    console.log(fsPromises, copy);
  });

  it('can copy a text file', () => {
    return copy('./test.txt', './copyTo.txt')
      .then(() => {
        return fsPromises.readFile('./copyTo.txt', 'utf8');//{ encoding: 'utf8' });
      })
      .then(data => {
        expect(data).toContain('Test data for copy function.');
      });
  });
});
