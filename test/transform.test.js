const { transform } = require('../lib/transform.js');
// const fsPromises = require('fs').promises;

describe('transformer function ', () => {

  it('reads a file and transforms it', () => {
    return transform('../lib/interestingtext.txt')
      .then(transformData => {
        expect(transformData).toEqual('../lib/allcaps.txt');
      });
  });
});


//compare transform(dummy) to a mock file of only capitalized stuff
