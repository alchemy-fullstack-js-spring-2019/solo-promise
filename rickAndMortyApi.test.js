const { getCharacter } = require('./rickAndMortyApi.js');
const fsPromises = require('fs').promises;

describe('Rick and Morty NAME, STATUS, SPECIES', () => {
  it('takes an id and returns a promise that resolves to character info', () => {
    let id = 86;
    getCharacter(id)
      .then(result => {
        expect(result).toEqual({
          name: 'Cyclops Rick',
          status: 'Dead',
          species: 'Humanoid'
        });
      });
  });
});

