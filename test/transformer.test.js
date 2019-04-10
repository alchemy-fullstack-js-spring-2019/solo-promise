const transformer = require('../lib/transformer');

describe('transformer function', () => {
  it('it reads a file, then removes all capital letters, then makes all letters capital,then reverses the string', () => {
    const expected = '\nDEIL EH ESUACEB KO S\'EH';
    return transformer('transformer.txt')
      .then(transformed => {
        expect(transformed).toEqual(expected);
      });
  });
});
