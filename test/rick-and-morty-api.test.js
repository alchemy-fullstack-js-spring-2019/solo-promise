const  { getCharacter } = require('../rick-and-morty-api.js');

//jest mock is used to prevent pinging server
//also tests will pass when api is down
//can I get rid of get char in mock fnc??
jest.mock('../rick-and-morty-api.js');

    describe('rick andmorty service', () => {
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
