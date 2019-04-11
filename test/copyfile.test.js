const copyFile = require('../lib/copyfile');
const fsPromises = require('fs').promises;

describe('copy file', () => {
  it('test promise which copies an existing file', () =>{
    const src = fsPromises.readFile('./hi.txt', 'utf8');
    const dest = fsPromises.readFile('./copied.txt', 'utf8');
    copyFile('./hi.txt', './copied.txt');

    expect(src).toEqual(dest);
  });
});
