const { getCharacter } = require('./rickAndMortyApi.js');
jest.mock('./rickAndMortyApi.js', () => {
  return { 
    getCharacter(){
      return Promise.resolve({
        name: 'Cyclops Rick',
        status: 'Dead',
        species: 'Humanoid'
      });
    }
  };
});

describe('Rick and Morty NAME, STATUS, SPECIES', () => {
  it('takes an id and returns a promise that resolves to character info', () => {
    let id = 86;
    return getCharacter(id)
      .then(result => {
        expect(result).toEqual({
          name: 'Cyclops Rick',
          status: 'Dead',
          species: 'Humanoid'
        });
      });
  });
});

