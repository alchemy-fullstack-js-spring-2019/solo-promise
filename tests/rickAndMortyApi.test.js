const { getCharacter } = require('../lib/rickAndMortyApi');

jest.mock('../lib/__mocks__/rickAndMortyApi.js');

describe('rick and morty service', () => {
  it('can get a character by id', () => {
    return getCharacter(2)
      .then(character => {
        expect(character).toEqual({
          name: 'Morty Smith',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});
