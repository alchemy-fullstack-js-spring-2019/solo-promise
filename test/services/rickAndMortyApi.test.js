const { getCharacter } = require('../../lib/services/rickAndMortyApi');

jest.mock('../../lib/services/rickAndMortyApi.js');

describe('RICK & MORTY TEST', () => {
  it('get char by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Ricky',
          species: 'Duck',
          status: 'Dead'
        });
      });
  });
});
