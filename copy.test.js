const copy = require('./copy');
const fs = require('fs');

describe('copy using promise function', () => {
  it('copies using fsPromise', () => {
    const src = './1_promises.md';
    const dst = './1_promises-copy2.md';
    copy(src, dst)
      .then(() => {
        expect(fs.existsSync(dst)).toBeTruthy();
      })
      .catch(err => console.log(err));
  });
});
