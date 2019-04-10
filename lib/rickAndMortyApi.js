const request = require('superagent');

module.exports = function getCharacter(id) {
  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.body)
    .then(character => ({
      name: character.name,
      status: character.status,
      species: character.species
    }));
};
