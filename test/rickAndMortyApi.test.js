const { getCharacter } = require('../lib/rickAndMortyApi.js');

jest.mock('../lib/services/rickAndMortyApi.js', () => ({
  getCharacter() {
    return Promise.resolve({
      name: 'Marty Smith',
      species: 'Human',
      status: 'Alive'
    });
  }
}));

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
