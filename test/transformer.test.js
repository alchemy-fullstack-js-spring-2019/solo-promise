const transformer = require('../lib/transformer');

describe('transformer function', () => {

  it('reads a file and transforms it', () => {
    return transformer('./lib/funny.txt')
      .then(transformedData => {
        expect(transformedData).toEqual('!TU NEKCIH ?TAH SSEU');
      });
  });

});
