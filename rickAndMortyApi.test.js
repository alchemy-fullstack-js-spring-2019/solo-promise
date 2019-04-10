const getCharacter = require('rickAndMortyApi.js');

describe('getCharacter function tests', () => {
  it('takes an int id and returns promise to resolve character', () => {
    return getCharacter(12)
      .then()


  });
});