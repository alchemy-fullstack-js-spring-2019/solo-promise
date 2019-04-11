const transform = require('../transform');

describe('Transform function', () => {
  it('transform using promise', () => {
    const src = './transform-test.txt';
    
    return transform(src)
      .then(result => {
        expect(result).toEqual('\nEREH I');
      })
      .catch(err => console.log(err));
  });
});
