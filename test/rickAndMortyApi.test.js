const { getCharacter } = require('../lib/rickAndMortyApi.js');

describe('service tests', () => {
  const id = 5;

  it('returns character', () => {
    return getCharacter(id)
      .then(data => {
        expect(data).toEqual({
          name: 'Jerry Smith',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});
