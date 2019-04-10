const getCharacter = require('../lib/rick-morty-app');

jest.mock('../lib//mocks/rick-morty-mock.js');

describe('getCharacter fn', () => {
  it('returns name, status, species', () => {
    return getCharacter(1)
      .then(res => {
        expect(res).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});
