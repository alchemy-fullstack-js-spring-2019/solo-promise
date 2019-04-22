const request = require('superagent');

fnction getChar(id) {
    return request
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then( res => ({
            return {
                name: res.body.name,
                species: res.body.species,
                status: res.body.status
        }));
}

module.exports = {
    getChar
};