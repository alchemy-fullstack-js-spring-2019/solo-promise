const getCharacter = require('../lib/rickMortyApi.js');

describe('uses getCharacter function', () => {
  it('uses char function to get char by ID and return an object that chars name, status, and species', () => {
    return getCharacter(2)
      .then(character => {
        expect(character).toEqual({ name: 'Morty Smith', status: 'Alive', species: 'Human' });
      });
  });
});
