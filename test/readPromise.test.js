const readPromise = require('../lib/readPromise.js');

describe('readPromise', () => {
  it('mimics fsPromises.readFile', () => {
    const expected = 'She\'s BRokEN because She BElieVEd\n';
    return readPromise('transformer.txt')
      .then(result => expect(result).toContain(expected));
  });
});
