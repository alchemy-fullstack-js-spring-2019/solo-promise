const transformer = require('./transformer');

describe('transformer', () => {
  it('reads a file and does evil things to it', () =>{
    return transformer('./stuff.text')
      .then(evilData => {
        expect(evilData).toEqual('\nTEKSAB EHT NI NOITOL EHT STUP TI');
      });
  });
});
