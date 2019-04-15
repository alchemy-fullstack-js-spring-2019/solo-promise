const { getCharacter } = require('../lib/services/rickAndMortyApi');

//create mocks so that you don't rate limit api
jest.mock('../lib/services/rickAndMortyApi.js', () => ({
    getCharacter() {
        return Promise.resolve({
            name: 'Morty Smith',
            species: 'Human',
            status: 'Alive'
        });
    }
}));

describe('rick and morty service', () => {
    it('gets a character by id', () => {
        return getCharacter(1)
            .then(character => {
                expect(character).toEqual({
                    name: 'Morty Smith',
                    species: 'Human',
                    status: 'Alive'
                });
            });
    });
});

