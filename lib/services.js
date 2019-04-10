const request = require('superagent');

function getCharacter(id) {
    return request
        .get(url interpolated with id)
        .then(res => ({
            name: res.body.name,
            species: res.body.species,
            status: res.body.status
        }));
}
