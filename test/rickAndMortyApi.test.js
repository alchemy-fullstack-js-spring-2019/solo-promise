const { getCharacter } = require('../lib/rickAndMortyApi.js');

describe('service tests', () => {
  const id = 5;

  it('returns char details', {
    expect(getCharacter(id)).toEqual();
  });
});
