const getCharacter = require('../rick-and-morty-api');

//jest mock is used to prevent pinging server
//also tests will pass when api is down
jest.mock('../../lib/service/rickAndMortyApi.js', ()=>{
    getCharacter(){
        return Promise.resolve({
            name: "Morty Smith",
            species: "Human",
            status: 'Alive'
        }
    })
})

descrive('rick andmorty service', ()=>{
    it('can get a character by id', ()=>{
        return getCharacter(1)
        .then(character => {
            expect(character).toEqual({
                name: 'Rick Sanchez',
                species: 'Human',
                status: 'Alive'
            })
        })
    })
})
