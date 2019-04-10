const { getCharacter } = require('../lib/rickAndMortyApi');

jest.mock('../lib/rickAndMortyApi.js');

describe('get R+M character', () => {
    it('takes an id and returns a character', () => {
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
