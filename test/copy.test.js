const copy = require('../lib/copy.js');
const transformer = require('../lib/transformer.js');
const fs = require('fs');
const fsPromises = require('fs').promises;

describe('copy tests', () => { 
  afterEach(() =>{
  });
    
  it('copys from one file to another', () => {
    return copy('./package.json', './copy.txt')
      .then(() => {
        return fsPromises.readFile('./copy.txt', 'utf8');
      })
      .then(result => {
        expect(result).toEqual(fs.readFileSync('./package.json', 'utf8'));
        fsPromises.unlink('./copy.txt');
      });
    
  });

  it('transforms data', () => {
    return transformer('./string.txt')
      .then(result => expect(result).toEqual('LLE'));
  
  });
});
