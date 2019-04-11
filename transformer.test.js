const transformer = require('./transformer');

describe('transformer', () => {
  it('reads a file and does evil things to it', () =>{
    return transformer('./stuff.text')
      .then(evilData => {
        expect(evilData).toEqual('\nOLLEH');
      });
  });
});
