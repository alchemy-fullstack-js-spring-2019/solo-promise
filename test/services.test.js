jest.mock('..services js')

describe('rick and morty service', () => {
    it('can get character by id', ()=> {
        return getCharacter(1)
        .then(character => {
            expect(character).toEqual({
                name:
                species:
                status:
            })
        })
    })
})
