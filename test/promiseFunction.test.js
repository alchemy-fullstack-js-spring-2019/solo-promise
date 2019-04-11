const { readPromise } = require('../lib/promiseFunction.js');

describe('promise func', () => { 
    
  it('uses function to read', () => {
    return readPromise('./string.txt')
      .then(data => {
        expect(data).toEqual('HellO');
      });
  });
});
