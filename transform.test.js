const transformer = require('./transform');

describe('transform fn', () => {
  it('takes a file and transforms it to reverse', () => {
    return transformer('./test.txt')
      .then(transformedData => {
        expect(transformedData).toEqual('\n');
      });
  });
});

