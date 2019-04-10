const copy = require('../copy');
const fs = require('fs');
const rimraf = require('rimraf');

describe('copy using promise function', () => {
  const src = './1_promises.md';
  const dst = './1_promises-copy2.md';
  it('copies using fsPromise', () => {
    copy(src, dst)
      .then(() => {
        expect(fs.existsSync(dst)).toBeTruthy();
      })
      .catch(err => console.log(err));
  });

  afterEach(() => {
    rimraf(dst, err => {
      if(err) throw err;
    });
  });
});
