const transform = require('../lib/transform.js');

describe('using transform function', () => {
  it('uses a transform function to reverse the contents of a file', () => {
    return transform('./lib/write.txt')
      .then(transformedData => {
        expect(transformedData).toEqual('\nATA EKI NEPPIR');
      });
  });
});
