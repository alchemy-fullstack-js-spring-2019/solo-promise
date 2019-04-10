const transform = require('../lib/transform');

describe('tests transform function', () => {
  it('reads a file and transforms its contents', () => {
    return transform('./test-original.txt')
      .then(data => {
        expect(data).toEqual('GNIRTS SIHT GNITSET MA ');
      });
  });
});
