const copy = require('../lib/copy-function');
const fsPromises = require('fs').promises;
const fs = require('fs');

describe('copy function', () => {
  const srcFile = '../promise-write-test.txt';
  const destFile = '../copy-fn-test.txt';
  it('copies promis test file into copy-fn-test.txt', () => {
    copy(srcFile, destFile);
    expect(fs.readFile(srcFile)).toEqual(fs.readFile(destFile));
  });

});
