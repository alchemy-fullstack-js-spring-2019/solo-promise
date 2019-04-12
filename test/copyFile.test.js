const copyFile = require('../lib/copyFile');
const fsPromises = require('fs').promises;

describe('copyfile promise function test', () => {
  beforeEach(() => {
    return fsPromises.writeFile('./test-original.txt', 'I am testing this string', { encoding: 'utf8' });
  });
  afterEach(() => {
    return fsPromises.unlink('../test-copy.txt');
  }); 
  it('copies a file', () => {
    return copyFile('./test-original.txt', '../test-copy.txt')
      .then(() => {
        return fsPromises.readFile('./test-copy.txt', { encoding: 'utf8' })
          .then(data => {expect(data).toEqual('I am testing this string');
          });
      });
  });
});

