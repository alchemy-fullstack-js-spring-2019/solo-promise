const { getCharacter } = require('../../lib/services/rickAndMortyApi');

jest.mock('../../lib/services/rickAndMortyApi.js');

describe('Rick and Morty service', () => {
  it('can get a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Morty Smith',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});
