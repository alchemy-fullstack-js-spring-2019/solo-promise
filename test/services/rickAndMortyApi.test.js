const { getCharacter } = require('../../lib/services/rickAndMortyApi');

jest.mock('../../lib/services/rickAndMortyApi.js');

describe('Rick and Morty API test', () => {
  it('getCharacter takes an id and returns name, status and species', () => {
    const id = 1;
    const expected = {
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human'
    };

    return getCharacter(id)
      .then(res => {
        expect(res).toEqual(expected);
      });
  });
});
