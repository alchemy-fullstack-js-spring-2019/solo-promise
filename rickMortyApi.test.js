const { getOriginCharacters } = require('./rickMortyApi');

jest.mock('./rickMortyApi');

describe('rick and morty api service', () => {
  it('can get a character by id', () => {
    return getOriginCharacters(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Morty Smith',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});
