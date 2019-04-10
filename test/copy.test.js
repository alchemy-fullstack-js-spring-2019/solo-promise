const copy = require('../lib/copy.js');
const fs = require('fs');

describe('copy tests', () => {
  it('copys from one file to another', () => {
    const src = './package.json';
    const dst = './cope_note.txt';
    copy(src, dst);
    expect(fs.readFileSync(src, 'utf8')).toEqual(fs.readFileSync(dst, 'utf8'));
  });
});
