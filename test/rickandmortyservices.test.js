const getCharacter = require('../lib/rickandmortyservices');

jest.mock('../lib/rickandmortyservices.js');

describe('services test', () => {
  it('can get character by id', () => {
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
