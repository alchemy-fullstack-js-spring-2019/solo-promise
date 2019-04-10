const readPromiseFile = require('../lib/createpromise');
const fsPromises = require('fs').promises;

describe('create promise', () => {
  it('test that promise reads a file', () =>{
    const src = './hi.txt';
    const read = fsPromises.readFile(src, 'utf8');

    expect(readPromiseFile(src)).toEqual(read);
  });
});
