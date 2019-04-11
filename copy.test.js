const copy = require('./copy');
const fsPromises = require('fs').promises;


describe('copy function', () =>{
  afterEach(() => {
    return fsPromises.unlink('../stuff.text');
  });

  it('can copy a file', () => {
    return copy('./stuff.text', './something.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./stuff.text', { encoding: 'utf8' }),
          fsPromises.readFile('./something.txt', { encoding: 'utf8' })
        ]);
        
      })
      .then(([expected, result]) => {
        expect(expected).toEqual(result);
      });
  });
});



