const getCharacter = require('../rickandmorty');
describe('get character function', () => {
  it('returns name, status, and species of character from id', () => {
    const expected = {
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    };
    return getCharacter(1)
      .then(result => {
        expect(result).toEqual(expected);
      });
  });
});
