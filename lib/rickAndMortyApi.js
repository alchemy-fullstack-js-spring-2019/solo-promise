const request = require('superagent');

//ryan's version
request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => res.body.results)
    .then(getOriginForCharacters)
    .then(console.log);

function getOriginForCharacters(characters) {
    const dedupedURLs = [...new Set(characters
        .map(character => character.origin.url))];
    return Promise.all(
        dedupedURLs
            .filter(url => url !== '')
            .map(url => request.get(url).then(res => res.body.name))
    );
}

function getCharacter(id) {
    return request
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            return {
                name: res.body.name,
                species: res.body.species,
                status: res.body.status
            };
        });
}

module.exports = { getCharacter };
