const fsPromises = require('fs').promises;
const copy = require('./copy.js');

describe('copy function', () => {

  afterEach(() => {
    return fsPromises.unlink('./copy.txt');
  });

  it('can copy a text file', () => {
    return copy('./test.txt', './copy.txt')
      .then(() => {
        return fsPromises.readFile('copy.txt', { encoding: 'utf8' });
      })
      .then(data => {
        expect(data).toContain('Test data for copy function.');
      });
  });

  it('can copy a json file', () => {
    return copy('./package.json', './copy.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./package.json', { encoding: 'utf8' }),
          fsPromises.readFile('./copy.txt', { encoding: 'utf8' })
        ]);
      })
      .then(data => {
        expect(data.toString()).toContain('"devDependencies"');
      });
  });
});
