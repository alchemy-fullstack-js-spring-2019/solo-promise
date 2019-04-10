const transform = require('../transform');

describe('Transform function', () => {
  it('transform using promise', () => {
    const src = './write1.txt';
    
    transform(src)
      .then(result => {
        expect(result).toEqual('\nEREH I');
      })
      .catch(err => console.log(err));
  });
});
