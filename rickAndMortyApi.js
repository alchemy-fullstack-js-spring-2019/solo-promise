const request = require('superagent');

function getCharacter(id) {
  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(results => results.body)
    .then(res => {
      return {
        name: res.name,
        status: res.status,
        species: res.species
      };
    });
}

module.exports = { getCharacter };
