function getCharacter(id) {
  const request = require('superagent');
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(character => {
      return {
        name: character.body.name,
        status: character.body.status,
        species: character.body.species
      };
    });
}

module.exports = getCharacter;
