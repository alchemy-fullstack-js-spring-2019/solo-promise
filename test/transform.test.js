const fsPromises = require('fs').promises;
const transform = require('../lib/transform');

describe('transform fn', () => {
  it('does funny things to file contents', () => {
    return transform('./letters.txt')
      .then(data => {
        expect(data).toEqual('EREHT OLLOH');
      });
  });
});
