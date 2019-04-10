const getCharacter = require('../lib/rickAndMortyApi.js');

jest.mock('../lib/__mocks__/rickAndMortyApi.js');

describe('getCharacter', () => {
  it('returns a morty character object containing only character\'s name, status, and species from id', () => {
    const expected = {
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human'
    };
    const id = 2;
    return getCharacter(id)
      .then(result => expect(result).toEqual(expected));
  });
  // it('returns a rick character object containing only character\'s name, status, and species from id', () => {
  //   const expected = {
  //     name: 'Rick Sanchez',
  //     status: 'Alive',
  //     species: 'Human'
  //   };
  //   const id = 1;
  //   return getCharacter(id)
  //     .then(result => expect(result).toEqual(expected));
  // });
});
