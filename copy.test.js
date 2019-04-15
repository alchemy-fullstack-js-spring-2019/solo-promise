// const fsPromises = require('fs').promises;

// const copy = require('./copy.js');

// describe('copy function', () => {

//   afterEach(() => {
//     // eslint-disable-next-line
//     return fsPromises.unlink('./copy.txt');
//   });

//   it('can copy a text file', () => {
//     return copy('./test.txt', './copy.txt')
//       .then(() => {
//         return fsPromises.readFile('./copy.txt', { encoding: 'utf8' });
//       })
//       .then(data => {
//         expect(data).toContain('Test data for copy function.');
//       });
//   });

//   it('can copy a json file', () => {
//     return copy('./package.json', './copy.txt')
//       .then(() => {
//         return Promise.all([
//           fsPromises.readFile('./package.json', { encoding: 'utf8' }),
//           fsPromises.readFile('./copy.txt', { encoding: 'utf8' })
//         ]);
//       })
//       .then(data => {
//         expect(data.toString()).toContain('"devDependencies"');
//       });
//   });
// });

const copy = require('./copy');
const fsPromises = require('fs').promises;
//
describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./http-copy.md');
  });

  it('copies from src and write it to dst', () => {
    return copy('../http.md', '/http-copy.md')
      .then(() => {
        //expect(fs.readFileSync('./.gitignore')).toEqual(fs.readFileSync('./test.txt))
        
        return Promise.all([
          fsPromises.readFile('../http.md'),
          fsPromises.readFile('./http-copy.md')
        ]);
      })
      .then(([readHttpMd, copyHttpMd]) => {
        expect(readHttpMd).toEqual(copyHttpMd);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});
