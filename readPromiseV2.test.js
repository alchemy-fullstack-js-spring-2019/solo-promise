const readPromiseV2 = require('./readPromiseV2');

describe('Read Promises using "fs" only', () => {
  it('reads the indicated file', () => {
    return readPromiseV2('./package.json')
      .then(data => {
        expect(data).toContain('"devDependencies"');
      });
  });
});
