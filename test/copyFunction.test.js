const fsPromises = require('fs').promises;
const copy = require('../lib/copyFunction');

describe('COPY FUNCTION', () => {
  
  afterEach(() => {
    return fsPromises.unlink('./new.txt');
  });

  it('can copy a file', () => {

    return copy('./lib/funny.txt', './new.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./lib/funny.txt', { encoding: 'utf8' }), 
          fsPromises.readFile('./new.txt', { encoding: 'utf8' })
        ]);
      })
      .then(([result, expected]) => {
        expect(result).toEqual(expected);
      });
  });

});
