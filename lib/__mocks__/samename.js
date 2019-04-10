module.exports = {
    getCharacter() {
        return Promise.resolve({
            name: 'morty',
            species: 'human'
            status: 'alive'
        })
    }
}
