const request = require('superagent');

function getCharacter(id){
  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(char => {
      return { name: char.body.name,
        status: char.body.status,
        species: char.body.species
      };
    });
}

module.exports = { getCharacter };
