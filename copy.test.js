const fsPromises = require('fs').promises;

const copy = require('./copy.js');

describe('copy function', () => {

  it('exists', () => {
    
    console.log(fsPromises, copy);
  });

  // afterEach(() => {
  //   // eslint-disable-next-line
  //   return fsPromises.unlink('./copy.txt');
  // });

  // it('can copy a text file', () => {
  //   return copy('./test.txt', './copy.txt')
  //     .then(() => {
  //       return fsPromises.readFile('./copy.txt', { encoding: 'utf8' });
  //     })
  //     .then(data => {
  //       expect(data).toContain('Test data for copy function.');
  //     });
  // });
});
