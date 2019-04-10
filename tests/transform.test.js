const transform = require('../transform');

describe('transform test', () => {
  it('removes all capitals, capitalizes the rest of the string, and reverses the string', () => {
    const src = './newFile.txt';
    return transform(src)
      .then(data => {
        expect(data).toEqual('ELI WE A S SIH');
      });
  });
});
