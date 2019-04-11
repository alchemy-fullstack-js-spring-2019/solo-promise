const request = require('superagent');

function getCharacter(id) {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      return {
        name: res.body.name,
        species: res.species.name,
        status: res.status.name
      };
    });
}

module.exports = getCharacter;
