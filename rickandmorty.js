const request = require('superagent');

function getCharacter(id) {

  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      const results = {
        name: res.body.name,
        status: res.body.status,
        species: res.body.species 
      };
      return results;
    });
}

module.exports = getCharacter;
