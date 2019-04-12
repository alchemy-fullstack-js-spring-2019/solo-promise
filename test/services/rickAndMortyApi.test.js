const { getCharacter } = require('../../lib/services/rickAndMortyApi');

jest.mock('../../lib/services/rickAndMortyApi');

describe('rick and morty api test', () => {
  it('function returns name status and species of character specified by id', () => {
    return getCharacter(1)
      .then(res => {
        expect(res).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
        });
      });
  });
});

