const copy = require('./copy.js');
const fsPromises = require('fs').promises;

describe('it can copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./copyDemo.json');
  });
  it('can copy a file', () => {
    return copy('./package.json', './copyDemo.json');
  });
});
