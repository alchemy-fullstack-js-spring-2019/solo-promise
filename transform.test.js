const transform = require('./transform');

describe('transform function', () => {

  // it('exists', () => {
  //   console.log(transform);
  // });

  it('reads a file and transforms it', () => {
    return transform('./transformMockData.txt');
  
  });
});
