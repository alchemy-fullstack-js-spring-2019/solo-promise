const { getChar } = require('../lib/service');

jest.mock('../../lib/service.js', () => ({
  getChar() {
    return Promise.resolve({
      name: 'Morty Smith',
      species: 'Human',
      status: 'Alive'
    });
  }
}));

describe('rm service', () => {
  it('can get a character by id', () => {
    return getChar(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Morty Smith',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});