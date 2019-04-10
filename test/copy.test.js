const fsPromises = require('fs').promises;
const copy = require('../lib/copy.js');

describe('it copies a file with promises', () => {
  it('can copy a file', () => {
    const src = '../file.txt';
    const dst = './copyfile.txt';
    copy(src, dst);
    expect(fsPromises.readFile('../file.txt')).toEqual(fsPromises.readFile('./copyfile.txt'));
  });
});

// WHAT RYAN DID
// describe('copy function', () => {
//   afterEach(() => {
//     return fsPromises.unlink('./copy.txt');
//   });
//   it('can copy a file', () => {
//     return copy('./text.txt', './copy.txt')
//       .then(() => {
//         return fsPromises.readFile('./copy.txt', { encoding: 'utf8' })
//       })
//       .then(result => {
//         expect(result).toEqual('hi\n');
//       });
//   });
// });
