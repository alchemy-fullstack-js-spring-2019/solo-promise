const transformer = require('../lib/transformer');

describe('transformer function', () => {
  it('it reads a file, then removes all capital letters, then makes all letters capital,then reverses the string', () => {
    const expected = 'DEIL EH ESUACEB KO S\'EH';
    return transformer('transformer.txt')
      .then(transformed => {
        expect(transformed).toContain(expected);
      });
  });
});
