const copy = require('./copy.js');
const fsPromises = require('fs').promises;
const options = { encoding: 'utf8' };


describe('copy promise function testing', () => {
  afterEach(() => {
    return fsPromises.unlink('./copy.txt');
  });
  it('does something with promises, probably', () => {
    return copy('./write-by-promise.txt', 'copy.txt')
      .then(() => {
        return fsPromises.readFile('copy.txt', options);
      })
      .then(data => {
        expect(data).toEqual('This is a string that will be writed');
      });

  });

});
