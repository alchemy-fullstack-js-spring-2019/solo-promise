const { getCharacter } = require('../../lib/services/rickAndMortyApi');

jest.mock('../../lib/services/_mocks_/rickAndMortyApi.js');

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
