const { copy } = require('/copyFile.js');
const fs = require('fs');

describe('copy function tests', () => {
  afterEach(done => {
    fs.unlink('./destination.json', done);
  });
    
  it('check copy() copies', () => {
    //copy package.json and store it in sample.json and send it to the test as copied
    const copied = copy('./package.json');
    const original = './package.json';
    expect(copied).toEqual(original);
  });
});




