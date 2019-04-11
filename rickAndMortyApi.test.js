const { getCharacter } = require('./rickAndMortyApi');


describe('getCharacter function tests', () => {
  it('takes an int id and returns promise to resolve character', () => {
    return getCharacter(12)
      .then(character => {
        expect(character).toEqual({
          name: 'Alexander',
          species: 'Human',
          status: 'Dead'
        });
      });

  });
});
