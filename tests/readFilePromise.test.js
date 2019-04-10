const readFilePromise = require('../readFilePromise');
describe('read promise', () => {
  it('reads a file', () => {
    return readFilePromise('./write.md')
      .then(data => {
        expect(data).toEqual('hi\n');
      })
  })
})
