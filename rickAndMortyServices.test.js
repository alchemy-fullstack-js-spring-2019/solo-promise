const { getCharacter } = require('./rickAndMortyServices.');



describe('rick and morty service', () => {
  it('can get a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});
