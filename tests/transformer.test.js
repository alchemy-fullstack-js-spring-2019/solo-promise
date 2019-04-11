const transformer = require('../transformer');

describe('transformer function', () => {
  it('reads a file and transforms it', () => {
    return transformer('./transform.txt')
      .then(transformedData => {
        expect(transformedData).toContain('\nTSET A SI SIHT');
      });
  });
});

