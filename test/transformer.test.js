const transformer = require('../lib/transformer');

describe('transform function', () => {
  it('reads a file and transforms it', () => {
    return transformer('./test.txt')
      .then(transformedData => {
        expect(transformedData).toEqual('\n.IH');
      })
  });
});
