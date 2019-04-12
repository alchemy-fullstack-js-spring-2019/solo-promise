const { transform } = require('../lib/transform');

describe('transform function', () => {
  it('reads a file and transforms it', () => {
    return transform('./transform.txt')
      .then(data => {
        expect(data).toEqual('\nIH');
      });
  });
});
