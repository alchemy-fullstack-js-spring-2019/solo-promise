const fsPromises = require('fs').promises;

const copy = require('../copy');

describe('test copy function', () => {
  it('reads a file and writes the file', async() => {

    const src = './write.md';
    const dest = './copiedTest.md';

    await copy(src, dest);
    const data = await fsPromises.readFile(dest, { encoding: 'utf8' });
    expect(data).toEqual('this is a test');
  });
});
